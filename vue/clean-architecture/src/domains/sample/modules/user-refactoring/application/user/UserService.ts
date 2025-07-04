import {type User} from "../../domain/entity/User.ts";
import type {UserQueryIn} from "./provided/UserQueryIn.ts";
import type {UserCommandIn} from "./provided/UserCommandIn.ts";
import type {UserBizIn} from "./provided/UserBizIn.ts";
import {Around} from "../../../../../../common/core/decorator/Around.ts";
import {Before} from "../../../../../../common/core/decorator/Before.ts";
import {After} from "../../../../../../common/core/decorator/After.ts";
import {Service} from "../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../common/core/registry/ServiceRegistry.ts";
import type {UserApiOut} from "./required/UserApiOut.ts";
import {createOutPort} from "../../infrastructure/api/UserRestApi.ts";

@Service
class UserQueryService implements UserQueryIn {
  constructor(private userApi: UserApiOut) {
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
class UserCommandService implements UserCommandIn {
  constructor(private userApi: UserApiOut) {
    this.userApi = createOutPort.api;
  }

  async saveUser(user: User): Promise<number> {
    return await this.userApi.save(user);
  }
}

@Service
class UserUseCaseService implements UserBizIn {
  toStringUser(user: User): string {
    return user.toString();
  }
}

@Service
class UserUseCaseAopService implements UserBizIn {
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

// TODO 필요한 유스케이스를 늘려서 사용하기
export const createService = () => ({
  query: ServiceRegistry.get<UserQueryIn>("UserQueryService"),
  command: ServiceRegistry.get<UserCommandIn>("UserCommandService"),
  useCase: ServiceRegistry.get<UserBizIn>("UserUseCaseAopService"),   // AOP 기능 추가 된 서비스
  // useCase: ServiceRegistry.get<UserUseCase>("UserUseCaseService"),   // 기본 기존 서비스

  // query: new UserQueryService(),
  // command: new UserCommandService(),
  // useCase: new UserUseCaseService(),
});