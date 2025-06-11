export function Around(hooks: { before?: Function; after?: Function }) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const beforeValue = hooks?.before?.(...args) ?? '';
      const result = originalMethod.apply(this, args);
      const afterValue = hooks?.after?.(...args) ?? '';
      return `${beforeValue}${result}${afterValue}`;
    };
  };
}