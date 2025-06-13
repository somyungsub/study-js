export function After(hook: Function) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      const afterValue = hook?.apply(this, args) ?? '';
      return `${result}${afterValue}`;
    };
  };
}