import { PrismaClient } from "@prisma/client";

const ispyb = new PrismaClient();

async function closeDBConnection() {
  await ispyb.$disconnect();
}

process.on("exit", closeDBConnection);
