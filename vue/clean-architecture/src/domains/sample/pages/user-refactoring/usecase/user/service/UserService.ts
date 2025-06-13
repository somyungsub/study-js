import {type User} from "../../../domain/entity/User.ts";
import type {UserQuery} from "../UserQuery.ts";
import type {UserCommand} from "../UserCommand.ts";
import type {UserUseCase} from "../UserUseCase.ts";
import {Around} from "../../../../../../../common/core/decorator/Around.ts";
import {Before} from "../../../../../../../common/core/decorator/Before.ts";
import {After} from "../../../../../../../common/core/decorator/After.ts";
import {Service} from "../../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../../common/core/registry/ServiceRegistry.ts";
import type {UserOutPort} from "../UserOutPort.ts";
import {createOutPort} from "../../../infrastructure/api/userApi.ts";

@Service
class UserQueryService implements UserQuery {
  constructor(private userApi: UserOutPort) {
    this.userApi = createOutPort.api;
  }

  getUserDetailList(): Promise<User[]> {
    return Promise.resolve([]);
  }

  async getUserList(): Promise<User[]> {
    return await this.userApi.fetchAllUser().then((users: User[]) => {
      return users;
    });
  }
}

@Service
class UserCommandService implements UserCommand {
  constructor(private userApi: UserOutPort) {
    this.userApi = createOutPort.api;
  }

  async saveUser(user: User): Promise<number> {
    return await this.userApi.save(user);
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
  @Before(() => '-->> ')
  @After(() => ' <<--')
  @Around({
    before: () => "**** ",
    after: (user: User) => ` | $$$$ after 대문자::${user.name.toUpperCase()}`
  })
  toStringUser(user: User): string {
    return user.toString();
  }
}

export const createService = () => ({
  query: ServiceRegistry.get<UserQuery>("UserQueryService"),
  command: ServiceRegistry.get<UserCommand>("UserCommandService"),
  useCase: ServiceRegistry.get<UserUseCase>("UserUseCaseAopService"),   // AOP 기능 추가 된 서비스
  // useCase: ServiceRegistry.get<UserUseCase>("UserUseCaseService"),   // 기본 기존 서비스

  // query: new UserQueryService(),
  // command: new UserCommandService(),
  // useCase: new UserUseCaseService(),
});