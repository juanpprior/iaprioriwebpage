# 🚀 Guía de Despliegue - PRIORIA

## 📋 Información del Servidor

- **IP Pública:** 34.51.34.212
- **Dominio:** iapriori.com
- **Sistema:** Ubuntu/Debian
- **Framework:** Next.js 14

## 🛠️ Scripts de Despliegue

### 1. Despliegue Inicial (`deploy-nginx.sh`)

Este script configura todo el entorno de producción:

```bash
# Copiar el proyecto al servidor
scp -r . root@34.51.34.212:/tmp/iapriori

# Conectar al servidor
ssh root@34.51.34.212

# Navegar al directorio temporal y ejecutar el script
cd /tmp/iapriori
sudo ./deploy-nginx.sh
```

**¿Qué hace este script?**
- ✅ Instala NGINX, Node.js 18.x
- ✅ Configura PM2 para gestión de procesos
- ✅ Crea configuración NGINX optimizada para Next.js
- ✅ Instala Certbot para SSL automático
- ✅ Configura renovación automática de certificados
- ✅ Aplica headers de seguridad (CSP, HSTS, etc.)

### 2. Actualización de Aplicación (`update-app.sh`)

Para actualizar la aplicación en producción:

```bash
sudo ./update-app.sh
```

**¿Qué hace este script?**
- ✅ Hace backup de la configuración actual
- ✅ Actualiza el código (Git pull)
- ✅ Instala nuevas dependencias
- ✅ Reconstruye la aplicación
- ✅ Reinicia los servicios

### 3. Monitoreo (`monitor.sh`)

Para verificar el estado de todos los servicios:

```bash
sudo ./monitor.sh
```

**¿Qué verifica?**
- ✅ Estado de PM2 (aplicación)
- ✅ Estado de NGINX
- ✅ Certificado SSL
- ✅ Espacio en disco y memoria
- ✅ Logs recientes
- ✅ Respuesta HTTP
- ✅ Resolución de dominio

## 🔧 Configuración Manual

### Variables de Entorno

Después del despliegue, edita el archivo de configuración:

```bash
nano /var/www/iapriori.com/.env.local
```

**Variables requeridas:**
```env
# Site Configuration
SITE_URL=https://iapriori.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service
RESEND_API_KEY=your_resend_api_key_here
NEWSLETTER_LIST_ID=prioria_newsletter

# Security
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# External Services
CALENDLY_URL=https://calendly.com/ia-priori/audit
```

### Configuración de DNS

Asegúrate de que el dominio apunte al servidor:

```
A    iapriori.com    34.51.34.212
A    www.iapriori.com 34.51.34.212
```

## 📊 Comandos Útiles

### Gestión de la Aplicación
```bash
# Ver estado de PM2
pm2 status

# Ver logs en tiempo real
pm2 logs iapriori --lines 100

# Reiniciar aplicación
pm2 restart iapriori

# Detener aplicación
pm2 stop iapriori

# Iniciar aplicación
pm2 start iapriori
```

### Gestión de NGINX
```bash
# Verificar configuración
nginx -t

# Recargar configuración
systemctl reload nginx

# Reiniciar NGINX
systemctl restart nginx

# Ver logs de error
tail -f /var/log/nginx/error.log

# Ver logs de acceso
tail -f /var/log/nginx/access.log
```

### Gestión de SSL
```bash
# Ver certificados
certbot certificates

# Renovar manualmente
certbot renew

# Verificar renovación automática
crontab -l
```

## 🔍 Troubleshooting

### La aplicación no responde
```bash
# Verificar si PM2 está ejecutándose
pm2 status

# Ver logs de error
pm2 logs iapriori --lines 50

# Verificar puerto
netstat -tlnp | grep :3000
```

### NGINX no funciona
```bash
# Verificar configuración
nginx -t

# Ver estado del servicio
systemctl status nginx

# Ver logs de error
tail -20 /var/log/nginx/error.log
```

### Problemas con SSL
```bash
# Verificar certificado
openssl x509 -in /etc/letsencrypt/live/iapriori.com/fullchain.pem -text -noout

# Forzar renovación
certbot renew --force-renewal
```

## 📈 Monitoreo y Mantenimiento

### Logs Importantes
- **Aplicación:** `pm2 logs iapriori`
- **NGINX Error:** `/var/log/nginx/error.log`
- **NGINX Access:** `/var/log/nginx/access.log`
- **Sistema:** `journalctl -u nginx`

### Backup Automático
El script configura backups automáticos de:
- Configuración de entorno
- Certificados SSL
- Configuración NGINX

### Renovación Automática
- **SSL:** Renovación automática cada 90 días
- **Logs:** Rotación automática por NGINX
- **PM2:** Reinicio automático en caso de fallo

## 🚨 Alertas y Notificaciones

### Monitoreo Recomendado
1. **Uptime:** Verificar que el sitio esté disponible
2. **SSL:** Verificar que el certificado no expire
3. **Espacio:** Monitorear uso de disco
4. **Memoria:** Verificar uso de RAM
5. **Logs:** Revisar errores periódicamente

### Comandos de Verificación Rápida
```bash
# Verificar todo de una vez
sudo ./monitor.sh

# Verificar solo la aplicación
curl -I http://localhost:3000

# Verificar SSL
curl -I https://iapriori.com
```

## 📞 Soporte

En caso de problemas:
1. Ejecutar `./monitor.sh` para diagnóstico
2. Revisar logs específicos
3. Verificar configuración de DNS
4. Contactar al equipo de desarrollo

---

**PRIORIA** - No es el grande el que se come al chico, es el rápido el que se come al lento.
