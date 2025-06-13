export function Before(hook: Function) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const beforeValue = hook?.apply(this, args) ?? '';
      const result = originalMethod.apply(this, args);
      return `${beforeValue}${result}`;
    };
  };
}