import {type User} from "../domain/entity/User.ts";
import {createUserService} from "../application/service/UserService.ts";
import type {UserEventHistory} from "../domain/entity/UserEventHistory.ts";
import {type Ref, ref} from "vue";

type useUserType = {
  users: Ref<any[]>;
  histories: Ref<any[]>;
  validateUser(userViewData: any): void;
  saveUser(user: User): Promise<void>
  fetchAllUser(): Promise<void>;
  getUserDetailList(): Promise<User[]>;
  fetchAllHistory(): Promise<void>;
  saveHistory(history: UserEventHistory): Promise<void>;
};

export function useUser(): useUserType {
  const {query, command} = createUserService();
  const _state = {
    users: ref<any[]>([]),
    histories: ref<any[]>([])
  };

  async function fetchAllUser(): Promise<void> {
    const userList = await query.getUserList();
    _state.users.value = userList.map(user => user.toDto());
  }

  async function saveUser(user: User): Promise<void> {
    await command.saveUser(user);
    await fetchAllUser();
  }

  function getUserDetailList(): Promise<User[]> {
    return query.getUserDetailList();
  }

  async function fetchAllHistory(): Promise<void> {
    const histories = await query.fetchAllHistory();
    _state.histories.value = histories.map(history => history.toDto());
  }

  async function saveHistory(history: UserEventHistory): Promise<void> {
    await command.save(history);
    await fetchAllHistory();
  }

  function validateUser(userViewData: any): void {
    console.log(userViewData);
  }

  return {
    users: _state.users,
    histories: _state.histories,
    fetchAllUser,
    saveUser,
    getUserDetailList,
    validateUser,
    fetchAllHistory,
    saveHistory
  };
}