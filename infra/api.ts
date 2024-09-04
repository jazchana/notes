import { bucket } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api");

api.route("GET /", {
  url: true,
  link: [bucket],
  handler: "packages/functions/src/api.handler"
});
