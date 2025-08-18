const registry = new Map<string, any>();

export const ProviderRegistry = Object.freeze({
  get<T>(name: string): T {
    if (!this.has(name)) {
      throw new Error(`Service "${name}" not registered`);
    }
    return registry.get(name);
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
});
