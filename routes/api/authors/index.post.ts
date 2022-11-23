import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const payload = await readBody(event);
    const { name, email } = payload;
    if (!name) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "name param not found" })
      );
    }
    if (!email) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "email param not found" })
      );
    }

    const query = await prisma.author.findFirst({ where: { email: email } });
    if (query) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "author with this email already exists",
        })
      );
    }

    const newAuthor = await prisma.author.create({ data: payload });
    event.node.res.statusCode = 201;
    return newAuthor;
  } catch {
    return sendError(event, createError({ statusCode: 500 }));
  }
});
