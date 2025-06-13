import type {User} from "../../domain/entity/User.ts";

export interface UserOutPort {
  fetchAllUser(): Promise<User[]>;

  save(user: User): Promise<number>;
}