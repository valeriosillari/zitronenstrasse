
.PHONY: help install dev build preview clean check fix deploy-build

# Default command
.DEFAULT_GOAL := help

help:
	@echo "Available commands:"
	@echo "  make install       - Install dependencies"
	@echo "  make dev           - Start development server"
	@echo "  make build         - Build Nuxt application"
	@echo "  make check         - Run all code checks"
	@echo "  make fix           - Fix lint and formatting issues"

install:
	bun install

dev:
	bun run dev

build:
	bun run build

check:
	bun run check-all

fix:
	bun run fix-all
