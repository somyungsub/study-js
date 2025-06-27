// 이벤트 참여 이력
const eventHistoryRepository = [
  {eventId: 'test-event-1', eventName: 'test-event-name', createDate: new Date()}
];

export const eventHistoryApi = {
  fetchAllUserEventHistory() {
    return Promise.resolve(eventHistoryRepository);
  },

  save(eventHistory) {
    eventHistoryRepository.push(eventHistory);
    return Promise.resolve();
  }
}