import {type User} from "../../../domain/entity/User.ts";
import {userApi} from "../../../infrastructure/api/userApi.ts";
import type {UserQuery} from "../UserQuery.ts";
import type {UserCommand} from "../UserCommand.ts";
import type {UserUseCase} from "../UserUseCase.ts";
import {Around} from "../../../../../../../common/core/decorator/Around.ts";
import {Before} from "../../../../../../../common/core/decorator/Before.ts";
import {After} from "../../../../../../../common/core/decorator/After.ts";

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

class UserCommandService implements UserCommand {
  async saveUser(user: User): Promise<number> {
    return await userApi.save(user);
  }
}

class UserUseCaseImpl implements UserUseCase {
  @Around({
    before: () => "****",
    after: (user:User)=> ` | $$$$ after대문자::${user.name.toUpperCase()}`
  })
  // @Before()
  // @After((user: User) => user.id.toFixed(1))
  toStringUser(user: User): string {
    return user.toString();
  }
}

export const createService = () => ({
  query: new UserQueryService(),
  command: new UserCommandService(),
  useCase: new UserUseCaseImpl(),
});