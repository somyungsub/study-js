import {type User} from "../../domain/entity/User.ts";
import {userApi} from "../../infrastructure/api/userApi.ts";
import type {UserQuery} from "../query/UserQuery.ts";
import type {UserCommand} from "../command/UserCommand.ts";
import type {EventHistoryQuery} from "../query/EventHistoryQuery.ts";
import {type UserEventHistory} from "../../domain/entity/UserEventHistory.ts";
import {eventHistoryApi} from "../../infrastructure/api/eventHistoryApi.ts";
import type {EventHistoryCommand} from "../command/EventHistoryCommand.ts";

class UserQueryService implements UserQuery, EventHistoryQuery {
  getUserDetailList(): Promise<User[]> {
    return Promise.resolve([]);
  }

  async getUserList(): Promise<User[]> {
    return await userApi.fetchUsers().then((users: User[]) => {
      return users;
    });
  }

  async fetchAllHistory(): Promise<UserEventHistory[]> {
    return await eventHistoryApi.fetchAllUserEventHistory().then((histories: UserEventHistory[]) => {
      return histories;
    });
  }
}

class UserCommandService implements UserCommand, EventHistoryCommand {
  async saveUser(user: User): Promise<number> {
    return await userApi.save(user);
  }
  async save(history: UserEventHistory): Promise<void> {
    await eventHistoryApi.save(history);
    return Promise.resolve();
  }
}

export const createUserService = () => ({
  query: new UserQueryService(),
  command: new UserCommandService(),
});