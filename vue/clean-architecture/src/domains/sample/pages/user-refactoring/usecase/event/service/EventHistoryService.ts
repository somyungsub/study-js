import type {EventHistoryQuery} from "../EventHistoryQuery.ts";
import {type UserEventHistory} from "../../../domain/entity/UserEventHistory.ts";
import {eventHistoryApi} from "../../../infrastructure/api/eventHistoryApi.ts";
import type {EventHistoryCommand} from "../EventHistoryCommand.ts";

class EventHistoryService implements EventHistoryQuery {
  async fetchAllHistory(): Promise<UserEventHistory[]> {
    return await eventHistoryApi.fetchAllUserEventHistory().then((histories: UserEventHistory[]) => {
      return histories;
    });
  }
}

class UserCommandService implements EventHistoryCommand {
  async save(history: UserEventHistory): Promise<void> {
    await eventHistoryApi.save(history);
    return Promise.resolve();
  }
}

export const createService = () => ({
  query: new EventHistoryService(),
  command: new UserCommandService(),
});