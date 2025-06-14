import {UserEventHistory} from "../../domain/entity/UserEventHistory.ts";
import type {EventHistoryApiOut} from "../../application/event/EventHistoryApiOut.ts";

// 이벤트 참여 이력
const eventHistoryRepository: any[] = [
  {eventId: 'test-event-1', eventName: 'test-event-name', createDate: new Date()},
  {eventId: 'test-event-2', eventName: 'test-event-name2', createDate: new Date()},
  {eventId: 'test-event-3', eventName: 'test-event-name3', createDate: new Date()},
];

class EventHistoryRestApi implements EventHistoryApiOut {
  async fetchAllUserEventHistory(): Promise<UserEventHistory[]> {
    // TODO 서버 api 통신후 response data -> 도메인 entity로 변환 작업, 현재는 샘플 data -> UserEventHistory entity, from으로 매핑
    return await Promise.resolve(eventHistoryRepository).then(value => value.map(UserEventHistory.from));
  }

  save(eventHistory: UserEventHistory): Promise<void> {
    // TODO 서버 save api : 도메인 entity -> 서버데이터로 변환해서 요청
    eventHistoryRepository.push(eventHistory.toDto());
    return Promise.resolve();
  }
}

export const createApi = {
  api: new EventHistoryRestApi()
}