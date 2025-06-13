import {GENDER, type Gender, USER_TYPES, type UserType} from "../constant/UserTypes.ts";
import {Email} from "../vo/Email.ts";
import {ToString} from "../../../../../../common/core/decorator/ToString.ts";

@ToString([
  {'_email': (th: User) => th.email.fullName()}
])
export class User {
  constructor(
    readonly id: number,
    private _name: string,
    private _email: Email,
    private _gender: Gender,
    private _userType: UserType
  ) {
    this.validate();
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  get userType() {
    return this._userType;
  }

  static from(dto: {
    id: number;
    name: string;
    email: Email;
    gender: Gender;
    userType: UserType;
  }): User {
    return new User(dto.id, dto.name, dto.email, dto.gender, dto.userType);
  }

  static testValue() {
    const userId = (Math.random() * 30).toFixed(0);
    return User.from({
      id:Number(userId),
      name:`ss리팩토링-${userId}`,
      email: Email.fromDefault(),
      gender:'M',
      userType:'GENERAL'
    })
  }

  toDto() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      userType: this.userType
    };
  }

  validate(): void {
    const ensure = (condition: boolean, message: string) => {
      if (condition) {
        alert(message);
        throw new Error(message);
      }
    };

    ensure(
      !this.name || this.name.length === 0,
      '이름은 필수입니다.'
    );

    ensure(
      !GENDER.includes(this.gender),
      [
        `gender 입력값: ${this.gender}`,
        `gender는 다음 중 하나여야 합니다: ${GENDER}`
      ].join('\n')
    );

    ensure(
      !USER_TYPES.includes(this.userType),
      [
        `userType 입력값: ${this.userType}`,
        `userType은 다음 중 하나여야 합니다: ${USER_TYPES}`
      ].join('\n')
    );
  }
}