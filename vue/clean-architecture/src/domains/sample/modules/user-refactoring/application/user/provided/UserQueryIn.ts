import type {User} from "../../../domain/entity/User.ts";

export interface UserQueryIn {
  getUserList(): Promise<User[]>;
  getUserDetailList(): Promise<User[]>
}