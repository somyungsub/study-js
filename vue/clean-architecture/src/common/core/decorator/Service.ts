import {ServiceRegistry} from "../di/ServiceRegistry.ts";

// export function Service(name: string) {
//   return function (target: any) {
//     const instance = new target();
//     ServiceRegistry.set(name, instance);
//   };
// }

export function Service(name: string): ClassDecorator;
export function Service(target: Function): void;
export function Service(arg: string | Function): any {
  if (typeof arg === 'string') {
    return function (target: Function) {
      const instance = new (target as any)();
      ServiceRegistry.set(arg, instance);
    };
  }

  const target = arg;
  const name = target.name;
  const instance = new (target as any)();
  ServiceRegistry.set(name, instance);
}