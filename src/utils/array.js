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

export function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function sample(arr, n = 1) {
  const shuffled = shuffle(arr);
  return n === 1 ? shuffled[0] : shuffled.slice(0, n);
}

export function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export function compact(arr) {
  return arr.filter(Boolean);
}

export function groupBy(arr, fn) {
  return arr.reduce((groups, item) => {
    const key = typeof fn === 'function' ? fn(item) : item[fn];
    (groups[key] = groups[key] || []).push(item);
    return groups;
  }, {});
}

export function countBy(arr, fn) {
  return arr.reduce((counts, item) => {
    const key = typeof fn === 'function' ? fn(item) : item[fn];
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

export function sortBy(arr, fn) {
  return [...arr].sort((a, b) => {
    const va = typeof fn === 'function' ? fn(a) : a[fn];
    const vb = typeof fn === 'function' ? fn(b) : b[fn];
    return va < vb ? -1 : va > vb ? 1 : 0;
  });
}

export function partition(arr, fn) {
  const pass = [], fail = [];
  arr.forEach((item) => (fn(item) ? pass : fail).push(item));
  return [pass, fail];
}

export function first(arr, n = 1) {
  return n === 1 ? arr[0] : arr.slice(0, n);
}

