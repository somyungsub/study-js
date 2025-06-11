export function After(hook: Function) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const result = originalMethod.apply(this, args);
      const beforeValue = hook?.apply(this, args) ?? '';
      return `${result}${beforeValue}`;
    };
  };
}