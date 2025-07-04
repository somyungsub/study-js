import type {EventHistoryQueryIn} from "./provided/EventHistoryQueryIn.ts";
import {type UserEventHistory} from "../../domain/entity/UserEventHistory.ts";
import type {EventHistoryCommandIn} from "./provided/EventHistoryCommandIn.ts";
import {Service} from "../../../../../../common/core/decorator/Service.ts";
import {ServiceRegistry} from "../../../../../../common/core/registry/ServiceRegistry.ts";
import type {EventHistoryApiOut} from "./required/EventHistoryApiOut.ts";
import {createApi} from "../../infrastructure/api/EventHistoryRestApi.ts";

@Service
class EventHistoryService implements EventHistoryQueryIn {
  constructor(private eventHistoryApi: EventHistoryApiOut) {
    this.eventHistoryApi = createApi.api;
  }

  async fetchAllHistory(): Promise<UserEventHistory[]> {
    return await this.eventHistoryApi.fetchAllUserEventHistory().then((histories: UserEventHistory[]) => {
      return histories;
    });
  }
}


@Service
class EventCommandService implements EventHistoryCommandIn {
  constructor(private eventHistoryApi: EventHistoryApiOut) {
    this.eventHistoryApi = createApi.api;
  }
  async save(history: UserEventHistory): Promise<void> {
    await this.eventHistoryApi.save(history);
    return Promise.resolve();
  }
}

export const createService = () => ({
  query: ServiceRegistry.get<EventHistoryQueryIn>("EventHistoryService"),
  command: ServiceRegistry.get<EventHistoryCommandIn>("EventCommandService"),
  // query: new EventHistoryService(),
  // command: new EventCommandService(),
});