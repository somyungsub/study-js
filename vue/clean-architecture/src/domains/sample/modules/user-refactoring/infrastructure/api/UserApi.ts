import {User} from "../../domain/entity/User.ts";
import {GENDER, USER_TYPES} from "../../domain/constant/UserTypes.ts";
import {Email} from "../../domain/vo/Email.ts";
import type {UserOutPort} from "../../application/usecase/user/UserOutPort.ts";

// 유저
const userRepository: any[] = [
  {id: 1, name: "ssss", email: Email.from({host:'sss', domain:'abc.com'}), gender: GENDER[0], userType: USER_TYPES[0]},
  {id: 2, name: "ssss2", email: Email.from({host:'sss2', domain:'abc2.com'}), gender: GENDER[1], userType: USER_TYPES[0]},
];

function includeUser(user: User) {
  return userRepository.map(value => value.id).includes(user.id);
}

class UserApi implements UserOutPort {
  async fetchAllUser(): Promise<User[]> {
    // TODO 서버 api 통신후 response data -> 도메인 entity로 변환 작업, 현재는 샘플 data -> User entity, from으로 매핑
    return await Promise.resolve(userRepository).then(values => values.map(user => User.from(user)));
  }

  async save(user: User): Promise<number> {
    if (includeUser(user)) {
      return Promise.resolve(0);
    }
    // TODO 서버 save api : 도메인 entity -> 서버데이터로 변환해서 요청
    userRepository.push(user.toDto());
    return await Promise.resolve(user).then(user => user.id);
  }

}

export const createOutPort: {
  api: UserOutPort;
} = {
  api: new UserApi() as UserOutPort,
}