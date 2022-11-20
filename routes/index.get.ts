import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  return "<h1>Hello World</h1>";
});
