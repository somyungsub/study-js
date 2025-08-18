// import {ProviderRegistry} from "../registry/ProviderRegistry.ts";
//
// export function Service(name: string): ClassDecorator;
// export function Service(target: Function): void;
// export function Service(arg: string | Function): any {
//   if (typeof arg === 'string') {
//     return (target: Function) => {
//       const instance = new (target as any)();
//       ProviderRegistry.set(arg, instance);
//     };
//   }
//
//   ProviderRegistry.set(arg.name, new (arg as any)());
// }