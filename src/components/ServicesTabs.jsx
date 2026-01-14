---
import { useState } from 'react';

const tabs = [
  {
    id: 'therapy',
    label: 'Therapy',
    content: {
      title: 'Individual & Couples Therapy',
      items: ['Anxiety & Depression', 'Relationship Issues', 'Trauma Healing', 'Self-Esteem & Growth']
    }
  },
  {
    id: 'community',
    label: 'Community',
    content: {
      title: 'Group Therapy & Workshops',
      items: ['Support Groups', 'Skill-Building Workshops', 'Mindfulness Sessions', 'Art Therapy']
    }
  },
  {
    id: 'assessments',
    label: 'Assessments',
    content: {
      title: 'Psychological Assessments',
      items: ['IQ Testing', 'Personality Assessments', 'Projective Tests', 'Diagnostic Evaluation']
    }
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('therapy');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-center border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 text-lg font-serif transition-all duration-300 border-b-2 ${
              activeTab === tab.id
                ? 'border-soul-indigo text-soul-indigo'
                : 'border-transparent text-gray-500 hover:text-soul-indigo'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-sm shadow-sm min-h-[300px] transition-all duration-500">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="animate-fade-in">
              <h3 className="text-3xl font-serif text-soul-indigo mb-6">{tab.content.title}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tab.content.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-soul-peach text-xl">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
