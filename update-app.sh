#!/bin/bash

# PRIORIA - Update Script
# Script para actualizar la aplicación en producción

set -e

echo "🔄 Iniciando actualización de PRIORIA..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

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

cd /var/www/iapriori.com

print_status "Haciendo backup de la configuración actual..."
cp .env.local .env.local.backup.$(date +%Y%m%d_%H%M%S)

print_status "Deteniendo la aplicación..."
pm2 stop iapriori

print_status "Actualizando código desde Git..."
# Si usas Git, descomenta la siguiente línea:
# git pull origin main

print_status "Instalando nuevas dependencias..."
npm install

print_status "Construyendo aplicación..."
npm run build

print_status "Restaurando configuración..."
cp .env.local.backup.* .env.local

print_status "Iniciando aplicación..."
pm2 start iapriori

print_status "Verificando estado..."
pm2 status

print_status "✅ Actualización completada!"

echo ""
echo "🔧 Verificaciones recomendadas:"
echo "   - Verificar logs: pm2 logs iapriori --lines 50"
echo "   - Probar sitio: curl -I http://localhost:3000"
echo "   - Verificar NGINX: nginx -t && systemctl reload nginx"
