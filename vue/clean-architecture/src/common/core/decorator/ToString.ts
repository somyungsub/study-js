type ToStringField = { [key: string]: (instance: any) => string };

export function ToString(target: Function): void;
export function ToString(transFields: ToStringField[]): ClassDecorator;
export function ToString(arg?: ToStringField[] | Function): ClassDecorator {
  if (typeof arg === 'function') {
    // @ToString 사용 시
    attachToString(arg, []);
    return arg as ClassDecorator;
  }

  // @ToString([{...}]) 사용 시
  return (constructor: Function) => {
    attachToString(constructor, arg ?? []);
  };
}

function attachToString(constructor: Function, transFields: ToStringField[]) {
  constructor.prototype.toString = function () {
    const keys = Object.keys(this);
    const fieldStrings = keys.map(field => {
      const transformer = transFields.find(map => field in map);
      if (transformer) {
        return `${field}=${transformer[field](this)}`;
      }
      return `${field}=${this[field]}`;
    });

    return `${constructor.name}(${fieldStrings.join(', ')})`;
  };
}