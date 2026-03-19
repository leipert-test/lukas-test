import { useState } from 'react';
import { add, subtract, multiply, divide, factorial, fibonacci, isPrime } from '../utils/math.js';

export default function MathDemo() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);

  return (
    <div className="demo-section">
      <h2>Math Utilities</h2>
      <div className="demo-controls">
        <label>
          A: <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
        <label>
          B: <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <div className="demo-results">
        <p>add({a}, {b}) = {add(a, b)}</p>
        <p>subtract({a}, {b}) = {subtract(a, b)}</p>
        <p>multiply({a}, {b}) = {multiply(a, b)}</p>
        <p>divide({a}, {b}) = {b !== 0 ? divide(a, b) : 'N/A'}</p>
      </div>
    </div>
  );
}
