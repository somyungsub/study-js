import type {EventHistoryQuery} from "../EventHistoryQuery.ts";
import {type UserEventHistory} from "../../../domain/entity/UserEventHistory.ts";
import {eventHistoryApi} from "../../../infrastructure/api/eventHistoryApi.ts";
import type {EventHistoryCommand} from "../EventHistoryCommand.ts";
import {Service} from "../../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../../common/core/registry/ServiceRegistry.ts";

@Service
class EventHistoryService implements EventHistoryQuery {
  async fetchAllHistory(): Promise<UserEventHistory[]> {
    return await eventHistoryApi.fetchAllUserEventHistory().then((histories: UserEventHistory[]) => {
      return histories;
    });
  }
}


@Service
class EventCommandService implements EventHistoryCommand {
  async save(history: UserEventHistory): Promise<void> {
    await eventHistoryApi.save(history);
    return Promise.resolve();
  }
}

export const createService = () => ({
  query: ServiceRegistry.get<EventHistoryQuery>("EventHistoryService"),
  command: ServiceRegistry.get<EventHistoryCommand>("EventCommandService"),
  // query: new EventHistoryService(),
  // command: new EventCommandService(),
});