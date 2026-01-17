'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/use-auth';
import {
  Bell,
  CaretDown,
  List,
  MagnifyingGlass,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const router = useRouter();
  const { clearAuth } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    clearAuth();
    router.push('/login');
  };

  return (
    <header className="fixed top-10 left-0 md:left-64 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 z-10">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <List size={24} weight="bold" className="text-slate-700" />
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <MagnifyingGlass
            size={20}
            weight="duotone"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hidden sm:block"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:pl-10 pl-3 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={22} weight="duotone" className="text-slate-700" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 pl-2 md:pl-3 pr-1 md:pr-2 py-1.5 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs">JD</span>
            </div>
            <CaretDown
              size={16}
              weight="bold"
              className={`text-slate-600 transition-transform hidden sm:block ${
                showUserMenu ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowUserMenu(false)}
              ></div>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg border border-slate-200 z-20">
                <div className="p-3 border-b border-slate-200">
                  <p className="text-sm font-medium text-slate-900">John Doe</p>
                  <p className="text-xs text-slate-500">john.doe@example.com</p>
                </div>
                <div className="p-1.5">
                  <button
                    onClick={() => router.push('/dashboard/profile')}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    <UserCircle size={18} weight="duotone" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <SignOut size={18} weight="duotone" />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
