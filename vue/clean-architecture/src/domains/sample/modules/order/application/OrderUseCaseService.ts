// import {orderApi} from "../infrastructure/api/orderApi.ts";
import {Service} from "@/common/core/decorator/ProviderDecorator";
import {ProviderRegistry} from "@/common/core/registry/ProviderRegistry";
import type {OrderUseCase} from "@/domains/sample/modules/order/application/provided/OrderUseCase";
import type {UserQueryIn} from "@/domains/sample/modules/user-refactoring/application/user/provided/UserQueryIn";
import type {OrderApiOut} from "@/domains/sample/modules/order/application/required/OrderApiOut";
import type {Order} from "@/domains/sample/modules/order/domain/entity/Order";
import type {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";
import {createApi} from "@/domains/sample/modules/order/adapter/api/orderApi";

@Service
export class OrderUseCaseService implements OrderUseCase {
  constructor(
    private userQueryService: UserQueryIn,
    private orderApi: OrderApiOut
  ) {
    this.orderApi = createApi.api;
    this.userQueryService = ProviderRegistry.get<UserQueryIn>("UserQueryService"); // DI
  }

  async fetchAllOrder(): Promise<Order[]> {
    return await this.orderApi.fetchAllOrder().then(orders => orders);
  }

  async joinUserOrder(userId: number): Promise<User | any> {
    return await this.userQueryService.getUserList()
      .then((userList) => userList.find(user => user.id === userId) ?? {});
  }
}

export const createService = () => ({
  useCase: ProviderRegistry.get<OrderUseCase>("OrderUseCaseService")
});
