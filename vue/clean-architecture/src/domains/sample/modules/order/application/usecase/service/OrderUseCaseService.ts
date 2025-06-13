import type {Order} from "../../../domain/entity/Order.ts";
import type {OrderUseCase} from "../OrderUseCase.ts";
import type {UserQuery} from "../../../../user-refactoring/application/usecase/user/UserQuery.ts";
import {orderApi} from "../../../infrastructure/api/orderApi.ts";
import {Service} from "../../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../../common/core/registry/ServiceRegistry.ts";
import type {User} from "../../../../user-refactoring/domain/entity/User.ts";

@Service
export class OrderUseCaseService implements OrderUseCase {
  constructor(private userQueryService: UserQuery) {
    this.userQueryService = ServiceRegistry.get<UserQuery>("UserQueryService"); // DI
  }

  async fetchAllOrder(): Promise<Order[]> {
    return await orderApi.fetchAll().then(orders => orders);
  }

  async joinUserOrder(userId: number): Promise<User | any> {
    return await this.userQueryService.getUserList()
      .then((userList) => userList.find(user => user.id === userId) ?? {});
  }
}

export const createService = () => ({
  useCase: ServiceRegistry.get<OrderUseCase>("OrderUseCaseService")
});
