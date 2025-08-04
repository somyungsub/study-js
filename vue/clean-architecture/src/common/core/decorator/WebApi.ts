import {ServiceRegistry} from "../registry/ServiceRegistry.ts";

export function WebApi(name: string): ClassDecorator;
export function WebApi(target: Function): void;
export function WebApi(arg: string | Function): any {
  if (typeof arg === 'string') {
    return (target: Function) => {
      const instance = new (target as any)();
      ServiceRegistry.set(arg, instance);
    };
  }

  ServiceRegistry.set(arg.name, new (arg as any)());
}