// 이벤트 참여 이력
const eventHistoryRepository: any[] = [
  {eventId: 'test-event-1', eventName: 'test-event-name', createDate: new Date()}
];

export const eventHistoryApi = {
  fetchAllUserEventHistory(): Promise<any[]> {
    return Promise.resolve(eventHistoryRepository);
  },

  save(eventHistory: any): Promise<void> {
    eventHistoryRepository.push(eventHistory);
    return Promise.resolve();
  }
}