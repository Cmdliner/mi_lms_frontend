'use client';

import { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import DashboardHeader from './header';
import { CalendarBlank } from '@phosphor-icons/react/dist/ssr';

interface DashboardLayoutProps {
  role: string;
  children: React.ReactNode;
}

export default function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setCurrentDate(formatted);
    };

    updateDate();
    // Update date every minute
    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-10 flex items-center justify-between px-4 md:px-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <CalendarBlank className="w-4 h-4 text-emerald-400" weight="duotone" />
          <span className="text-sm font-medium">{currentDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded">
            ACTIVE
          </span>
          <span className="text-xs text-slate-400 hidden md:inline-block">Learning Management System</span>
        </div>
      </div>

      <Sidebar role={role} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="md:ml-64 mt-26 p-4 md:p-6">
        {children}
      </main>
    </div>
  );
}
