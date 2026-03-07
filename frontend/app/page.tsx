'use client';

import React from 'react';
import DashboardCard from './components/DashboardCard';
import SentimentChart from './components/SentimentChart';
import ProjectHealthChart from './components/ProjectHealthChart';
import CriticalMessages from './components/CriticalMessages';
import Sidebar from './components/Sidebar';
import { IconLayoutDashboard, IconUsers, IconBriefcase, IconAlertCircle } from './components/Icons';

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Welcome back, John. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-sm hover:bg-indigo-700 transition-colors shadow-indigo-500/20">
              New Project
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <DashboardCard 
            title="Total Projects" 
            value={12} 
            description="Active projects" 
            icon={<IconBriefcase className="w-5 h-5" />}
          />
          <DashboardCard 
            title="Active Clients" 
            value={8} 
            description="Currently monitored" 
            icon={<IconUsers className="w-5 h-5" />}
          />
          <DashboardCard 
            title="New Action Items" 
            value={5} 
            description="Last 24 hours" 
            trend="up" 
            trendValue="+2"
            icon={<IconAlertCircle className="w-5 h-5" />}
          />
          <DashboardCard 
            title="Negative Sentiment" 
            value={1} 
            description="Critical issues" 
            trend="down" 
            trendValue="-1"
            icon={<IconAlertCircle className="w-5 h-5" />}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <SentimentChart />
          </div>
          <div className="xl:col-span-1">
            <ProjectHealthChart />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <CriticalMessages />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
