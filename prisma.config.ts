import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    provider: "postgresql",
    url: process.env.POSTGRES_URL,
  },

  client: {
    adapter: "postgresql",
  },
});
