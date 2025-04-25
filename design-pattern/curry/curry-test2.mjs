export function UserBase2({ id, password, email }){
  const state = { id, password, email };

  const getUserData = () => state;

  const setUserData = ({ id, password, email }) => {
    state.id = id;
    state.password = password;
    state.email = email;
  };

  return ({ address, name, age }) => {
    const state = { address, name, age };

    const getDetailData = () => state;

    const setDetailData = ({ address, name, age }) => {
      state.address = address;
      state.name = name;
      state.age = age;
    };

    return {
      getUserData,
      setUserData,
      getDetailData,
      setDetailData,
    };
  };
}
