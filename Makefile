.PHONY: help install dev build start lint clean deploy

# Default target
help:
	@echo "PRIORIA - Consultoría Estratégica"
	@echo "=================================="
	@echo ""
	@echo "Comandos disponibles:"
	@echo "  install    - Instalar dependencias"
	@echo "  dev        - Ejecutar en modo desarrollo"
	@echo "  build      - Construir para producción"
	@echo "  start      - Iniciar servidor de producción"
	@echo "  lint       - Ejecutar ESLint"
	@echo "  clean      - Limpiar archivos generados"
	@echo "  deploy     - Desplegar a Vercel"
	@echo "  sitemap    - Generar sitemap"
	@echo ""

# Instalar dependencias
install:
	@echo "Instalando dependencias..."
	npm install

# Ejecutar en modo desarrollo
dev:
	@echo "Iniciando servidor de desarrollo..."
	npm run dev

# Construir para producción
build:
	@echo "Construyendo para producción..."
	npm run build

# Iniciar servidor de producción
start:
	@echo "Iniciando servidor de producción..."
	npm run start

# Ejecutar ESLint
lint:
	@echo "Ejecutando ESLint..."
	npm run lint

# Limpiar archivos generados
clean:
	@echo "Limpiando archivos generados..."
	rm -rf .next
	rm -rf out
	rm -rf node_modules/.cache

# Desplegar a Vercel
deploy:
	@echo "Desplegando a Vercel..."
	vercel --prod

# Generar sitemap
sitemap:
	@echo "Generando sitemap..."
	npm run postbuild

# Setup inicial del proyecto
setup: install
	@echo "Configurando proyecto..."
	@if [ ! -f .env.local ]; then \
		echo "Copiando archivo de variables de entorno..."; \
		cp .env.example .env.local; \
		echo "Por favor, edita .env.local con tus valores"; \
	else \
		echo ".env.local ya existe"; \
	fi

# Verificar configuración
check:
	@echo "Verificando configuración..."
	@if [ ! -f .env.local ]; then \
		echo "❌ .env.local no encontrado. Ejecuta 'make setup'"; \
		exit 1; \
	else \
		echo "✅ .env.local encontrado"; \
	fi
	@echo "✅ Configuración verificada"

# Instalar dependencias de desarrollo
dev-deps:
	@echo "Instalando dependencias de desarrollo..."
	npm install --save-dev

# Actualizar dependencias
update:
	@echo "Actualizando dependencias..."
	npm update

# Verificar vulnerabilidades
audit:
	@echo "Verificando vulnerabilidades..."
	npm audit

# Ejecutar tests (cuando se agreguen)
test:
	@echo "Ejecutando tests..."
	@echo "Tests no configurados aún"

# Formatear código
format:
	@echo "Formateando código..."
	npx prettier --write "**/*.{js,jsx,ts,tsx,json,md}"

# Verificar tipos TypeScript
type-check:
	@echo "Verificando tipos TypeScript..."
	npx tsc --noEmit
