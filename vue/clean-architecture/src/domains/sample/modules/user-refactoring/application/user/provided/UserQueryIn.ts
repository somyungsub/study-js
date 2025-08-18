import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";

export interface UserQueryIn {
  getUserList(): Promise<User[]>;
  getUserDetailList(): Promise<User[]>
}