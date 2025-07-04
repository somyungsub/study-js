import type {Order} from "../domain/entity/Order.ts";
import type {OrderUseCase} from "./provided/OrderUseCase.ts";
import type {UserQueryIn} from "../../user-refactoring/application/user/provided/UserQueryIn.ts";
// import {orderApi} from "../infrastructure/api/orderApi.ts";
import {Service} from "../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../common/core/registry/ServiceRegistry.ts";
import type {User} from "../../user-refactoring/domain/entity/User.ts";
import type {OrderApiOut} from "./required/OrderApiOut.ts";
import {createApi} from "../infrastructure/api/orderApi.ts";

@Service
export class OrderUseCaseService implements OrderUseCase {
  constructor(
    private userQueryService: UserQueryIn,
    private orderApi: OrderApiOut
  ) {
    this.orderApi = createApi.api;
    this.userQueryService = ServiceRegistry.get<UserQueryIn>("UserQueryService"); // DI
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
  useCase: ServiceRegistry.get<OrderUseCase>("OrderUseCaseService")
});
