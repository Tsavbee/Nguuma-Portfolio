# Nguuma-Portfolio

Personal engineering portfolio showcasing my work in backend development, cybersecurity, AI integration, and IoT.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Add the requested profile, project, and CV binary assets under `public/`. The folders are retained with `.gitkeep` files until those assets are available.

## Database

The Prisma schema stores contact messages in SQLite. Set `DATABASE_URL` in `.env.local`, then run:

```bash
npx prisma generate
npx prisma db push
```
