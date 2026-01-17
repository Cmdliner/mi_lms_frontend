'use client';

import { Card } from '@/components/ui/card';
import { mockSubjects } from '@/lib/mock-data/subjects';
import { mockAttendanceSummary } from '@/lib/mock-data/attendance';
import { mockResult } from '@/lib/mock-data/results';
import { AssignmentStatus, mockAssignments } from '@/lib/mock-data/assignments';
import { mockTimetable } from '@/lib/mock-data/timetable';
import {
  BookOpen,
  CalendarBlank,
  ChartBar,
  CheckCircle,
  ClipboardText,
  Clock,
  TrendUp,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function StudentDashboard() {
  const todayDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayClasses = mockTimetable.filter((slot) => slot.day === todayDay);
  const pendingAssignments = mockAssignments.filter(
    (a) => a.status === AssignmentStatus.PENDING
  );
  const recentSubjects = mockSubjects.slice(0, 4);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back!</h1>
        <p className="text-slate-600 mt-2">Here&apos;s an overview of your academic progress</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">My Subjects</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{mockSubjects.length}</p>
              <Link href="/dashboard/subjects" className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
                View all →
              </Link>
            </div>
            <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-emerald-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Attendance</p>
              <p className="text-3xl font-bold text-emerald-600 mt-1">
                {mockAttendanceSummary.attendance_percentage}%
              </p>
              <Link href="/dashboard/attendance" className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
                View details →
              </Link>
            </div>
            <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CalendarBlank className="w-7 h-7 text-emerald-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Average Score</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">
                {mockResult.first_term.average_score}%
              </p>
              <Link href="/dashboard/results" className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
                View results →
              </Link>
            </div>
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
              <ChartBar className="w-7 h-7 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Pending Tasks</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">{pendingAssignments.length}</p>
              <Link href="/dashboard/assignments" className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
                View tasks →
              </Link>
            </div>
            <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center">
              <ClipboardText className="w-7 h-7 text-amber-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Today&apos;s Classes</h2>
              <Link href="/dashboard/timetable" className="text-sm text-emerald-600 hover:text-emerald-700">
                Full Timetable →
              </Link>
            </div>
            {todayClasses.length > 0 ? (
              <div className="space-y-3">
                {todayClasses.slice(0, 4).map((slot, index) => (
                  <div
                    key={slot._id}
                    className={`p-4 rounded-lg border-l-4 ${
                      index % 2 === 0 ? 'border-emerald-500 bg-emerald-50' : 'border-blue-500 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">{slot.subject.name}</p>
                        <p className="text-sm text-slate-600">{slot.teacher.name}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="w-4 h-4" />
                          <span>
                            {slot.start_time} - {slot.end_time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{slot.room}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <CalendarBlank className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                <p>No classes scheduled for today</p>
              </div>
            )}
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Recent Performance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Class Position</span>
                <span className="font-bold text-slate-900">
                  {mockResult.first_term.position_in_class}
                  {mockResult.first_term.position_in_class === 1
                    ? 'st'
                    : mockResult.first_term.position_in_class === 2
                      ? 'nd'
                      : mockResult.first_term.position_in_class === 3
                        ? 'rd'
                        : 'th'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Total Score</span>
                <span className="font-bold text-slate-900">{mockResult.first_term.total_score}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Subjects</span>
                <span className="font-bold text-slate-900">{mockResult.first_term.subjects.length}</span>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2 text-emerald-600">
                  <TrendUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Excellent Progress</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Attendance Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" weight="fill" />
                  <span className="text-sm text-slate-600">Present</span>
                </div>
                <span className="font-bold text-slate-900">{mockAttendanceSummary.present}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" weight="fill" />
                  <span className="text-sm text-slate-600">Late</span>
                </div>
                <span className="font-bold text-slate-900">{mockAttendanceSummary.late}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarBlank className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-600">Total Days</span>
                </div>
                <span className="font-bold text-slate-900">{mockAttendanceSummary.total_days}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Subjects */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">My Subjects</h2>
          <Link href="/dashboard/subjects" className="text-sm text-emerald-600 hover:text-emerald-700">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentSubjects.map((subject) => (
            <div key={subject._id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 truncate">{subject.name}</p>
                  <p className="text-xs text-slate-500">{subject.code}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 truncate">{subject.teachers[0].name}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
