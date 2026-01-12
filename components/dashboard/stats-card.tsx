'use client';

import { Book, Calendar, ChartLine, ClipboardText } from '@phosphor-icons/react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    trend?: string;
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
    return (
        <div className="bg-white rounded-lg p-4 md:p-6 border border-slate-200 hover:border-teal-300 hover:bg-teal-50/20 transition-all cursor-pointer group">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs md:text-sm text-slate-600 mb-1">{title}</p>
                    <p className="text-xl md:text-2xl font-semibold text-slate-900">{value}</p>
                    {trend && (
                        <p className="text-xs text-teal-600 mt-1 font-medium">{trend}</p>
                    )}
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
                    {icon}
                </div>
            </div>
        </div>
    );
}
