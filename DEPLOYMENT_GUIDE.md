# 🚀 Guía de Despliegue - PRIORIA Website

## 📋 Información del Servidor

- **IP del Servidor:** 34.51.34.212
- **Dominio:** iapriori.com
- **Usuario:** juanpprior
- **Sistema Operativo:** Ubuntu 22.04 LTS

## 🛠️ Stack Tecnológico Desplegado

- **Frontend:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS 3
- **Servidor Web:** NGINX
- **Proceso Manager:** PM2
- **SSL:** Let's Encrypt (Certbot)
- **Node.js:** v18.20.8

## 📁 Estructura del Proyecto

```
/home/juanpprior/apriori/
├── app/                    # Next.js App Router
├── components/             # Componentes React
├── content/               # Contenido MDX
├── public/                # Archivos estáticos
├── ecosystem.config.js    # Configuración PM2
├── next.config.js         # Configuración Next.js
├── tailwind.config.js     # Configuración Tailwind
└── package.json           # Dependencias
```

## 🔧 Configuración de Servicios

### PM2 (Process Manager)
```bash
# Estado de la aplicación
pm2 status

# Logs de la aplicación
pm2 logs iapriori

# Reiniciar aplicación
pm2 restart iapriori

# Configuración automática de inicio
pm2 startup
pm2 save
```

### NGINX
- **Configuración:** `/etc/nginx/sites-available/iapriori.com`
- **Habilitado:** `/etc/nginx/sites-enabled/iapriori.com`
- **Logs:** `/var/log/nginx/`

### SSL/HTTPS
- **Certificado:** Let's Encrypt
- **Válido hasta:** 2025-11-06
- **Renovación automática:** Configurada
- **Verificar:** `sudo certbot certificates`

## 🌐 URLs de Acceso

- **HTTPS Principal:** https://iapriori.com
- **HTTPS WWW:** https://www.iapriori.com
- **HTTP (redirige a HTTPS):** http://iapriori.com

## 🔒 Seguridad Implementada

### Headers de Seguridad
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://js.stripe.com; frame-src https://calendly.com`

### SSL/TLS
- **Protocolo:** TLS 1.3
- **Cifrado:** AES-256-GCM
- **Certificado:** Let's Encrypt
- **Renovación:** Automática

## 📊 Monitoreo y Mantenimiento

### Comandos Útiles

```bash
# Verificar estado de servicios
pm2 status
sudo systemctl status nginx

# Ver logs en tiempo real
pm2 logs iapriori --lines 50
sudo tail -f /var/log/nginx/error.log

# Verificar SSL
sudo certbot certificates

# Reiniciar servicios
pm2 restart iapriori
sudo systemctl restart nginx

# Verificar configuración NGINX
sudo nginx -t
```

### Actualización de la Aplicación

```bash
# 1. Hacer backup del .env.local
cp .env.local .env.local.backup

# 2. Detener la aplicación
pm2 stop iapriori

# 3. Actualizar código (git pull o copiar archivos)
git pull origin main

# 4. Instalar dependencias
npm install

# 5. Reconstruir la aplicación
npm run build

# 6. Restaurar variables de entorno
cp .env.local.backup .env.local

# 7. Reiniciar la aplicación
pm2 start iapriori
```

## 🚨 Troubleshooting

### Problemas Comunes

1. **Aplicación no responde**
   ```bash
   pm2 status
   pm2 logs iapriori
   ```

2. **NGINX no funciona**
   ```bash
   sudo systemctl status nginx
   sudo nginx -t
   ```

3. **SSL expirado**
   ```bash
   sudo certbot renew
   sudo systemctl reload nginx
   ```

4. **Puerto 3000 ocupado**
   ```bash
   sudo netstat -tlnp | grep :3000
   pm2 restart iapriori
   ```

## 📈 Performance

### Optimizaciones Implementadas

- **Gzip Compression:** Activada en NGINX
- **Caching:** Headers de cache para archivos estáticos
- **Image Optimization:** Next.js Image component
- **Font Optimization:** next/font/google con display=swap
- **Code Splitting:** Automático con Next.js

### Métricas Objetivo

- **Desktop LCP:** < 2.3s
- **Mobile LCP:** < 3s
- **CLS:** < 0.1
- **TBT:** < 200ms

## 🔄 Backup y Recuperación

### Archivos Críticos

```bash
# Configuración PM2
/home/juanpprior/.pm2/dump.pm2

# Variables de entorno
/home/juanpprior/apriori/.env.local

# Configuración NGINX
/etc/nginx/sites-available/iapriori.com

# Certificados SSL
/etc/letsencrypt/live/iapriori.com/
```

### Script de Backup

```bash
#!/bin/bash
# Crear backup completo
tar -czf backup-$(date +%Y%m%d).tar.gz \
  /home/juanpprior/apriori \
  /home/juanpprior/.pm2 \
  /etc/nginx/sites-available/iapriori.com \
  /etc/letsencrypt/live/iapriori.com/
```

## 📞 Contacto de Soporte

- **Desarrollador:** juanpprior
- **Repositorio:** https://github.com/juanpprior/iaprioriwebpage.git
- **Dominio:** iapriori.com

---

**Última actualización:** 8 de Agosto, 2025
**Versión del despliegue:** 1.0.0
