// Math utility functions

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

export function modulo(a, b) {
  return ((a % b) + b) % b;
}

export function power(base, exp) {
  return Math.pow(base, exp);
}

export function sqrt(n) {
  if (n < 0) throw new Error("Cannot sqrt negative number");
  return Math.sqrt(n);
}

export function abs(n) {
  return n < 0 ? -n : n;
}

export function min(...args) {
  return args.reduce((m, v) => (v < m ? v : m), args[0]);
}

export function max(...args) {
  return args.reduce((m, v) => (v > m ? v : m), args[0]);
}

export function clamp(value, lower, upper) {
  return Math.min(Math.max(value, lower), upper);
}

export function lerp(start, end, t) {
  return start + (end - start) * t;
}

export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

export function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

export function average(arr) {
  if (arr.length === 0) throw new Error("Cannot average empty array");
  return arr.reduce((sum, v) => sum + v, 0) / arr.length;
}

export function median(arr) {
  if (arr.length === 0) throw new Error("Cannot find median of empty array");
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function roundTo(n, decimals = 0) {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
}

