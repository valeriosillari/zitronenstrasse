
.PHONY: help install dev build preview clean check fix deploy-build

# Default command
.DEFAULT_GOAL := help

help:
	@echo "Available commands:"
	@echo "  make install       - Install dependencies"
	@echo "  make dev           - Start development server"
	@echo "  make check         - Run all code checks"
	@echo "  make fix           - Fix lint and formatting issues"
	@echo "  make build         - Build Nuxt application"
	@echo "  make deploy  		- Run all checks and build the application"

install:
	bun install

dev:
	bun dev

check:
	bun check-all

fix:
	bun fix-all

build:
	bun run build	

deploy:
	bun run deploy-build