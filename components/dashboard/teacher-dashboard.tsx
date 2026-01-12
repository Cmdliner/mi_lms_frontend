'use client';

import Link from 'next/link';
import { teacherDummyData } from '@/lib/dummy-data';
import StatsCard from '@/components/dashboard/stats-card';
import { Chalkboard, Clock, ListChecks, Users, CaretRight } from '@phosphor-icons/react';

export default function TeacherDashboard() {
    const data = teacherDummyData;

    return (
        <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                        Good morning, {data.profile.first_name}!
                    </h1>
                    <p className="text-sm md:text-base text-slate-600 mt-1">
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <Link href="/dashboard/classes" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Total Classes"
                            value={data.classes.length}
                            icon={<Chalkboard size={24} weight="duotone" />}
                        />
                    </Link>
                    <Link href="/dashboard/students" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Total Students"
                            value={data.classes.reduce((sum, cls) => sum + cls.students, 0)}
                            icon={<Users size={24} weight="duotone" />}
                        />
                    </Link>
                    <Link href="/dashboard/assignments" className="block hover:scale-105 transition-transform">
                        <StatsCard
                            title="Pending Tasks"
                            value={data.pendingTasks.length}
                            icon={<ListChecks size={24} weight="duotone" />}
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-white rounded-lg p-4 md:p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Your Classes
                            </h2>
                            <Link 
                                href="/dashboard/classes"
                                className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                            >
                                View All <CaretRight size={16} weight="bold" />
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {data.classes.map((cls, index) => (
                                <Link
                                    key={index}
                                    href={`/dashboard/classes/${cls.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition group cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition">
                                            <Chalkboard size={20} weight="duotone" className="text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{cls.name}</p>
                                            <p className="text-sm text-slate-600">{cls.subject}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-right">
                                            <p className="font-semibold text-slate-900">{cls.students}</p>
                                            <p className="text-xs text-slate-600">students</p>
                                        </div>
                                        <CaretRight size={18} weight="bold" className="text-slate-400 group-hover:text-teal-600 transition" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div className="bg-white rounded-lg p-4 md:p-6 border border-slate-200">
                            <h2 className="text-lg font-semibold text-slate-900 mb-4">
                                Today's Schedule
                            </h2>
                            <div className="space-y-3">
                                {data.todaySchedule.map((schedule, index) => (
                                    <Link
                                        key={index}
                                        href={`/dashboard/classes/${schedule.class.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            <Clock size={20} weight="duotone" className="text-slate-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-slate-900">{schedule.class}</p>
                                            <p className="text-sm text-slate-600">{schedule.subject}</p>
                                            <p className="text-xs text-slate-500 mt-1">{schedule.time}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-slate-900">
                                    Pending Tasks
                                </h2>
                                <Link 
                                    href="/dashboard/assignments"
                                    className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                                >
                                    View All <CaretRight size={16} weight="bold" />
                                </Link>
                            </div>
                            <div className="space-y-3">
                                {data.pendingTasks.map((task, index) => (
                                    <Link
                                        key={index}
                                        href="/dashboard/assignments"
                                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-teal-50/50 transition cursor-pointer group"
                                    >
                                        <p className="text-sm text-slate-900">{task.task}</p>
                                        <span className="text-xs text-slate-600 bg-white px-2 py-1 rounded group-hover:bg-teal-50">
                                            {task.due}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
