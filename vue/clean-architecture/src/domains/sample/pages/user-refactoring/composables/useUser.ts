import {User} from "../domain/entity/User.ts";
import {type Ref, ref} from "vue";
import {createService} from "../usecase/user/service/UserService.ts";

export type useUserType = {
  users: Ref<any[]>;
  validateUser(userViewData: any): void;
  saveUser(user: User): Promise<void>
  fetchAllUser(): Promise<void>;
  getUserDetailList(): Promise<User[]>;
  getUserCount(): number;
  toStringUser(user: any): string;
};

export function useUser(): useUserType {
  const {query, command} = createService();
  const _state = {
    users: ref<any[]>([]),
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

  function validateUser(userViewData: any): void {
    console.log(userViewData);
  }

  function getUserCount(): number {
    return _state.users.value.length;
  }

  function toStringUser(user: any): string {
    const userEntity = User.from(user);
    return userEntity.toString();
  }

  return {
    users: _state.users,
    fetchAllUser,
    saveUser,
    getUserDetailList,
    validateUser,
    getUserCount,
    toStringUser
  };
}