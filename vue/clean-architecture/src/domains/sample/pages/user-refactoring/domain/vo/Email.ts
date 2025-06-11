export class Email {

  constructor(
    readonly host: string,
    readonly domain: string
  ) {
    this.validate();
  }

  static fromDefault(): Email {
    return this.from({host: 'hong2', domain: 'example.com'});
  }

  static from(dto: {
    host: string,
    domain: string
  }): Email {
    return new Email(dto.host, dto.domain);
  }

  fullName() {
    return `${this.host}@${this.domain}`;
  }

  validate(): void {
    if (!this.domain.includes('.')) {
      throw new Error('유효한 이메일 주소여야 합니다.');
    }
  }

}