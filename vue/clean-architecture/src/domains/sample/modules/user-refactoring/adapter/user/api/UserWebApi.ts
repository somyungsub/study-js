import {Email} from "@/domains/sample/modules/user-refactoring/domain/user/vo/Email";
import {GENDER, USER_TYPES} from "@/domains/sample/modules/user-refactoring/domain/user/constant/UserTypes";
import {WebApi} from "@/common/core/decorator/ProviderDecorator";
import type {UserApiOut} from "@/domains/sample/modules/user-refactoring/application/user/required/UserApiOut";
import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";
import {ProviderRegistry} from "@/common/core/registry/ProviderRegistry";

// 유저 테스트 데이터
const userRepository: any[] = [
  {id: 1, name: "ssss", email: Email.from({host:'sss', domain:'abc.com'}), gender: GENDER[0], userType: USER_TYPES[0]},
  {id: 2, name: "ssss2", email: Email.from({host:'sss2', domain:'abc2.com'}), gender: GENDER[1], userType: USER_TYPES[0]},
];

@WebApi
class UserWebApi implements UserApiOut {
  async fetchAllUser(): Promise<User[]> {
    // TODO 서버 api 통신후 response data -> 도메인 entity로 변환 작업, 현재는 샘플 data -> User entity, from으로 매핑
    return await Promise.resolve(userRepository).then((values) => values.map(User.from));
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

function includeUser(user: User) {
  return userRepository.map(value => value.id).includes(user.id);
}

export const createOutPort: {
  api: UserApiOut;
} = {
  api: ProviderRegistry.get<UserApiOut>("UserWebApi")
  // api: new UserWebApi()
}