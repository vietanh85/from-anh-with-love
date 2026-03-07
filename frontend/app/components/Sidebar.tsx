import React from 'react';
import { IconLayoutDashboard, IconUsers, IconBriefcase, IconAlertCircle } from './Icons';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 hidden lg:block fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
          V
        </div>
        <h1 className="text-xl font-bold tracking-tight">Vibeflow</h1>
      </div>

      <nav className="space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium shadow-sm transition-all hover:bg-white/20">
          <IconLayoutDashboard className="w-5 h-5 text-indigo-300" />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
          <IconBriefcase className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
          Projects
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
          <IconUsers className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
          Clients
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
          <IconAlertCircle className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
          Alerts
          <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
        </a>
      </nav>

      <div className="mt-10 pt-6 border-t border-slate-800">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4">Team</h3>
        <div className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-slate-500">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
