import { IAddressBookInputs } from "./i-address-book-inputs";

export class AddressBookInputs implements IAddressBookInputs{
  public firstName: string;
  public lastName: string;
  public phone: string;
  public addressStreet: string;
  public addressNumber: number;
  public zipCode: string;
  public email: string;
  public birthDate: Date;

  constructor(inputs: IAddressBookInputs) {
    this.firstName = inputs.firstName;
    this.lastName = inputs.lastName;
    this.phone = inputs.phone;
    this.addressNumber = inputs.addressNumber;
    this.addressStreet = inputs.addressStreet;
    this.zipCode = inputs.zipCode;
    this.birthDate = inputs.birthDate;
    this.email = inputs.email;
  }
}
