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

  public async deleteById(id: string): Promise<number> {
    const result = this.modelType.destroy({
      where: { id }
    });
    return result;
  }

  public async updateById(id: string, newData: InputsType): Promise<ModelType> {
    const inputsModel = this.modelType.update(
      newData,
      { where: { id }, returning: true }
    );
    return inputsModel;
  }

}
