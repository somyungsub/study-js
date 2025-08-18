import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";

export interface UserApiOut {
  fetchAllUser(): Promise<User[]>;

  save(user: User): Promise<number>;
}