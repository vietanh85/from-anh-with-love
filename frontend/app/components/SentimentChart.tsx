'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SentimentData {
  date: string;
  positive: number;
  negative: number;
  neutral: number;
}

const dummySentimentData: SentimentData[] = [
  { date: '02-26', positive: 0.7, negative: 0.1, neutral: 0.2 },
  { date: '02-27', positive: 0.6, negative: 0.2, neutral: 0.2 },
  { date: '02-28', positive: 0.75, negative: 0.15, neutral: 0.1 },
  { date: '02-29', positive: 0.65, negative: 0.2, neutral: 0.15 },
  { date: '03-01', positive: 0.8, negative: 0.1, neutral: 0.1 },
  { date: '03-02', positive: 0.7, negative: 0.1, neutral: 0.2 },
  { date: '03-03', positive: 0.6, negative: 0.3, neutral: 0.1 },
];

const SentimentChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-96 flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Client Sentiment Trend</h3>
        <p className="text-sm text-slate-500">Daily sentiment analysis over the last 7 days</p>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dummySentimentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="positive" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPositive)" 
              name="Positive" 
            />
            <Area 
              type="monotone" 
              dataKey="negative" 
              stroke="#f43f5e" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorNegative)" 
              name="Negative" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-sm text-slate-600">Positive</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <span className="text-sm text-slate-600">Negative</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;
