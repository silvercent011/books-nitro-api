import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const books = await prisma.book.findMany();
  return books;
});
