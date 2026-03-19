// String utility functions

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());
}

export function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

