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

