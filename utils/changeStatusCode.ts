import { H3Event } from "h3";
function changeStatusCode(event: H3Event, statusCode: number) {
  event.node.res.statusCode = statusCode;
}

export { changeStatusCode };
