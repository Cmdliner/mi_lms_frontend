'use client';

import Link from 'next/link';
import { guardianDummyData } from '@/lib/dummy-data';
import StatsCard from '@/components/dashboard/stats-card';
import { Student, ChartBar, CalendarCheck, CaretRight } from '@phosphor-icons/react';

export default function GuardianDashboard() {
    const data = guardianDummyData;

    return (
        <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                            Welcome, {data.profile.first_name}!
                        </h1>
                        <p className="text-sm md:text-base text-slate-600 mt-1">
                            Monitor your ward's progress
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <Link href="/dashboard/wards" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Total Wards"
                            value={data.wards.length}
                            icon={<Student size={24} weight="duotone" />}
                        />
                    </Link>
                    <Link href="/dashboard/attendance" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Average Attendance"
                            value={`${Math.round(data.wards.reduce((sum, ward) => sum + ward.attendance, 0) / data.wards.length)}%`}
                            icon={<CalendarCheck size={24} weight="duotone" />}
                        />
                    </Link>
                    <Link href="/dashboard/reports" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Overall Performance"
                            value="Good"
                            icon={<ChartBar size={24} weight="duotone" />}
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {data.wards.map((ward, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 md:p-6 border border-slate-200">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">{ward.name}</h2>
                                    <p className="text-xs md:text-sm text-slate-600">{ward.classroom} • {ward.admission_no}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                    <Student size={24} weight="duotone" className="text-teal-600" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                                    <div>
                                        <p className="text-sm text-slate-600">Attendance</p>
                                        <p className="text-lg font-semibold text-slate-900">{ward.attendance}%</p>
                                    </div>
                                    <div className="w-16 h-16">
                                        <svg className="transform -rotate-90" width="64" height="64">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="#e2e8f0"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="#0d9488"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${ward.attendance * 1.76} 176`}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <Link
                                    href={`/dashboard/wards/${ward.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-teal-50/50 transition group cursor-pointer"
                                >
                                    <div>
                                        <p className="text-sm text-slate-600">Overall Grade</p>
                                        <p className="text-2xl font-semibold text-teal-600">{ward.overallGrade}</p>
                                    </div>
                                    <CaretRight size={20} weight="bold" className="text-slate-400 group-hover:text-teal-600 transition" />
                                </Link>

                                <Link
                                    href={`/dashboard/wards/${ward.name.toLowerCase().replace(/\s+/g, '-')}/report`}
                                    className="block w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition text-center"
                                >
                                    View Full Report
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}
