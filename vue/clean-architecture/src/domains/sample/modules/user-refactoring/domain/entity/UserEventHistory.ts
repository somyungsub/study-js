import {ToString} from "../../../../../../common/core/decorator/ToString.ts";

@ToString([
  {'createDate': (th: UserEventHistory) => th.dateToText()}
])
export class UserEventHistory {
  constructor(
    readonly eventId: string,
    private _eventName: string,
    readonly createDate: Date
  ) {
  }

  get eventName(): string {
    return this._eventName;
  }

  static from(dto: {
    eventId: string;
    eventName: string;
    createDate: Date;
  }): UserEventHistory {
    return new UserEventHistory(dto.eventId, dto.eventName, dto.createDate);
  }

  static testValue() {
    const id = Math.random() * 10000;
    return this.from({
      eventId: `${id.toFixed(0)}-event`,
      eventName: 'eventName@@',
      createDate: new Date(),
    })
  }

  toDto(): any {
    return {
      eventId: this.eventId,
      eventName: this.eventName,
      createDate: this.createDate
    }
  }

  private dateToText(): string {
    const d = this.createDate;

    function pad(n: number): string {
      return n < 10 ? '0' + n : String(n);
    }

    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} `
      + `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

}