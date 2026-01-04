// scripts/seed-db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Create a Dummy Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {}, // If exists, do nothing
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'supersecurepassword123',
      role: 'ADMIN',
    },
  });

  console.log(`✅ User created: ${admin.email}`);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });