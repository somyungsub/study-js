import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";

export interface UserCommandIn {
  saveUser(user: User): Promise<number>
}