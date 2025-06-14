import type {Order} from "../../../domain/entity/Order.ts";
import type {OrderUseCase} from "../OrderUseCase.ts";
import type {UserQueryIn} from "../../../../user-refactoring/application/user/UserQueryIn.ts";
import {orderApi} from "../../../infrastructure/api/orderApi.ts";
import {Service} from "../../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../../common/core/registry/ServiceRegistry.ts";
import type {User} from "../../../../user-refactoring/domain/entity/User.ts";

@Service
export class OrderUseCaseService implements OrderUseCase {
  constructor(private userQueryService: UserQueryIn) {
    this.userQueryService = ServiceRegistry.get<UserQueryIn>("UserQueryService"); // DI
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
