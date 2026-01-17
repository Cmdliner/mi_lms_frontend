'use client';

import { Card } from '@/components/ui/card';
import {
  AttendanceStatus,
  mockAttendanceRecords,
  mockAttendanceSummary,
} from '@/lib/mock-data/attendance';
import { CalendarBlank, CheckCircle, Clock, Warning, XCircle, ChartBar } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';

export default function AttendancePage() {
  const getStatusIcon = (status: AttendanceStatus) => {
    switch (status) {
      case AttendanceStatus.PRESENT:
        return <CheckCircle className="w-5 h-5 text-emerald-600" weight="fill" />;
      case AttendanceStatus.ABSENT:
        return <XCircle className="w-5 h-5 text-red-600" weight="fill" />;
      case AttendanceStatus.LATE:
        return <Clock className="w-5 h-5 text-amber-600" weight="fill" />;
      case AttendanceStatus.EXCUSED:
        return <Warning className="w-5 h-5 text-blue-600" weight="fill" />;
    }
  };

  const getStatusColor = (status: AttendanceStatus) => {
    switch (status) {
      case AttendanceStatus.PRESENT:
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case AttendanceStatus.ABSENT:
        return 'bg-red-100 text-red-700 border-red-200';
      case AttendanceStatus.LATE:
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case AttendanceStatus.EXCUSED:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const groupedRecords = mockAttendanceRecords.reduce(
    (acc, record) => {
      const date = format(new Date(record.date), 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(record);
      return acc;
    },
    {} as Record<string, typeof mockAttendanceRecords>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <CalendarBlank className="w-7 h-7" weight="duotone" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">My Attendance</h1>
            <p className="text-blue-50 mt-1">
              {mockAttendanceSummary.attendance_percentage}% attendance rate this session
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="p-5 border-2 border-slate-200 hover:border-slate-300 transition-all">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <CalendarBlank className="w-6 h-6 text-slate-600" weight="duotone" />
            </div>
            <p className="text-sm text-slate-600 font-medium">Total Days</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">
              {mockAttendanceSummary.total_days}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-emerald-200 hover:border-emerald-300 transition-all bg-gradient-to-br from-emerald-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" weight="duotone" />
            </div>
            <p className="text-sm text-emerald-700 font-medium">Present</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">
              {mockAttendanceSummary.present}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-red-200 hover:border-red-300 transition-all bg-gradient-to-br from-red-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-3">
              <XCircle className="w-6 h-6 text-red-600" weight="duotone" />
            </div>
            <p className="text-sm text-red-700 font-medium">Absent</p>
            <p className="text-3xl font-bold text-red-600 mt-1">
              {mockAttendanceSummary.absent}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-amber-200 hover:border-amber-300 transition-all bg-gradient-to-br from-amber-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-amber-600" weight="duotone" />
            </div>
            <p className="text-sm text-amber-700 font-medium">Late</p>
            <p className="text-3xl font-bold text-amber-600 mt-1">
              {mockAttendanceSummary.late}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-emerald-200 hover:border-emerald-300 transition-all bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
              <ChartBar className="w-6 h-6" weight="duotone" />
            </div>
            <p className="text-sm text-emerald-50 font-medium">Attendance</p>
            <p className="text-3xl font-bold mt-1">
              {mockAttendanceSummary.attendance_percentage}%
            </p>
          </div>
        </Card>
      </div>

      {/* Attendance Records */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Recent Attendance Records</h2>
          <span className="text-sm text-slate-500">{Object.keys(groupedRecords).length} days</span>
        </div>

        {Object.entries(groupedRecords)
          .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
          .map(([date, records]) => (
            <Card key={date} className="p-6 border-2 border-slate-200 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <CalendarBlank className="w-5 h-5 text-blue-600" weight="duotone" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {format(new Date(date), 'EEEE, MMMM d, yyyy')}
                  </h3>
                  <p className="text-sm text-slate-500">{records.length} classes</p>
                </div>
              </div>

              <div className="grid gap-3">
                {records.map((record) => (
                  <div
                    key={record._id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-200">
                        {getStatusIcon(record.status)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{record.subject.name}</p>
                        <p className="text-sm text-slate-500">{record.subject.code}</p>
                      </div>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border ${getStatusColor(
                        record.status
                      )}`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
