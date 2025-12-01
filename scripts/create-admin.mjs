import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

async function main() {
  const email = process.env.ADMIN_EMAIL;
  if (!email) {
    throw new Error("ADMIN_EMAIL is missing. Use: ADMIN_EMAIL=you@domain.com node scripts/create-admin.mjs");
  }

  // Connect to Neon using Pool
  const connectionString = process.env.POSTGRES_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  // Prisma with adapter (REQUIRED)
  const prisma = new PrismaClient({ adapter });

  console.log("Connected to DB…");

  const password = "admin123";
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: "Super Admin",
      email,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin created:");
  console.log(admin);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
