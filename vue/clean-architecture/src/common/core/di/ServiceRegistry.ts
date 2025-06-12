const registry = new Map<string, any>();

export const ServiceRegistry = {
  get<T>(name: string): T {
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
};
