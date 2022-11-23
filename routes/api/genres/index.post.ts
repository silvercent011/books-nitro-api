import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const payload = await readBody(event);
    const { title } = payload;

    if (!title) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "title param not found" })
      );
    }

    const query = await prisma.genre.findFirst({
      where: { title: title.toString().toUpperCase() },
    });

    if (query) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "genre with this title already exists",
        })
      );
    }

    const newGenre = await prisma.genre.create({
      data: { title: title.toString().toUpperCase() },
    });

    return newGenre;
  } catch (error) {
    return sendError(event, createError({ statusCode: 500 }));
  }
});
