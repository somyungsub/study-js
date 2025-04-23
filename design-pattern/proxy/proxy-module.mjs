export function wrap(func, wrapper) {
  return function() {
    const args = [func].concat(Array.prototype.slice.call(arguments));
    return wrapper.apply(this, args);
  }
}