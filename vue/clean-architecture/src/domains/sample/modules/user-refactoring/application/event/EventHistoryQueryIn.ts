import  {type UserEventHistory} from "../../domain/entity/UserEventHistory.ts";

export interface EventHistoryQueryIn {
  fetchAllHistory(): Promise<UserEventHistory[]>;
  // ....
}