import {ref} from "vue";
import {userApi} from "../api/userApi.js";
import {eventHistoryApi} from "../api/eventHistoryApi.js";

const USER_TYPE = {
  GENERAL: 'GENERAL',
  ADMIN: 'ADMIN'
}

const GENDER_TYPE = {
  FEMALE: 'F',
  MALE: "M",
}

export function useUserJS() {
  const _state = {
    users: ref([]),
    histories: ref([])
  };

  async function fetchAllUser(){
    await userApi.fetchUsers().then((users) => {
      _state.users.value = [...users];
    });
  }

  async function saveUser(user){
    validateUser(user);
    await userApi.save(user);
    await fetchAllUser();
  }

  // TODO
  function getUserDetailList(){
    return Promise.resolve([]);
  }

  async function fetchAllHistory() {
    await eventHistoryApi.fetchAllUserEventHistory().then((histories) => {
      _state.histories.value = [...histories];
    });
  }

  async function saveHistory(history) {
    await eventHistoryApi.save(history);
    await fetchAllHistory();
  }

  function validateUser(userViewData) {
    const ensure = (condition, message) => {
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