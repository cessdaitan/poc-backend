import { AddressBookRepository } from "../../../data/repository";
import { AddressBookModel } from "../../../infra/database/models";
import { PersistencyHandlingUseCase } from "../../general/use-cases/persistency-handling-use-case";
import { AddressBookInputs } from "../types";

export class AddressBookCrudUseCases extends PersistencyHandlingUseCase<AddressBookModel, AddressBookInputs> {
  constructor(
    private repository: AddressBookRepository = new AddressBookRepository()
  ) {
    super(repository);
  }
}
