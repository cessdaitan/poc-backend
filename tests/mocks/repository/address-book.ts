import { GeneralInputsRepository } from "../../../src/data/repository/general-repository/general-inputs-repository";
import { IAddressBookInputs } from "../../../src/domain/address-book/types";
import { AddressBookMock } from "../models/address-book-model";

export class MockAddressBookRepository extends GeneralInputsRepository<
typeof AddressBookMock,
IAddressBookInputs
> {
  constructor() {
    super(AddressBookMock);
  }
}

  