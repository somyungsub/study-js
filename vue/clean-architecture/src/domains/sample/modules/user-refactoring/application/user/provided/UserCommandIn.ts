import {User} from "../../../domain/entity/User.ts";

export interface UserCommandIn {
  saveUser(user: User): Promise<number>
}