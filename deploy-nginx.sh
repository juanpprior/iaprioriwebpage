#!/bin/bash

# PRIORIA - NGINX Deployment Script
# Dominio: iapriori.com
# IP: 34.51.34.212

set -e  # Exit on any error

echo "🚀 Iniciando despliegue de PRIORIA en NGINX..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Este script debe ejecutarse como root (sudo)"
    exit 1
fi

print_status "Actualizando sistema..."
apt update -y

print_status "Instalando NGINX..."
apt install nginx -y

print_status "Instalando Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

print_status "Verificando versiones instaladas..."
nginx -v
node --version
npm --version

print_status "Creando directorio para la aplicación..."
mkdir -p /var/www/iapriori.com
cd /var/www/iapriori.com

print_status "Descargando proyecto PRIORIA..."
# Asumiendo que el proyecto está en el directorio actual
# Si necesitas clonar desde Git, descomenta la siguiente línea:
# git clone https://github.com/tu-usuario/iapriori.git .

print_status "Instalando dependencias..."
npm install

print_status "Configurando variables de entorno..."
if [ ! -f .env.local ]; then
    cp env.example .env.local
    print_warning "Archivo .env.local creado. Por favor, edítalo con tus valores reales:"
    print_warning "nano /var/www/iapriori.com/.env.local"
fi

print_status "Construyendo aplicación..."
npm run build

print_status "Instalando PM2..."
npm install -g pm2

print_status "Creando configuración PM2..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'iapriori',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/iapriori.com',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

print_status "Iniciando aplicación con PM2..."
pm2 start ecosystem.config.js
pm2 startup
pm2 save

print_status "Creando configuración NGINX..."
cat > /etc/nginx/sites-available/iapriori.com << 'EOF'
server {
    listen 80;
    server_name iapriori.com www.iapriori.com;

    # Configuración de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://js.stripe.com; frame-src https://calendly.com" always;

    # Proxy a la aplicación Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    # Optimización para archivos estáticos
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Optimización para imágenes
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        proxy_pass http://localhost:3000;
        expires 30d;
        access_log off;
        add_header Cache-Control "public";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
}
EOF

print_status "Habilitando sitio en NGINX..."
ln -sf /etc/nginx/sites-available/iapriori.com /etc/nginx/sites-enabled/

print_status "Verificando configuración NGINX..."
nginx -t

print_status "Reiniciando NGINX..."
systemctl restart nginx

print_status "Verificando estado de servicios..."
echo "Estado de PM2:"
pm2 status

echo "Estado de NGINX:"
systemctl status nginx --no-pager -l

print_status "Instalando Certbot para SSL..."
apt install certbot python3-certbot-nginx -y

print_warning "Configuración básica completada!"
print_warning "Antes de continuar con SSL, asegúrate de:"
print_warning "1. Que el dominio iapriori.com apunte a la IP 34.51.34.212"
print_warning "2. Editar el archivo .env.local con tus valores reales"
print_warning "3. Verificar que la aplicación esté funcionando en http://iapriori.com"

read -p "¿Deseas continuar con la configuración SSL? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Configurando SSL con Let's Encrypt..."
    certbot --nginx -d iapriori.com -d www.iapriori.com --non-interactive --agree-tos --email admin@iapriori.com
    
    print_status "Configurando renovación automática de SSL..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    
    print_status "Verificando configuración SSL..."
    nginx -t
    systemctl reload nginx
fi

print_status "🎉 Despliegue completado!"
echo ""
echo "📋 Resumen de la configuración:"
echo "   - Aplicación: http://localhost:3000"
echo "   - NGINX: http://iapriori.com"
echo "   - SSL: https://iapriori.com (si se configuró)"
echo ""
echo "🔧 Comandos útiles:"
echo "   - Ver logs de la app: pm2 logs iapriori"
echo "   - Reiniciar app: pm2 restart iapriori"
echo "   - Ver logs NGINX: tail -f /var/log/nginx/error.log"
echo "   - Verificar SSL: certbot certificates"
echo ""
echo "⚠️  IMPORTANTE: Edita /var/www/iapriori.com/.env.local con tus valores reales"
