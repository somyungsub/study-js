import type {UserEventHistory} from "@/domains/sample/modules/user-refactoring/domain/event/entity/UserEventHistory";

export interface EventHistoryQueryIn {
  fetchAllHistory(): Promise<UserEventHistory[]>;
  // ....
}