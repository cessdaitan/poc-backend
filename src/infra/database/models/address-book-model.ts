import { Table, Column, Model } from "sequelize-typescript";

@Table({ tableName: "address_book", timestamps: true })
export class AddressBookModel extends Model<AddressBookModel> {

  @Column({ primaryKey: true, autoIncrement: true })
  public id: number;

  @Column({ field: "first_name", allowNull: false })
  public firstName: string;

  @Column({field: "last_name", allowNull: false })
  public lastName: string;

  @Column({field: "phone", allowNull: false })
  public phone: string;

  @Column({field: "address_number"})
  public addressNumber: number;

  @Column({field: "address_street"})
  public addressStreet: string;

  @Column({field: "zip_code"})
  public zipCode: string;

  @Column({field: "email"})
  public email: string;

  @Column({field: "birth_date"})
  public birthDate: Date;

}
