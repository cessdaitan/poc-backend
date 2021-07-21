import { Sequelize } from "sequelize-typescript";
import {
  AddressBookModel,
} from "./models";

import config from "../../config";

export async function createDBConnection(): Promise<Sequelize> {
  console.log("Connecting into the database");
  const sequelize = new Sequelize({
    ...config.database
  });

  sequelize.addModels([
    AddressBookModel
  ]);

  return sequelize;
}
