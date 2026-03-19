import { useState } from 'react';
import { capitalize, camelCase, kebabCase, snakeCase, reverse, isPalindrome, wordCount, slugify } from '../utils/string.js';

export default function StringDemo() {
  const [text, setText] = useState('hello world example');

  return (
    <div className="demo-section">
      <h2>String Utilities</h2>
      <div className="demo-controls">
        <label>
          Text: <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
      <div className="demo-results">
        <p>capitalize: {capitalize(text)}</p>
        <p>camelCase: {camelCase(text)}</p>
        <p>kebabCase: {kebabCase(text)}</p>
        <p>snakeCase: {snakeCase(text)}</p>
        <p>reverse: {reverse(text)}</p>
        <p>isPalindrome: {isPalindrome(text) ? 'Yes' : 'No'}</p>
        <p>wordCount: {wordCount(text)}</p>
        <p>slugify: {slugify(text)}</p>
      </div>
    </div>
  );
}
