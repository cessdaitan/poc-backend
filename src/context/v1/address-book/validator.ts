
import { Request, Response, NextFunction } from "express";
import { validateAsClass } from "joiful";
import {
  AddressBookInputs,
} from "../../../domain/address-book/types";


export function addressBookGeneralInputValidator(req: Request, res: Response, next: NextFunction) {
  const { error } = validateAsClass(req.body, AddressBookInputs);
  if (error) {
    console.error(`AddressBookInputs validation error: ${error}`);
    return next(error);
  }
  return next();
}

