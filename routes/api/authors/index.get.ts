import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const authors = prisma.author.findMany({});
  return authors;
});
