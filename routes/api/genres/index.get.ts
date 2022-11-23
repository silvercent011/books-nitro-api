import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const genres = await prisma.genre.findMany({
    include: {
      books: true,
    },
  });
  return genres;
});
