import { IHttpResponse } from "../protocols/http";

export const badRequest = (error: Error): IHttpResponse => {
  return {
    statusCode: 400,
    body: error.message
  };
};

export const internalServerError = (): IHttpResponse => {
  return {
    statusCode: 500,
    body: "Internal server error."
  };
};

export const ok = (body = {}): IHttpResponse => {
  return {
    statusCode: 200,
    body
  };
};

export const unauthorized = (body = "Unauthorized"): IHttpResponse => {
  return {
    statusCode: 401,
    body
  };
};

export const forbidden = (body = "Forbidden"): IHttpResponse => {
  return {
    statusCode: 403,
    body
  };
};

export const noContent = (): IHttpResponse => {
  return {
    statusCode: 204
  };
};

export const unprocessableEntity = (body = {}): IHttpResponse => {
  return {
    statusCode: 422,
    body
  };
};
