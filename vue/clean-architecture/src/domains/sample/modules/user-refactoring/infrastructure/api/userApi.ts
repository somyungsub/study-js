import {User} from "../../domain/entity/User.ts";
import {GENDER, USER_TYPES} from "../../domain/constant/UserTypes.ts";
import {Email} from "../../domain/vo/Email.ts";
import type {UserOutPort} from "../../application/usecase/user/UserOutPort.ts";

// 유저
const userRepository: User[] = [
  User.from({id: 1, name: "ssss", email: Email.from({host:'sss', domain:'abc.com'}), gender: GENDER[0], userType: USER_TYPES[0]}),
  User.from({id: 2, name: "ssss2", email: Email.from({host:'sss2', domain:'abc2.com'}), gender: GENDER[1], userType: USER_TYPES[0]}),
];

// export const userApi = {
//   fetchUsers(): Promise<User[]> {
//     return Promise.resolve(userRepository);
//   },
//   save(user: User): Promise<number> {
//     if (includeUser(user)) {
//       return Promise.resolve(0);
//     }
//     userRepository.push(user);
//     return Promise.resolve(user.id);
//   }
// }

function includeUser(user: User) {
  return userRepository.map(value => value.id).includes(user.id);
}

class UserApi implements UserOutPort {
  fetchAllUser(): Promise<User[]> {
    return Promise.resolve(userRepository);
  }

  save(user: User): Promise<number> {
    if (includeUser(user)) {
      return Promise.resolve(0);
    }
    userRepository.push(user);
    return Promise.resolve(user.id);
  }

}

export const createOutPort: {
  api: UserOutPort;
} = {
  api: new UserApi() as UserOutPort,
}