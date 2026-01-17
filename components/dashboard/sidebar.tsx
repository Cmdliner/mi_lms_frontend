'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavigationByRole, NavLink } from '@/lib/navigation-data';
import { GraduationCap, X } from '@phosphor-icons/react/dist/ssr';

interface SidebarProps {
  role: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ role, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const navigation = getNavigationByRole(role);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-10 h-[calc(100vh-2.5rem)] w-64 bg-black border-r border-slate-800 flex flex-col z-50 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo/Brand */}
        <div className="px-6 py-5 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <GraduationCap weight="duotone" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MI LMS</h1>
                <p className="text-xs text-slate-400 capitalize">{role} Portal</p>
              </div>
            </Link>
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="md:hidden p-2 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <X size={20} weight="bold" className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigation.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                  ${
                    isActive
                      ? 'bg-emerald-500 text-white'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }
                `}
              >
                <Icon
                  weight="duotone"
                  size={22}
                  className={isActive ? 'text-white' : 'text-emerald-400'}
                />
                <span className="font-medium text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="px-6 py-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-slate-400 capitalize">{role}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
