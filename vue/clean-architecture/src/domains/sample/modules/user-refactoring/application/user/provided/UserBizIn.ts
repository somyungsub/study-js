import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";

export interface UserBizIn {
  toStringUser(user:User): string;
}
