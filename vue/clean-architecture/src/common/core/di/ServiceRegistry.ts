const registry = new Map<string, any>();

export const ServiceRegistry = {
  get<T>(name: string): T {
    console.log("registry : ", registry)
    const service = registry.get(name);
    if (!service) {
      throw new Error(`Service "${name}" not registered`);
    }
    return service;
  },
  set<T>(name: string, value: T): void {
    if (this.has(name)) {
      return ;
    }
    registry.set(name, value);
  },
  has(name: string): boolean {
    return registry.has(name);
  },
  // registerAll(): void{
  //   const modules2 = import.meta.glob('./application/service/**/*.ts', { eager: true });
  //   const modules = import.meta.glob('./**/*.ts', { eager: true });
  //   console.log("modules2 : ", modules2);
  //   console.log("modules : ", modules);
  // }
};
