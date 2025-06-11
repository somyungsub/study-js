import {type Ref, ref} from "vue";
import {UserEventHistory} from "../domain/entity/UserEventHistory.ts";
import {createService} from "../usecase/event/service/EventHistoryService.ts";

export type useEventHistoryType = {
  histories: Ref<any[]>;
  fetchAllHistory(): Promise<void>;
  saveHistory(history: UserEventHistory): Promise<void>;
  getEventHistoryCount(): number;
  toStringHistory(history: any): string;
};

export function useEventHistory(): useEventHistoryType {
  const {query, command} = createService();
  const _state = {
    histories: ref<any[]>([])
  };

  async function fetchAllHistory(): Promise<void> {
    const histories = await query.fetchAllHistory();
    _state.histories.value = histories.map(history => history.toDto());
  }

  async function saveHistory(history: UserEventHistory): Promise<void> {
    await command.save(history);
    await fetchAllHistory();
  }

  function toStringHistory(history: any): string {
    const historyEntity = UserEventHistory.from(history);
    return historyEntity.toString();
  }

  return {
    getEventHistoryCount(): number {
      return _state.histories.value.length;
    },
    histories: _state.histories,
    fetchAllHistory,
    saveHistory,
    toStringHistory
  };

}