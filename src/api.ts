import Routes from "./routes";
import Express from "express";
import * as BodyParser from "body-parser";
import { internalServerError, unprocessableEntity } from "./context/v1/helpers";

export default class API {
  public readonly app: Express.Application;

  constructor() {
    this.app = Express();
    this.setApi();
  }

  private setApi(): void {
    this.app.use(BodyParser.json());
    // this.app.use(authorizeApiKey);
    this.app.use("/api", Routes);
    this.app.use(this.responseHandler);
  }
  private responseHandler(serverResponse, req, res, next): void {
    console.log(serverResponse);

    if (serverResponse.isJoi) {
      return res.status(unprocessableEntity().statusCode).send({
        errors: serverResponse.details.map(obj => {
          return {
            message: obj.message
          };
        })
      });
    }

    if (serverResponse.statusCode) {
      return res.status(serverResponse.statusCode).send(serverResponse.body);
    }
    return res.sendStatus(internalServerError().statusCode);
  }
}
