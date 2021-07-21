import { AddressBookInputs, IAddressBookInputs } from "../../../domain/address-book/types";
import {
  AddressBookCrudUseCases,
} from "../../../domain/address-book/use-cases";
import { internalServerError, noContent, ok } from "../helpers";
import { IHttpRequest, IHttpResponse } from "../protocols";

export class AddressBookController {
  constructor(
    private readonly addressBookCrudUseCases = new AddressBookCrudUseCases()
  ) {}

  public async createAddressBook(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const inputs = new AddressBookInputs(req.body as IAddressBookInputs);
      const result = await this.addressBookCrudUseCases.save(inputs);
      return ok(result);
    } catch (error) {
      console.error("Error on createAddressBook:", error);
      return internalServerError();
    }
  }

  public async getAddressBook(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const result = await this.addressBookCrudUseCases.getById(req.params.id);
      if (!result) {
        return noContent();
      }
      return ok(result);
    } catch (error) {
      console.error("Error on getAddressBook:", error);
      return internalServerError();
    }
  }

  public async updateAddressBook(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const result = await this.addressBookCrudUseCases.updateById(req.params.id, req.body as IAddressBookInputs);
      return ok(result);
    } catch (error) {
      console.error("Error on updateAddressBook:", error);
      return internalServerError();
    }
  }

  public async deleteAddressBook(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const result = await this.addressBookCrudUseCases.deleteById(req.params.id);
      if(!result) {
        throw new Error("Failed to delete item.");
      }
      return ok();
    } catch (error) {
      console.error("Error on deleteAddressBook:", error);
      return internalServerError();
    }
  }
}
