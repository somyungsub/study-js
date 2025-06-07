import type {UserEventHistory} from "../../../domain/entity/UserEventHistory.ts";

export interface EventHistoryCommand {
  save(user: UserEventHistory): Promise<void>;
}