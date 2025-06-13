import {type User} from "../../../domain/entity/User.ts";
import {userApi} from "../../../infrastructure/api/userApi.ts";
import type {UserQuery} from "../UserQuery.ts";
import type {UserCommand} from "../UserCommand.ts";
import type {UserUseCase} from "../UserUseCase.ts";
import {Around} from "../../../../../../../common/core/decorator/Around.ts";
import {Before} from "../../../../../../../common/core/decorator/Before.ts";
import {After} from "../../../../../../../common/core/decorator/After.ts";
import {Service} from "../../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../../common/core/registry/ServiceRegistry.ts";

@Service
class UserQueryService implements UserQuery {
  getUserDetailList(): Promise<User[]> {
    return Promise.resolve([]);
  }

  async getUserList(): Promise<User[]> {
    return await userApi.fetchUsers().then((users: User[]) => {
      return users;
    });
  }
}

@Service
class UserCommandService implements UserCommand {
  async saveUser(user: User): Promise<number> {
    return await userApi.save(user);
  }
}

@Service
class UserUseCaseService implements UserUseCase {
  toStringUser(user: User): string {
    return user.toString();
  }
}

@Service
class UserUseCaseAopService implements UserUseCase {
  @Around({
    before: () => "**** ",
    after: (user: User)=> ` | $$$$ after대문자::${user.name.toUpperCase()}`
  })
  toStringUser(user: User): string {
    return user.toString();
  }
}

// const userQueryService1 = ServiceRegistry.get<UserQuery>("UserQueryService");
// const userQueryService2 = ServiceRegistry.get<UserQuery>("UserQueryService");
// const userQueryService3 = ServiceRegistry.get<UserCommand>("UserCommandService");
// console.log("test 단일인스턴스 : ", userQueryService1 === userQueryService2);
// console.log("test 단일인스턴스2 : ", userQueryService1 === userQueryService3);
// console.log("test 단일인스턴스3 : ", userQueryService2 === userQueryService3);


export const createService = () => ({
  query: ServiceRegistry.get<UserQuery>("UserQueryService"),
  command: ServiceRegistry.get<UserCommand>("UserCommandService"),
  useCase: ServiceRegistry.get<UserUseCase>("UserUseCaseAopService"),   // AOP 기능 추가 된 서비스
  // useCase: ServiceRegistry.get<UserUseCase>("UserUseCaseService"),   // 기본 기존 서비스

  // query: new UserQueryService(),
  // command: new UserCommandService(),
  // useCase: new UserUseCaseService(),
});