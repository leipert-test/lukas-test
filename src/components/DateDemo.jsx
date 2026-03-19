import { useState } from 'react';
import { formatDate, daysBetween, isLeapYear, isWeekend, getWeekDay, getQuarter, timeAgo, addDays } from '../utils/date.js';

export default function DateDemo() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const d = new Date(date);
  const year = d.getFullYear();

  return (
    <div className="demo-section">
      <h2>Date Utilities</h2>
      <div className="demo-controls">
        <label>
          Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>
      <div className="demo-results">
        <p>Formatted: {formatDate(d, 'YYYY-MM-DD')}</p>
        <p>Day of week: {getWeekDay(d)}</p>
        <p>Quarter: Q{getQuarter(d)}</p>
        <p>Is weekend: {isWeekend(d) ? 'Yes' : 'No'}</p>
        <p>Is leap year ({year}): {isLeapYear(year) ? 'Yes' : 'No'}</p>
        <p>Days until today: {daysBetween(d, new Date())}</p>
        <p>Time ago: {timeAgo(d)}</p>
        <p>+30 days: {formatDate(addDays(d, 30), 'YYYY-MM-DD')}</p>
      </div>
    </div>
  );
}
