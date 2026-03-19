// Array utility functions

export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function flatten(arr, depth = Infinity) {
  return depth > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), [])
    : arr.slice();
}

export function unique(arr) {
  return [...new Set(arr)];
}

export function intersection(a, b) {
  const setB = new Set(b);
  return a.filter((x) => setB.has(x));
}

export function difference(a, b) {
  const setB = new Set(b);
  return a.filter((x) => !setB.has(x));
}

export function union(a, b) {
  return [...new Set([...a, ...b])];
}

export function zip(a, b) {
  const len = Math.min(a.length, b.length);
  return Array.from({ length: len }, (_, i) => [a[i], b[i]]);
}

