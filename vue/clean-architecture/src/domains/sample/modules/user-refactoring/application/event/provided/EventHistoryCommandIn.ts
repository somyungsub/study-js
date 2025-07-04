import type {UserEventHistory} from "../../../domain/entity/UserEventHistory.ts";

export interface EventHistoryCommandIn {
  save(user: UserEventHistory): Promise<void>;
}