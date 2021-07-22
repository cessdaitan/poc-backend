import { IAddressBookInputs } from "../../../../src/domain/address-book/types";
import { AddressBookCrudUseCases } from "../../../../src/domain/address-book/use-cases"
import { MockAddressBookRepository } from "../../../mocks/repository/address-book";


describe("Test CRUD use cases with Mocking Data", () => {  
  it("Should get value from mock", async () => {
    const addressBookCrudUseCases = new AddressBookCrudUseCases(new MockAddressBookRepository())
    const addressBook = await addressBookCrudUseCases.getById("1") as IAddressBookInputs;
    expect(typeof addressBook.email).toBe('string')
    expect(addressBook.firstName).toEqual('Carlos')
    expect(addressBook.addressNumber).toEqual(32)
  })
})