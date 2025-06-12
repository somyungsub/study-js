import {GENDER, type Gender, USER_TYPES, type UserType} from "../constant/userTypes.ts";
import {Email} from "../vo/Email.ts";
import {ToString} from "../../../../../../common/core/decorator/ToString.ts";

@ToString([
  {'_email': (th: User) => th.email.fullName()}
])
// @ToString()
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
    if (!this.name || this.name.length === 0) {
      throw new Error('이름은 필수입니다.');
    }
    if (!GENDER.includes(this.gender)) {
      throw new Error('성별은 M 또는 F여야 합니다.');
    }
    if (!USER_TYPES.includes(this.userType)) {
      throw new Error(`userType은 다음 중 하나여야 합니다: ${USER_TYPES.join(', ')}`);
    }
  }

  // toString(): string {
  //   return `${this.id} : [${this.name} : ${this.email.fullName()} : ${this.gender} : ${this.userType}]`;
  // }
}


// import type {Gender, UserType} from "@/domains/sample/pages/user/domain/constant/userTypes.ts";
//
// export class User {
//     constructor(
//         readonly id: number,
//         private _name: string,
//         private _email: string,
//         private _gender: Gender,
//         private _userType: UserType
//     ) {}
//
//     get name() {
//         return this._name;
//     }
//
//     get email() {
//         return this._email;
//     }
//
//     get gender() {
//         return this._gender;
//     }
//
//     get userType() {
//         return this._userType;
//     }
//
//     static fromDto(dto: {
//         id: number;
//         name: string;
//         email: string;
//         gender: Gender;
//         userType: UserType;
//     }): User {
//         return new User(dto.id, dto.name, dto.email, dto.gender, dto.userType);
//     }
//
//     toDto(): any {
//         return {
//             id: this.id,
//             name: this.name,
//             email: this.email,
//             gender: this.gender,
//             userType: this.userType
//         };
//     }
//
//     // validate(): void {
//     //     if (!this.name || this.name.length === 0) {
//     //         throw new Error('이름은 필수입니다.');
//     //     }
//     //     if (!this.email.includes('@')) {
//     //         throw new Error('유효한 이메일 주소여야 합니다.');
//     //     }
//     //     if (!GENDER.includes(this.gender)) {
//     //         throw new Error('성별은 M 또는 F여야 합니다.');
//     //     }
//     //     if (!USER_TYPES.includes(this.userType)) {
//     //         throw new Error(`userType은 다음 중 하나여야 합니다: ${USER_TYPES.join(', ')}`);
//     //     }
//     // }
// }
