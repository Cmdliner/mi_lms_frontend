'use client';

import { Card } from '@/components/ui/card';
import { mockSubjects } from '@/lib/mock-data/subjects';
import { BookOpen, User, ChalkboardTeacher, GraduationCap } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <BookOpen className="w-7 h-7" weight="duotone" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">My Subjects</h1>
            <p className="text-emerald-50 mt-1">
              {mockSubjects.length} subjects enrolled this session
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 border-2 border-slate-200 hover:border-emerald-300 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Total Subjects</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{mockSubjects.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-emerald-600" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card className="p-5 border-2 border-slate-200 hover:border-blue-300 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Teachers</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {new Set(mockSubjects.flatMap(s => s.teachers.map(t => t._id))).size}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <ChalkboardTeacher className="w-6 h-6 text-blue-600" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card className="p-5 border-2 border-slate-200 hover:border-purple-300 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Grade Level</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {mockSubjects[0]?.grade_level || 'N/A'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-purple-600" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card className="p-5 border-2 border-slate-200 hover:border-teal-300 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Session</p>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {mockSubjects[0]?.academic_session || 'N/A'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-teal-600" weight="duotone" />
            </div>
          </div>
        </Card>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSubjects.map((subject) => (
          <Card 
            key={subject._id} 
            className="group p-6 border-2 border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Subject Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {subject.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium">{subject.code}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
              {subject.description}
            </p>

            {/* Teacher Info */}
            <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100">
              {subject.teachers.map((teacher) => (
                <div key={teacher._id} className="flex items-center gap-3">
                  {teacher.avatar ? (
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-emerald-100"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-600" weight="duotone" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{teacher.name}</p>
                    <p className="text-xs text-slate-500">{teacher.email}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subject Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-slate-200">
                <span className="text-sm text-slate-600 font-medium">Grade Level</span>
                <span className="text-sm font-bold text-emerald-600">{subject.grade_level}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-slate-200">
                <span className="text-sm text-slate-600 font-medium">Session</span>
                <span className="text-sm font-bold text-slate-900">{subject.academic_session}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
