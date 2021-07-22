const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();
 
export const AddressBookMock = dbMock.define('address_book',  {
    id: 1,
    email: 'xyz@abc.com',
    firstName: 'Carlos',
    lastName: 'Santiago',
    createdAt: "2021-01-01 13:30:31",
    updatedAt: "2021-01-01 13:30:31",
    phone: '9984948994',
    addressNumber: 32,
    addressStreet: "Rua teste",
    zipCode: "01532-001"
  });
 