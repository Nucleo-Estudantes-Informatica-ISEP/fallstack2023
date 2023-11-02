# Fallstack 2023

This is the Fallstack 2023 edition website.

## Getting Started

1. Clone the repository
2. Install dependencies with `pnpm i`
3. Set up the environment variables `cp .env.example .env`
4. Run `pnpm migrate` to apply the migrations.
5. Generate the Prisma Client with `pnpm generate`

## Running locally

Run `pnpm dev` to start the development server.

> 💡 By using `docker compose up -d` you will be starting a MySQL server in a Docker container. This is the recommended way to run the database locally.

## Migrations

To apply your Prisma schema changes, create a migration with `pnpm migrate`.
