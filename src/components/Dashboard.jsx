import { useState } from 'react';
import MathDemo from './MathDemo.jsx';
import StringDemo from './StringDemo.jsx';
import ArrayDemo from './ArrayDemo.jsx';
import ColorDemo from './ColorDemo.jsx';
import DateDemo from './DateDemo.jsx';

const TABS = [
  { id: 'math', label: 'Math', component: MathDemo },
  { id: 'string', label: 'String', component: StringDemo },
  { id: 'array', label: 'Array', component: ArrayDemo },
  { id: 'color', label: 'Color', component: ColorDemo },
  { id: 'date', label: 'Date', component: DateDemo },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('math');
  const ActiveComponent = TABS.find((t) => t.id === activeTab)?.component;

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main className="dashboard-content">
        {ActiveComponent && <ActiveComponent />}
      </main>
    </div>
  );
}
