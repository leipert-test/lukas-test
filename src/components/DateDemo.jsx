import { useState } from 'react';
import {
  formatDate, daysBetween, isLeapYear, daysInMonth,
  isWeekend, getWeekDay, getQuarter, timeAgo,
  addDays, subtractDays, isToday, isFuture, isPast,
  startOfDay, endOfDay,
} from '../utils/date.js';

export default function DateDemo() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [date2, setDate2] = useState(
    new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]
  );

  const d = new Date(date);
  const d2 = new Date(date2);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;

  return (
    <div className="demo-section">
      <h2>Date Utilities</h2>
      <div className="demo-controls">
        <label>
          Date 1: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Date 2: <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
        </label>
      </div>
      <div className="demo-results">
        <h3>Date Info</h3>
        <p>Formatted: {formatDate(d, 'YYYY-MM-DD')}</p>
        <p>Day of week: {getWeekDay(d)}</p>
        <p>Quarter: Q{getQuarter(d)}</p>
        <p>Days in month: {daysInMonth(year, month)}</p>
        <p>Is weekend: {isWeekend(d) ? 'Yes' : 'No'}</p>
        <p>Is leap year ({year}): {isLeapYear(year) ? 'Yes' : 'No'}</p>
      </div>
      <div className="demo-results">
        <h3>Relative</h3>
        <p>Is today: {isToday(d) ? 'Yes' : 'No'}</p>
        <p>Is future: {isFuture(d) ? 'Yes' : 'No'}</p>
        <p>Is past: {isPast(d) ? 'Yes' : 'No'}</p>
        <p>Time ago: {timeAgo(d)}</p>
      </div>
      <div className="demo-results">
        <h3>Calculations</h3>
        <p>Days between: {daysBetween(d, d2)}</p>
        <p>+30 days: {formatDate(addDays(d, 30), 'YYYY-MM-DD')}</p>
        <p>-30 days: {formatDate(subtractDays(d, 30), 'YYYY-MM-DD')}</p>
        <p>Start of day: {startOfDay(d).toISOString()}</p>
        <p>End of day: {endOfDay(d).toISOString()}</p>
      </div>
    </div>
  );
}
