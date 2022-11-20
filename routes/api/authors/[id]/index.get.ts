import { prisma } from "../../../../utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { id } = getRouterParams(event);

    const author = await prisma.author.findUnique({
      where: {
        id,
      },
    });
    if (!author) {
        return sendError(
            event,
            createError({ statusCode: 400, statusMessage: "author not found" })
          );
    }

    return author;
  } catch (error) {
    return sendError(event, createError({ statusCode: 500 }));
  }
});
