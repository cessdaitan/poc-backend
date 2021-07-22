import { Router } from "express";
import { AddressBookController } from "./controller";
import { IHttpRequest } from "../protocols";
import { addressBookGeneralInputValidator } from "./validator";

const router = Router();
const controller = new AddressBookController();

router.post("/", addressBookGeneralInputValidator, async (req, res, next) => {
  const response = await controller.createAddressBook(req as IHttpRequest);
  return next(response);
});

router.get("/:id", [], async (req, res, next) => {
  const response = await controller.getAddressBook(req as IHttpRequest);
  return next(response);
});

router.delete("/:id", [], async (req, res, next) => {
  const response = await controller.deleteAddressBook(req as IHttpRequest);
  return next(response);
});

router.put("/:id", [], async (req, res, next) => {
  return next(await controller.updateAddressBook(req as IHttpRequest));
});

export default router;
