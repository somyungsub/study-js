import type {User} from "../../domain/entity/User.ts";

export interface UserApiOut {
  fetchAllUser(): Promise<User[]>;

  save(user: User): Promise<number>;
}