import type {Order} from "../../domain/entity/Order.ts";
import type {OrderUseCase} from "../OrderUseCase.ts";
import type {UserQuery} from "../../../user-refactoring/usecase/user/UserQuery.ts";
import {createService as createUserService} from "../../../user-refactoring/usecase/user/service/UserService.ts";
import {orderApi} from "../../infra/api/orderApi.ts";

class OrderUseCaseService implements OrderUseCase {
  constructor(private userQuery: UserQuery) {
  }

  async fetchAllOrder(): Promise<Order[]> {
    return await orderApi.fetchAll().then(orders => orders);
  }

  async joinUserOrder(userId: number): Promise<User> {
    return await this.userQuery.getUserList().then((userList) => {
      return userList.find(user => user.id === userId);
    });
  }
}

// TODO 서비스 레지스트리로 di 하도록 수정, @Service 애노테이션 활용해서..
export const createService = () => ({
  useCase: new OrderUseCaseService(createUserService().query),
});
