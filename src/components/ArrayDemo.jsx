import { useState } from 'react';
import {
  chunk, unique, shuffle, range, sum, product,
  groupBy, sortBy, partition, intersection, difference, union, first, last,
} from '../utils/array.js';

export default function ArrayDemo() {
  const [items] = useState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
  const [setA] = useState([1, 2, 3, 4, 5]);
  const [setB] = useState([3, 4, 5, 6, 7]);
  const [shuffled, setShuffled] = useState(items);

  const [evens, odds] = partition(items, (n) => n % 2 === 0);

  return (
    <div className="demo-section">
      <h2>Array Utilities</h2>
      <div className="demo-results">
        <h3>Transformations</h3>
        <p>Original: [{items.join(', ')}]</p>
        <p>unique: [{unique(items).join(', ')}]</p>
        <p>sorted: [{sortBy(items, (x) => x).join(', ')}]</p>
        <p>chunk(3): {JSON.stringify(chunk(items, 3))}</p>
        <p>first(3): [{first(items, 3).join(', ')}]</p>
        <p>last(3): [{last(items, 3).join(', ')}]</p>
      </div>
      <div className="demo-results">
        <h3>Aggregation</h3>
        <p>sum: {sum(items)}</p>
        <p>product of unique: {product(unique(items))}</p>
        <p>evens: [{evens.join(', ')}]</p>
        <p>odds: [{odds.join(', ')}]</p>
      </div>
      <div className="demo-results">
        <h3>Set Operations</h3>
        <p>A: [{setA.join(', ')}]</p>
        <p>B: [{setB.join(', ')}]</p>
        <p>intersection: [{intersection(setA, setB).join(', ')}]</p>
        <p>difference: [{difference(setA, setB).join(', ')}]</p>
        <p>union: [{union(setA, setB).join(', ')}]</p>
      </div>
      <div className="demo-results">
        <h3>Random</h3>
        <p>range(0, 10, 2): [{range(0, 10, 2).join(', ')}]</p>
        <p>
          shuffled: [{shuffled.join(', ')}]
          <button onClick={() => setShuffled(shuffle(items))}>Shuffle</button>
        </p>
      </div>
    </div>
  );
}
