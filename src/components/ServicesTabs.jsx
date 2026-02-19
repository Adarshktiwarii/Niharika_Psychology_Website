import { useState } from 'react';

const tabs = [
  {
    id: 'individual',
    label: 'Individual Therapy',
    icon: '🧠',
    content: {
      title: 'Individual Therapy',
      description: 'Using approaches like CBT, DBT, Mindfulness-Based Therapy, and ACT to help you manage anxiety, depression, stress, emotional regulation, and personal growth.',
      items: ['Cognitive Behavioral Therapy (CBT)', 'Dialectical Behavior Therapy (DBT)', 'Mindfulness-Based Therapy', 'Acceptance & Commitment Therapy (ACT)', 'Anxiety & Depression', 'Stress & Emotional Regulation', 'Personal Growth']
    }
  },
  {
    id: 'group',
    label: 'Group Therapy',
    icon: '👥',
    content: {
      title: 'Group Therapy',
      description: 'Facilitated sessions where individuals can share experiences, learn coping strategies, and gain support in a safe and guided environment.',
      items: ['Shared Experience Sessions', 'Coping Strategy Workshops', 'Guided Support Groups', 'Peer Learning & Growth']
    }
  },
  {
    id: 'couple',
    label: 'Couple Therapy',
    icon: '💑',
    content: {
      title: 'Couple Therapy',
      description: 'Helping partners improve communication, resolve conflicts, strengthen relationships, and build mutual understanding.',
      items: ['Communication Improvement', 'Conflict Resolution', 'Relationship Strengthening', 'Building Mutual Understanding']
    }
  },
  {
    id: 'assessment',
    label: 'Psychological Assessment',
    icon: '📋',
    content: {
      title: 'Psychological Assessment',
      description: 'Comprehensive evaluation of cognitive, emotional, and behavioral functioning to guide diagnosis, treatment planning, and personal development.',
      items: ['Cognitive Functioning Evaluation', 'Emotional Assessment', 'Behavioral Analysis', 'Diagnosis & Treatment Planning', 'Personal Development Guidance']
    }
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-gray-200 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-base font-serif transition-all duration-300 border-b-2 whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-brew-brown text-brew-brown'
                : 'border-transparent text-gray-500 hover:text-brew-brown'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm min-h-[340px] transition-all duration-500">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="animate-fade-in">
              <h3 className="text-3xl font-serif text-brew-brown mb-4">{tab.content.title}</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-3xl">{tab.content.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tab.content.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-brew-light text-lg">✦</span>
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
