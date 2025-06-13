import {UserEventHistory} from "../../domain/entity/UserEventHistory.ts";

// 이벤트 참여 이력
const eventHistoryRepository: UserEventHistory[] = [
  UserEventHistory.from({eventId: 'test-event-1', eventName: 'test-event-name', createDate: new Date()}),
];

export const eventHistoryApi = {
  fetchAllUserEventHistory(): Promise<UserEventHistory[]> {
    return Promise.resolve(eventHistoryRepository);
  },

  save(eventHistory: UserEventHistory): Promise<void> {
    eventHistoryRepository.push(eventHistory);
    return Promise.resolve();
  }
}