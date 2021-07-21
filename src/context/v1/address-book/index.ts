import { Router } from "express";
import { AddressBookController } from "./controller";
import { IHttpRequest } from "../protocols";

const router = Router();
const controller = new AddressBookController();

router.post("/", [], async (req, res, next) => {
  const response = await controller.createAddressBook(req as IHttpRequest);
  return next(response);
});

router.get("/:id", [], async (req, res, next) => {
  const response = await controller.getAddressBook(req as IHttpRequest);
  return next(response);
});

// router.delete("/address-book/:id", [], async (req, res, next) => {
//   const response = await controller.getCalculationByUuid(req as IHttpRequest);
//   return next(response);
// });

// router.put("/address-book/:id", [], async (req, res, next) => {
//   return next(await controller.saveCalculation(req as IHttpRequest));
// });

export default router;
