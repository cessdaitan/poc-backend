import { IHttpResponse, IHttpRequest } from "./http";

export default interface IController {
  handle(httpRequest?: IHttpRequest): Promise<IHttpResponse>;
}
