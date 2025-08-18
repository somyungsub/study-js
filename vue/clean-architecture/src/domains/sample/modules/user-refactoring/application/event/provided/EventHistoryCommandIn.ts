import type {UserEventHistory} from "@/domains/sample/modules/user-refactoring/domain/event/entity/UserEventHistory";

export interface EventHistoryCommandIn {
  save(user: UserEventHistory): Promise<void>;
}