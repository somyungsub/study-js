// export function ToString(fields: string[]) {
//   return function (constructor: Function) {
//     constructor.prototype.toString = function () {
//       const fieldStrings = fields.map(
//         key => `${key}=${this[key]}`
//       );
//       return `${constructor.name}(${fieldStrings.join(', ')})`;
//     };
//   };
// }

// 2.... 같이 분석
// type ToStringDecorator = (target: Function) => void;
//
// export function ToString(): ToStringDecorator;
// export function ToString(fields: string[]): ToStringDecorator;
// export function ToString(fields?: string[]): ToStringDecorator {
//   return function (constructor: Function) {
//     constructor.prototype.toString = function () {
//       const keys = fields ?? Object.keys(this);
//       const fieldStrings = keys.map(
//         key => `${key}=${this[key]}`
//       );
//       return `${constructor.name}(${fieldStrings.join(', ')})`;
//     };
//   };
// }
//
// type ToStringDecorator = (target: Function) => void;
//
// export function ToString(): ToStringDecorator;
// export function ToString(fields: string[]): ToStringDecorator;
// export function ToString(fields?: string[]): ToStringDecorator {
//   return function (constructor: Function) {
//     constructor.prototype.toString = function () {
//       const keys = fields ?? Object.keys(this);
//       const fieldStrings = keys.map(
//         key => `${key}=${this[key]}`
//       );
//       return `${constructor.name}(${fieldStrings.join(', ')})`;
//     };
//   };
// }


// type ToStringField = string | [string] | [string, string];

// export function ToString(fields?: ToStringField[]) {
//   return function (constructor: Function) {
//     constructor.prototype.toString = function () {
//       const keys = fields ?? Object.keys(this);
//
//       const fieldStrings = (keys as ToStringField[]).map(field => {
//         if (typeof field === 'string') {
//           return `${field}=${this[field]}`;
//         }
//
//         if (field.length === 1) {
//           const [key] = field;
//           return `${key}=${this[key]}`;
//         }
//
//         const [fieldName, propertyOrMethod] = field;
//         const target = this[fieldName];
//
//         try {
//           const value = target?.[propertyOrMethod];
//           const result = typeof value === 'function' ? value.call(target) : value;
//           return `${fieldName}.${propertyOrMethod}=${result}`;
//         } catch (e) {
//           return `${fieldName}.${propertyOrMethod}=<error>`;
//         }
//       });
//
//       return `${constructor.name}(${fieldStrings.join(', ')})`;
//     };
//   };
// }


/// 최종
type ToStringField = [{string: Functoin}];

export function ToString(transFields?: ToStringField[]) {
  return function (constructor: Function) {
    constructor.prototype.toString = function () {
      const keys = Object.keys(this);

      const fieldStrings = keys?.map(field => {
        const find = transFields?.find(fi => Object.keys(fi).includes(field));
        if (find) {
          return `${field}=${find[field](this)}`;
        }
        return `${field}=${this[field]}`;
      });

      return `${constructor.name}(${fieldStrings.join(', ')})`;
    };
  };
}