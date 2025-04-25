/*
  클로저 활용
 */
export function UserBase({id, password, email}) {

  const state = {id, password, email};

  function getUserData() {
    return state;
  }

  function setUserData({id, password, email}) {
    state.id = id;
    state.password = password;
    state.email = email;
  }

  return ({address,name, age})=>{
    const state = {address, name, age};

    function getDetailData() {
      return state;
    }

    function setDetailData({address,name, age}) {
      state.address = address;
      state.name = name;
      state.age = age;
    }
    return {
      getUserData,
      setUserData,

      getDetailData,
      setDetailData,

    }
  }

}