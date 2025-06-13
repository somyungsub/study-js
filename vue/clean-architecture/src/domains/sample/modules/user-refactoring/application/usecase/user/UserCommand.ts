import {User} from "../../../domain/entity/User.ts";

export interface UserCommand {
  saveUser(user: User): Promise<number>
}