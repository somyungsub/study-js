import {createApi} from "../../infrastructure/api/EventHistoryRestApi.ts";
import {Service} from "@/common/core/decorator/ProviderDecorator";
import {ProviderRegistry} from "@/common/core/registry/ProviderRegistry";
import type {
  EventHistoryQueryIn
} from "@/domains/sample/modules/user-refactoring/application/event/provided/EventHistoryQueryIn";
import type {
  EventHistoryApiOut
} from "@/domains/sample/modules/user-refactoring/application/event/required/EventHistoryApiOut";
import type {UserEventHistory} from "@/domains/sample/modules/user-refactoring/domain/entity/UserEventHistory";
import type {
  EventHistoryCommandIn
} from "@/domains/sample/modules/user-refactoring/application/event/provided/EventHistoryCommandIn";

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
  query: ProviderRegistry.get<EventHistoryQueryIn>("EventHistoryService"),
  command: ProviderRegistry.get<EventHistoryCommandIn>("EventCommandService"),
  // query: new EventHistoryService(),
  // command: new EventCommandService(),
});