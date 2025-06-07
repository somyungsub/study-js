import  {type UserEventHistory} from "../../domain/entity/UserEventHistory.ts";

export interface EventHistoryQuery {
  fetchAllHistory(): Promise<UserEventHistory[]>;
  // ....
}