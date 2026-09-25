# Nguuma-Portfolio

Personal engineering portfolio showcasing my work in backend development, cybersecurity, AI integration, and IoT.

## Overview

This portfolio is built with Next.js App Router, TypeScript, Tailwind CSS, and Prisma. It includes:

- A responsive hero and navigation experience
- About, projects, skills, and contact sections
- Individual project detail routes
- A contact API route with input validation
- SQLite persistence for contact messages through Prisma

## Project structure

```text
src/app/          App Router pages, layout, and API routes
src/components/   Reusable layout, section, project, and UI components
src/data/         Portfolio content and navigation data
src/types/        TypeScript domain types
src/lib/          Shared utilities, validation, and email handling
prisma/           Prisma database schema
public/           Images, backgrounds, icons, and documents
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Start the production server
npm run lint      # Run ESLint
```

## Assets

Static assets live under `public/`, including project images, profile imagery, background artwork, icons, and the CV document. The Hero profile image is referenced from:

```text
/images/profile/Main Photo.png
```

Project cover images are stored under:

```text
/images/projects/
```

The portfolio background artwork is referenced from:

```text
/images/backgrounds/Globe background white.png
```

## Database

The Prisma schema stores contact messages in SQLite. Set `DATABASE_URL` in `.env.local`, then generate the Prisma client and create the local database:

```bash
npx prisma generate
npx prisma db push
```

The example environment file is available at `.env.example`.
