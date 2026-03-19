// String utility functions

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());
}

