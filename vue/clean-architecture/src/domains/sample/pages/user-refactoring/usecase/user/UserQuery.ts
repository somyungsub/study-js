import type {User} from "../../domain/entity/User.ts";

export interface UserQuery {
  getUserList(): Promise<User[]>;
  getUserDetailList(): Promise<User[]>
}