import {ProviderRegistry} from "@/common/core/registry/ProviderRegistry";

function createProviderDecorator(registry: typeof ProviderRegistry) {
  return function (arg: string | Function): any {
    if (typeof arg === 'string') {
      return (target: Function) => {
        const instance = new (target as any)();
        registry.set(arg, instance);
      };
    }
    registry.set(arg.name, new (arg as any)());
  };
}

export const Service = createProviderDecorator(ProviderRegistry);
export const WebApi = createProviderDecorator(ProviderRegistry);