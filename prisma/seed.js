import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: "Introduction to AI",
        category: "Foundations",
        description: "Learn basic AI concepts.",
        thumbnail: "https://via.placeholder.com/300x200"
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
