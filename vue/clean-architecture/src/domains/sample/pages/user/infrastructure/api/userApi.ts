import {User} from "../../domain/entity/User.ts";
import {GENDER, USER_TYPES} from "../../domain/constant/UserTypes.ts";

// 유저
const userRepository: User[] = [
  User.from({id: 1, name: "ssss", email: "sss@aaa.com", gender: GENDER[0], userType: USER_TYPES[0]}),
  User.from({id: 2, name: "ssss2", email: "sss2@aaa.com", gender: GENDER[1], userType: USER_TYPES[0]}),
];

export const userApi = {
  fetchUsers(): Promise<User[]> {
    return Promise.resolve(userRepository);
  },
  save(user: User): Promise<number> {
    userRepository.push(user);
    return Promise.resolve(user.id);
  }
}