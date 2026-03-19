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

export function snakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

export function truncate(str, length, suffix = '...') {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

export function padStart(str, length, char = ' ') {
  while (str.length < length) str = char + str;
  return str;
}

export function padEnd(str, length, char = ' ') {
  while (str.length < length) str = str + char;
  return str;
}

export function reverse(str) {
  return [...str].reverse().join('');
}

export function countOccurrences(str, substr) {
  let count = 0, pos = 0;
  while ((pos = str.indexOf(substr, pos)) !== -1) {
    count++;
    pos += substr.length;
  }
  return count;
}

