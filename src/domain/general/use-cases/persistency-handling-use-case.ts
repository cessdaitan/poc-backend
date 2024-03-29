import { Model } from "sequelize";
import { GeneralInputsRepository } from "../../../data/repository/general-repository/general-inputs-repository";

export class PersistencyHandlingUseCase<
  ModelType extends Model<ModelType>,
  InputsType extends object,
> {
  constructor(
    private readonly inputsRepository: GeneralInputsRepository<ModelType, InputsType>
  ) {}

  public async save(inputs: InputsType): Promise<object> {
    const result = await this.inputsRepository.saveInputs(inputs);
    return result;
  }

  public async getById(id: string): Promise<object> {
    const result = await this.inputsRepository.getById(id);
    return result;
  }
  public async deleteById(id: string): Promise<number> {
    const result = await this.inputsRepository.deleteById(id);
    return result;
  }

  public async updateById(id: string, newData: InputsType): Promise<object> {
    const result = await this.inputsRepository.updateById(id, newData);
    return result;
  }

}
