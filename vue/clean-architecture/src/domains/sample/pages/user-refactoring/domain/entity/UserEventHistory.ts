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
      eventId:`${id.toFixed(0)}-event` ,
      eventName:'eventName@@',
      createDate:new Date(),
    })
  }

  toDto(): any {
    return {
      eventId: this.eventId,
      eventName: this.eventName,
      createDate: this.createDate
    }
  }
}