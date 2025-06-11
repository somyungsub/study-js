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
  const {query, command, useCase} = createService();
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

  // 기존 함수
  // function toStringUser(user: any): string {
  //   const userEntity = User.from(user);
  //   return userEntity.toString();
  // }

  /*
    TODO 앞뒤로 *** 을 추가해줘. 라는 요구사항이 발생 -> 수정해야됨->어디에서하는게 베스트일지? 고민
    현재 선택지는 2개
    1. composable에서 할 경우 -> function (데코레이터 function 사용 불가)
      - view 화면가 인터렉션 하는 경우라면 ?, 아니라면? 따로 생각
    2. service에서 할 경우 -> class (ts 데코레이터 function 사용 가능함 -> aop 기반으로 할 수 있음)
      - 해당 기능이 usecase인지도 고려 해보기
   */
  // 1.composable에서 처리
  // function toStringUser(user: any): string {
  //   const userEntity = User.from(user); // User 엔티티에 접근해서 다이렉트로 처리한 경우
  //   return `**** ${userEntity.toString()} ****** `;
  // }

  // 2.usecase에서 처리
  function toStringUser(user: any): string {
    return useCase.toStringUser(User.from(user));
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