# mountain-breeze-backend

GraphQL backend for the Mountain Breeze (Sama Group) website.

> **Archived, read-only.** Kept for reference; not maintained. Part of the legacy collection in [enterprise-archive](https://github.com/mayas-faraj/enterprise-archive).

## Stack

Node.js, GraphQL, Prisma, PostgreSQL/MySQL (see `prisma/schema.prisma`).

## Prerequisites

Node.js 16+, a database reachable via `DATABASE_URL`; create your own `.env` (the original was removed).

## Running

This is an archive; there is no staging/production deployment. For local inspection:

```
npm install
npx prisma migrate dev
npm start
```

## History notes

Rewritten before publication: `node_modules`, build output, database dumps, `.env`/`config.php` credential files and oversized binaries were removed from every commit. The default branch is `dev/mayas`; the last commit snapshots work that was never committed.
