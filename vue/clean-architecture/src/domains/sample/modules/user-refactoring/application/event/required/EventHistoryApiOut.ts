import type {UserEventHistory} from "@/domains/sample/modules/user-refactoring/domain/event/entity/UserEventHistory";

export interface EventHistoryApiOut {
  fetchAllUserEventHistory(): Promise<UserEventHistory[]>;

  save(eventHistory: UserEventHistory): Promise<void>;
}