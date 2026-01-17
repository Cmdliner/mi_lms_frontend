'use client';

import { Card } from '@/components/ui/card';
import { mockTimetable } from '@/lib/mock-data/timetable';
import { Clock, MapPin, User, CalendarBlank, Coffee } from '@phosphor-icons/react/dist/ssr';

export default function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getTimetableForDay = (day: string) => {
    return mockTimetable
      .filter((slot) => slot.day === day)
      .sort((a, b) => a.start_time.localeCompare(b.start_time));
  };

  const totalClasses = mockTimetable.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <CalendarBlank className="w-9 h-9" weight="duotone" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Class Timetable</h1>
              <p className="text-indigo-50 mt-1">Your weekly schedule at a glance</p>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-4xl font-bold">{totalClasses}</div>
            <div className="text-indigo-100 text-sm">Classes/Week</div>
          </div>
        </div>
      </div>

      {/* Weekly Timetable */}
      <div className="space-y-5">
        {days.map((day) => {
          const slots = getTimetableForDay(day);
          const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === day;

          return (
            <Card
              key={day}
              className={`p-6 border-2 transition-all ${
                isToday
                  ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-white shadow-lg'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isToday ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <CalendarBlank className="w-6 h-6" weight="duotone" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      {day}
                      {isToday && (
                        <span className="px-3 py-1 text-xs font-bold bg-emerald-500 text-white rounded-full">
                          TODAY
                        </span>
                      )}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium">{slots.length} classes scheduled</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {slots.map((slot, index) => (
                  <div
                    key={slot._id}
                    className={`group p-5 rounded-xl border-2 transition-all hover:shadow-md ${
                      index % 3 === 0
                        ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-white hover:border-emerald-300'
                        : index % 3 === 1
                          ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-white hover:border-blue-300'
                          : 'border-purple-200 bg-gradient-to-r from-purple-50 to-white hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              index % 3 === 0
                                ? 'bg-emerald-100'
                                : index % 3 === 1
                                  ? 'bg-blue-100'
                                  : 'bg-purple-100'
                            }`}
                          >
                            <Clock
                              className={`w-5 h-5 ${
                                index % 3 === 0
                                  ? 'text-emerald-600'
                                  : index % 3 === 1
                                    ? 'text-blue-600'
                                    : 'text-purple-600'
                              }`}
                              weight="duotone"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">
                              {slot.subject.name}
                            </h3>
                            <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                              {slot.subject.code}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                              <Clock className="w-4 h-4 text-slate-600" weight="duotone" />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Time</p>
                              <p className="font-semibold text-slate-900">
                                {slot.start_time} - {slot.end_time}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                              <User className="w-4 h-4 text-slate-600" weight="duotone" />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Teacher</p>
                              <p className="font-semibold text-slate-900">{slot.teacher.name}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-slate-600" weight="duotone" />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Room</p>
                              <p className="font-semibold text-slate-900">{slot.room}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Break Times Info */}
      <Card className="p-6 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
            <Coffee className="w-6 h-6 text-amber-600" weight="duotone" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Break Times</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-amber-200">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" weight="duotone" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Short Break</p>
              <p className="text-sm text-amber-700 font-semibold">10:00 AM - 10:30 AM</p>
              <p className="text-xs text-slate-500 mt-1">30 minutes</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-blue-200">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Coffee className="w-6 h-6 text-blue-600" weight="duotone" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Lunch Break</p>
              <p className="text-sm text-blue-700 font-semibold">12:30 PM - 1:30 PM</p>
              <p className="text-xs text-slate-500 mt-1">1 hour</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
