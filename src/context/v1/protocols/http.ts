import { Request } from "express";

export interface IHttpResponse {
  statusCode: number;
  body?: object | string;
}

interface IAnyObject {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface IHttpRequest {
  body?: IAnyObject;
  headers: object;
  query?: { [key: string]: string };
  params?: { [key: string]: string };
}

export interface IContextedRequest extends Request {
  context?: object;
  userEmail?: string;
  enableTracking?: boolean;
}
