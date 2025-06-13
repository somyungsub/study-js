import type {User} from "../../../domain/entity/User.ts";

export interface UserUseCase {
  toStringUser(user:User): string;
}
