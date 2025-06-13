import {type Ref, ref} from "vue";
import {userApi} from "../api/userApi.ts";
import {eventHistoryApi} from "../api/eventHistoryApi.ts";


enum USER_TYPE {
  GENERAL = 'GENERAL',
  ADMIN = 'ADMIN'
}

enum GENDER_TYPE {
  FEMALE = 'F',
  MALE = "M",
}

type useUserType = {
  users: Ref<any[]>;
  histories: Ref<any[]>;
  validateUser(userViewData: any): void;
  saveUser(user: any): Promise<void>
  fetchAllUser(): Promise<void>;
  getUserDetailList(): Promise<any[]>;
  fetchAllHistory(): Promise<void>;
  saveHistory(history: any): Promise<void>;
};

export function useUser(): useUserType {
  const _state = {
    users: ref<any[]>([]),
    histories: ref<any[]>([])
  };

  async function fetchAllUser(): Promise<void> {
    await userApi.fetchUsers().then((users: any[]) => {
      _state.users.value = [...users];
    });
  }

  async function saveUser(user: any): Promise<void> {
    validateUser(user);
    await userApi.save(user);
    await fetchAllUser();
  }

  // TODO
  function getUserDetailList(): Promise<any[]> {
    return Promise.resolve([]);
  }

  async function fetchAllHistory(): Promise<void> {
    await eventHistoryApi.fetchAllUserEventHistory().then((histories: any[]) => {
      _state.histories.value = [...histories];
    });
  }

  async function saveHistory(history: any): Promise<void> {
    await eventHistoryApi.save(history);
    await fetchAllHistory();
  }

  function validateUser(userViewData: any): void {
    const ensure = (condition: boolean, message: string) => {
      if (condition) {
        alert(message);
        throw new Error(message);
      }
    };

    ensure(
      !userViewData.name || userViewData.name.length === 0,
      '이름은 필수입니다.'
    );

    ensure(
      !Object.values(GENDER_TYPE).includes(userViewData.gender),
      [
        `gender 입력값: ${userViewData.gender}`,
        `gender는 다음 중 하나여야 합니다: ${Object.values(GENDER_TYPE).join(', ')}`
      ].join('\n')
    );

    ensure(
      !Object.values(USER_TYPE).includes(userViewData.userType),
      [
        `userType 입력값: ${userViewData.userType}`,
        `userType은 다음 중 하나여야 합니다: ${Object.values(USER_TYPE).join(', ')}`
      ].join('\n')
    );
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