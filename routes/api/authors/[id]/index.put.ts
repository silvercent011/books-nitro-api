import { prisma } from "../../../../utils/prisma";

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  const { id } = payload;

  const update = await prisma.author.update({ where: { id }, data: payload });

  return update;
});
