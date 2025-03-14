import { IGetUserRepository } from "../../../infra/database/orm/mongoose/repositories/users/get-user.repository";

export class GetUserUseCase {
  constructor(private readonly _getUserRepository: IGetUserRepository) {}

  async execute(id: string, tenantId: string) {
    return await this._getUserRepository.execute(id, tenantId);
  }
}