import type {User} from "../../../domain/entity/User.ts";

export interface UserBizIn {
  toStringUser(user:User): string;
}
