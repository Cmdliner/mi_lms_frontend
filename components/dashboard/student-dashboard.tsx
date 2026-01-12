'use client';

import Link from 'next/link';
import { studentDummyData } from '@/lib/dummy-data';
import StatsCard from '@/components/dashboard/stats-card';
import { Book, Calendar, ChartLine, CaretRight, CalendarBlank } from '@phosphor-icons/react';

export default function StudentDashboard() {
    const data = studentDummyData;

    return (
        <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                        Welcome back, {data.profile.first_name}!
                    </h1>
                    <p className="text-sm md:text-base text-slate-600 mt-1">
                        {data.profile.classroom} • {data.profile.admission_no}
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <Link href="/dashboard/attendance" className="block hover:scale-105 transition-transform">
                    <StatsCard
                        title="Attendance Rate"
                        value={`${data.attendance.percentage}%`}
                        icon={<Calendar size={24} weight="duotone" />}
                        trend="+2% from last month"
                    />
                </Link>
                <Link href="/dashboard/subjects" className="block hover:scale-105 transition-transform">
                    <StatsCard
                        title="Active Subjects"
                        value={data.subjects.length}
                        icon={<Book size={24} weight="duotone" />}
                    />
                </Link>
                <Link href="/dashboard/results" className="block hover:scale-105 transition-transform">
                    <StatsCard
                        title="Average Grade"
                        value="B+"
                        icon={<ChartLine size={24} weight="duotone" />}
                    />
                </Link>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Subjects Card */}
                <div className="bg-white rounded-lg p-4 md:p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Your Subjects
                        </h2>
                        <Link 
                            href="/dashboard/subjects"
                            className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                        >
                            View All <CaretRight size={16} weight="bold" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {data.subjects.map((subject, index) => (
                            <Link
                                key={index}
                                href={`/dashboard/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition group cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition">
                                        <Book size={20} weight="duotone" className="text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">{subject.name}</p>
                                        <p className="text-sm text-slate-600">{subject.teacher}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-semibold text-teal-600">
                                        {subject.grade}
                                    </span>
                                    <CaretRight size={18} weight="bold" className="text-slate-400 group-hover:text-teal-600 transition" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 md:space-y-6">
                    {/* Recent Results */}
                    <div className="bg-white rounded-lg p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Recent Results
                            </h2>
                            <Link 
                                href="/dashboard/results"
                                className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                            >
                                View All <CaretRight size={16} weight="bold" />
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {data.recentResults.map((result, index) => (
                                <Link
                                    key={index}
                                    href={`/dashboard/results/${result.subject.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition cursor-pointer"
                                >
                                    <div>
                                        <p className="font-medium text-slate-900">{result.subject}</p>
                                        <p className="text-sm text-slate-600">{result.term}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-slate-900">{result.score}%</p>
                                        <p className="text-sm text-teal-600">{result.grade}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white rounded-lg p-6 border border-slate-200">
                        <h2 className="text-lg font-semibold text-slate-900 mb-4">
                            Upcoming Events
                        </h2>
                        <div className="space-y-3">
                            {data.upcomingEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition cursor-pointer"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                        <CalendarBlank size={20} weight="duotone" className="text-slate-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-900">{event.title}</p>
                                        <p className="text-sm text-slate-600">
                                            {new Date(event.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
