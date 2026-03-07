import React from 'react';
import { IconTrendingUp, IconTrendingDown, IconMinus } from './Icons';

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, description, trend, trendValue, icon }) => {
  const trendConfig = {
    up: { color: 'text-emerald-600 bg-emerald-50', icon: <IconTrendingUp className="w-4 h-4" /> },
    down: { color: 'text-rose-600 bg-rose-50', icon: <IconTrendingDown className="w-4 h-4" /> },
    neutral: { color: 'text-slate-600 bg-slate-50', icon: <IconMinus className="w-4 h-4" /> },
  };

  const currentTrend = trend ? trendConfig[trend] : null;

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          {icon && (
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
              {icon}
            </div>
          )}
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
      </div>
      
      {(description || trend) && (
        <div className="flex items-center text-sm mt-4">
          {trend && currentTrend && (
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full font-medium ${currentTrend.color} mr-2`}>
              {currentTrend.icon}
              {trendValue && <span>{trendValue}</span>}
            </div>
          )}
          {description && <span className="text-slate-500 truncate">{description}</span>}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
