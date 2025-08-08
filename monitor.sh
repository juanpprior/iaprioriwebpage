#!/bin/bash

# PRIORIA - Monitoring Script
# Script para monitorear el estado de los servicios

echo "📊 Estado de los servicios PRIORIA"
echo "=================================="

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check PM2 status
echo -e "\n${GREEN}🔍 Estado de la aplicación (PM2):${NC}"
pm2 status

# Check NGINX status
echo -e "\n${GREEN}🌐 Estado de NGINX:${NC}"
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✅ NGINX está ejecutándose${NC}"
else
    echo -e "${RED}❌ NGINX no está ejecutándose${NC}"
fi

# Check SSL certificate
echo -e "\n${GREEN}🔒 Estado del certificado SSL:${NC}"
if [ -f /etc/letsencrypt/live/iapriori.com/fullchain.pem ]; then
    echo -e "${GREEN}✅ Certificado SSL encontrado${NC}"
    echo "Fecha de expiración:"
    openssl x509 -in /etc/letsencrypt/live/iapriori.com/fullchain.pem -noout -dates
else
    echo -e "${YELLOW}⚠️  Certificado SSL no encontrado${NC}"
fi

# Check disk space
echo -e "\n${GREEN}💾 Espacio en disco:${NC}"
df -h /var/www/iapriori.com

# Check memory usage
echo -e "\n${GREEN}🧠 Uso de memoria:${NC}"
free -h

# Check recent logs
echo -e "\n${GREEN}📝 Últimos logs de la aplicación:${NC}"
pm2 logs iapriori --lines 10 --nostream

# Check NGINX error logs
echo -e "\n${GREEN}🚨 Últimos errores de NGINX:${NC}"
if [ -f /var/log/nginx/error.log ]; then
    tail -5 /var/log/nginx/error.log
else
    echo "No se encontró el archivo de logs de NGINX"
fi

# Check if application is responding
echo -e "\n${GREEN}🌍 Verificación de respuesta HTTP:${NC}"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo -e "${GREEN}✅ Aplicación responde correctamente en puerto 3000${NC}"
else
    echo -e "${RED}❌ Aplicación no responde en puerto 3000${NC}"
fi

# Check domain resolution
echo -e "\n${GREEN}🌐 Verificación de dominio:${NC}"
if nslookup iapriori.com > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Dominio iapriori.com resuelve correctamente${NC}"
else
    echo -e "${RED}❌ Problema con resolución del dominio${NC}"
fi

echo -e "\n${GREEN}✅ Monitoreo completado${NC}"
