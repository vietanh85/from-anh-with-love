'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProjectHealthData {
  projectName: string;
  red: number;
  yellow: number;
  green: number;
}

const dummyProjectHealthData: ProjectHealthData[] = [
  { projectName: 'Alpha', red: 2, yellow: 1, green: 7 },
  { projectName: 'Beta', red: 0, yellow: 3, green: 5 },
  { projectName: 'Gamma', red: 1, yellow: 2, green: 6 },
  { projectName: 'Delta', red: 3, yellow: 0, green: 4 },
  { projectName: 'Epsilon', red: 0, yellow: 0, green: 8 },
];

const ProjectHealthChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-96 flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Project Health Overview</h3>
        <p className="text-sm text-slate-500">Breakdown of critical, warning, and healthy projects</p>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={dummyProjectHealthData} 
            layout="vertical"
            margin={{ top: 0, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="projectName" 
              type="category" 
              tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
              width={80}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar 
              dataKey="green" 
              stackId="a" 
              fill="#10b981" 
              name="Healthy" 
              radius={[0, 4, 4, 0]} 
              barSize={20}
            />
            <Bar 
              dataKey="yellow" 
              stackId="a" 
              fill="#fbbf24" 
              name="Warning" 
              barSize={20}
            />
            <Bar 
              dataKey="red" 
              stackId="a" 
              fill="#f43f5e" 
              name="Critical" 
              radius={[4, 0, 0, 4]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-sm text-slate-600">Healthy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span className="text-sm text-slate-600">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <span className="text-sm text-slate-600">Critical</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHealthChart;
