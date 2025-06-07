import {type User} from "../../../domain/entity/User.ts";
import {userApi} from "../../../infrastructure/api/userApi.ts";
import type {UserQuery} from "../UserQuery.ts";
import type {UserCommand} from "../UserCommand.ts";

class UserQueryService implements UserQuery {
  getUserDetailList(): Promise<User[]> {
    console.log("getUserDetailList");
    return Promise.resolve([]);
  }

  async getUserList(): Promise<User[]> {
    return await userApi.fetchUsers().then((users: User[]) => {
      console.log("getUserList : users : ", users);
      return users;
    });
  }
}

class UserCommandService implements UserCommand {
  async saveUser(user: User): Promise<number> {
    return await userApi.save(user);
  }
}

export const createService = () => ({
  query: new UserQueryService(),
  command: new UserCommandService(),
});