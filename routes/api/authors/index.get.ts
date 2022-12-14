import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const authors = await prisma.author.findMany();

  return authors;
});
