import React from 'react';
import { IconAlertCircle } from './Icons';

interface CriticalMessage {
  id: number;
  project: string;
  message: string;
  sender: string;
  time: string;
  type: 'negative' | 'priority' | 'presales';
  tags: string[];
}

const messages: CriticalMessage[] = [
  {
    id: 1,
    project: 'Project Alpha',
    message: 'Client needs urgent clarification on feature X.',
    sender: 'John Doe (Client)',
    time: '2 hours ago',
    type: 'negative',
    tags: ['Action Item', 'Negative Sentiment']
  },
  {
    id: 2,
    project: 'Project Beta',
    message: 'Deadline for phase 2 is tomorrow, still awaiting asset Y.',
    sender: 'Jane Smith (Team Lead)',
    time: '5 hours ago',
    type: 'priority',
    tags: ['Deadline', 'High Priority']
  },
  {
    id: 3,
    project: 'Project Gamma',
    message: 'Customer Decision Maker is asking for an update on the budget proposal.',
    sender: 'Alice Brown (Sales)',
    time: '1 day ago',
    type: 'presales',
    tags: ['Customer Decision Maker', 'Presales']
  }
];

const CriticalMessages: React.FC = () => {
  const getBadgeStyle = (tag: string) => {
    if (tag.includes('Negative') || tag.includes('Critical')) return 'bg-rose-50 text-rose-700 border-rose-200';
    if (tag.includes('Priority') || tag.includes('Deadline')) return 'bg-amber-50 text-amber-700 border-amber-200';
    if (tag.includes('Presales') || tag.includes('Decision')) return 'bg-violet-50 text-violet-700 border-violet-200';
    return 'bg-slate-50 text-slate-700 border-slate-200';
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <IconAlertCircle className="w-5 h-5 text-rose-500" />
            Recent Critical Messages
          </h3>
          <p className="text-sm text-slate-500 mt-1">Urgent items requiring attention</p>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">View All</button>
      </div>
      
      <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">{msg.project}</span>
                <span className="text-xs text-slate-500">{msg.time}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {msg.tags.map(tag => (
                  <span key={tag} className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${getBadgeStyle(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-slate-700 text-sm mb-4 leading-relaxed">{msg.message}</p>
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-200/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 ring-2 ring-white">
                  {msg.sender.charAt(0)}
                </div>
                <span className="text-xs font-medium text-slate-600">{msg.sender}</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Take Action →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalMessages;
