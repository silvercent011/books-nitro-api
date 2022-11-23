import { changeStatusCode } from "../../../utils/changeStatusCode";
import { prisma } from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);

  const newBook = await prisma.book.create({ data: payload });
  changeStatusCode(event, 201);
  return newBook;
});
