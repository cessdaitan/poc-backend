import { Model } from "sequelize";

export class GeneralInputsRepository<
  ModelType extends Model<ModelType>,
  InputsType extends object
> {
  // eslint-disable-next-line
  constructor(private modelType: any) {}

  public async saveInputs(inputs: InputsType): Promise<object> {
    const inputsSaved = await this.modelType.create(inputs);
    return inputsSaved;
  }

  public async getById(id: string): Promise<ModelType> {
    const inputsModel = this.modelType.findOne({
      where: { id }
    });
    return inputsModel;
  }

  // public async updateUserInputsById(userRequestInputs: InputsType, oldInputId: number): Promise<string> {
  //   const inputsTransformedToSave = this.transformModel(userRequestInputs);
  //   const [, [inputsUpdated]] = await this.modelType.update(
  //     inputsTransformedToSave,
  //     { where: { id: oldInputId }, returning: true }
  //   );
  //   return inputsUpdated.uuid;
  // }

  // /**
  //  * This function destroys records older than date
  //  * and shareable equals to true
  //  *
  //  * @param date date to delete lather then
  //  * @returns The ammount of rows deleted
  //  */
  // public async cleanUp(date: string): Promise<number> {
  //   return this.modelType.destroy({
  //     where: {
  //       shareable: true,
  //       createdAt: {
  //         [Op.lt]: date
  //       }
  //     }
  //   });
  // }
}
