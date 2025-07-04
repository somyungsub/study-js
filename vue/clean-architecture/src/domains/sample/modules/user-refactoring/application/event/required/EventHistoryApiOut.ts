import type {UserEventHistory} from "../../../domain/entity/UserEventHistory.ts";

export interface EventHistoryApiOut {
  fetchAllUserEventHistory(): Promise<UserEventHistory[]>;

  save(eventHistory: UserEventHistory): Promise<void>;
}