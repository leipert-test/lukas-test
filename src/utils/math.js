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

