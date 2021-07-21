import { AddressBookModel } from "../../../infra/database/models";
import { IAddressBookInputs } from "../../../domain/address-book/types";
import { GeneralInputsRepository } from "../general-repository/general-inputs-repository";

export class AddressBookRepository extends GeneralInputsRepository<
AddressBookModel,
IAddressBookInputs
> {
  constructor() {
    super(AddressBookModel);
  }
}
