import { IAddressBookInputs } from "../../../../src/domain/address-book/types";
import { AddressBookCrudUseCases } from "../../../../src/domain/address-book/use-cases"
import { MockAddressBookRepository } from "../../../mocks/repository/address-book";

let addressBookCrudUseCases: AddressBookCrudUseCases;
beforeEach(() => {
  addressBookCrudUseCases = new AddressBookCrudUseCases(new MockAddressBookRepository())
});

describe("Test CRUD use cases with Mocking Data", () => {  
  it("get address book use case", async () => {
    const addressBook = await addressBookCrudUseCases.getById("1") as IAddressBookInputs;
    expect(typeof addressBook.email).toBe('string')
    expect(addressBook.firstName).toEqual('Carlos')
    expect(addressBook.addressNumber).toEqual(32)
  })

  it("update address book use case", async () => {
    const result = await addressBookCrudUseCases.updateById("1", {firstName: "Carlos 2"} as IAddressBookInputs);
    const addressBook = result[1][0] as IAddressBookInputs;
    expect(typeof addressBook.firstName).toBe('string')
    expect(addressBook.firstName).toEqual('Carlos 2')
  })

  it("insert address book use case", async () => {
    const addressBook = await addressBookCrudUseCases.save({
      firstName: "Carlos 1",
      lastName: "blabla",
      phone: "1111111111",
      addressNumber: 90,
      addressStreet: "Rua Oh"
    } as IAddressBookInputs) as IAddressBookInputs;
    expect(addressBook.firstName).toEqual('Carlos 1')
    expect(addressBook.lastName).toEqual('blabla')
    expect(addressBook.phone).toEqual('1111111111')
    expect(addressBook.addressNumber).toEqual(90)
  })

  it("delete address book use case", async () => {
    const result = await addressBookCrudUseCases.deleteById("1");
    expect(result).toEqual(1)
  })
})