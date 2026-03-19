import { useState } from 'react';
import MathDemo from './MathDemo.jsx';
import StringDemo from './StringDemo.jsx';
import ArrayDemo from './ArrayDemo.jsx';
import ColorDemo from './ColorDemo.jsx';
import DateDemo from './DateDemo.jsx';

const TABS = [
  { id: 'math', label: 'Math', icon: '{}' },
  { id: 'string', label: 'String', icon: 'Aa' },
  { id: 'array', label: 'Array', icon: '[]' },
  { id: 'color', label: 'Color', icon: '#' },
  { id: 'date', label: 'Date', icon: 'D' },
];

const COMPONENTS = {
  math: MathDemo,
  string: StringDemo,
  array: ArrayDemo,
  color: ColorDemo,
  date: DateDemo,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('math');
  const ActiveComponent = COMPONENTS[activeTab];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>JS Utility Library</h1>
        <p className="dashboard-subtitle">Interactive demos for math, string, array, color, and date utilities</p>
      </header>
      <nav className="dashboard-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>
      <main className="dashboard-content">
        <ActiveComponent />
      </main>
      <footer className="dashboard-footer">
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}
