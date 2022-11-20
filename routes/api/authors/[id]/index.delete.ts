import { prisma } from "../../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const author = await prisma.author
    .delete({
      where: {
        id,
      },
    })
    .catch(() => {
      sendError(
        event,
        createError({ statusCode: 400, statusMessage: "author not found" })
      );
    });

  return author;
});
