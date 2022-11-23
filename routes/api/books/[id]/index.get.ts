import { prisma } from "../../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const book = await prisma.book.findFirst({
    where: { id },
    include: { author: true, genre: true },
  });

  return book;
});
