import { useState } from 'react';
import { chunk, unique, shuffle, range, sum, groupBy, sortBy, partition } from '../utils/array.js';

export default function ArrayDemo() {
  const [items] = useState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
  const [shuffled, setShuffled] = useState(items);

  return (
    <div className="demo-section">
      <h2>Array Utilities</h2>
      <div className="demo-results">
        <p>Original: [{items.join(', ')}]</p>
        <p>unique: [{unique(items).join(', ')}]</p>
        <p>sum: {sum(items)}</p>
        <p>chunk(3): {JSON.stringify(chunk(items, 3))}</p>
        <p>range(0, 10, 2): [{range(0, 10, 2).join(', ')}]</p>
        <p>
          shuffled: [{shuffled.join(', ')}]
          <button onClick={() => setShuffled(shuffle(items))}>Shuffle</button>
        </p>
      </div>
    </div>
  );
}
