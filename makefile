.PHONY: frontend-dev
f-dev:
	cd frontend && bun run dev

.PHONY: backend-dev
b-dev:
	cd backend &&  uv run manage.py runserver

dev: frontend-dev backend-dev