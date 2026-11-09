# mountain-breeze

Website for Mountain Breeze (Sama Group): Next.js frontend and GraphQL backend in one repository.

> **Archived, read-only.** Kept for reference; not maintained. Part of the legacy collection in [enterprise-archive](https://github.com/mayas-faraj/enterprise-archive).

| Directory | Contents |
|---|---|
| `frontend/` | Next.js / React / SCSS site (see `frontend/README.md`) |
| `backend/` | Node.js GraphQL API with Prisma (see `backend/README.md`) |

## Prerequisites

Node.js 16+ and a database reachable through `DATABASE_URL` for the backend.

## Running

No staging/production deployment exists for this archive. Locally: start `backend/` first (`npm install && npm start`), then `frontend/` (`npm install && npm run dev`). Create your own `backend/.env`; the original was removed.

## History notes

This repo merges the former `mountain-breeze-frontend` and `mountain-breeze-backend` repositories, with all commits kept. Credential files, `node_modules`, build output and oversized binaries were removed from every commit. Default branch `dev/mayas` holds the latest work; the last commit snapshots changes that were never committed.
