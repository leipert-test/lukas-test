import { useState } from 'react';
import {
  capitalize, camelCase, kebabCase, snakeCase, reverse,
  isPalindrome, wordCount, slugify, truncate, escapeHtml, isEmail, wrap,
} from '../utils/string.js';

export default function StringDemo() {
  const [text, setText] = useState('hello world example');
  const [email, setEmail] = useState('user@example.com');

  return (
    <div className="demo-section">
      <h2>String Utilities</h2>
      <div className="demo-controls">
        <label>
          Text: <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div className="demo-results">
        <h3>Case Conversion</h3>
        <p>capitalize: {capitalize(text)}</p>
        <p>camelCase: {camelCase(text)}</p>
        <p>kebabCase: {kebabCase(text)}</p>
        <p>snakeCase: {snakeCase(text)}</p>
      </div>
      <div className="demo-results">
        <h3>Transformations</h3>
        <p>reverse: {reverse(text)}</p>
        <p>slugify: {slugify(text)}</p>
        <p>truncate(10): {truncate(text, 10)}</p>
        <p>wrap with *: {wrap(text, '*')}</p>
        <p>escapeHtml: {escapeHtml('<b>' + text + '</b>')}</p>
      </div>
      <div className="demo-results">
        <h3>Analysis</h3>
        <p>isPalindrome: {isPalindrome(text) ? 'Yes' : 'No'}</p>
        <p>wordCount: {wordCount(text)}</p>
        <p>isEmail(&quot;{email}&quot;): {isEmail(email) ? 'Valid' : 'Invalid'}</p>
      </div>
    </div>
  );
}
