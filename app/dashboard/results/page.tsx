'use client';

import { Card } from '@/components/ui/card';
import { mockResult } from '@/lib/mock-data/results';
import { ChartBar, Medal, TrendUp, Trophy, Star, Certificate } from '@phosphor-icons/react/dist/ssr';

export default function ResultsPage() {
  const result = mockResult;
  const termResult = result.first_term;

  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'text-emerald-700 bg-emerald-100 border-emerald-200';
    if (grade === 'B') return 'text-blue-700 bg-blue-100 border-blue-200';
    if (grade === 'C') return 'text-amber-700 bg-amber-100 border-amber-200';
    if (grade === 'D') return 'text-orange-700 bg-orange-100 border-orange-200';
    return 'text-red-700 bg-red-100 border-red-200';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 60) return 'bg-amber-500';
    if (score >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Trophy className="w-9 h-9" weight="duotone" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Academic Results</h1>
              <p className="text-purple-50 mt-1">
                First Term • {result.academic_session}
              </p>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-4xl font-bold">{termResult.average_score}%</div>
            <div className="text-purple-100 text-sm">Average Score</div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-700 font-semibold mb-1">Average Score</p>
              <p className="text-4xl font-bold text-emerald-600 mb-2">
                {termResult.average_score}%
              </p>
              <div className="flex items-center gap-1 text-emerald-600">
                <TrendUp className="w-4 h-4" weight="bold" />
                <span className="text-sm font-medium">Excellent!</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <ChartBar className="w-8 h-8 text-emerald-600" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700 font-semibold mb-1">Class Position</p>
              <p className="text-4xl font-bold text-amber-600 mb-2">
                {termResult.position_in_class}
                {termResult.position_in_class === 1
                  ? 'st'
                  : termResult.position_in_class === 2
                    ? 'nd'
                    : termResult.position_in_class === 3
                      ? 'rd'
                      : 'th'}
              </p>
              <span className="text-sm text-slate-600 font-medium">of 45 students</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center">
              <Medal className="w-8 h-8 text-amber-600" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-semibold mb-1">Total Score</p>
              <p className="text-4xl font-bold text-blue-600 mb-2">{termResult.total_score}</p>
              <span className="text-sm text-slate-600 font-medium">
                of {termResult.subjects.length * 100}
              </span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Star className="w-8 h-8 text-blue-600" weight="duotone" />
            </div>
          </div>
        </Card>
      </div>

      {/* Subject Scores */}
      <Card className="p-6 border-2 border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Subject Performance</h2>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Certificate className="w-5 h-5" weight="duotone" />
            <span>First Term Results</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50 rounded-tl-lg">
                  Subject
                </th>
                <th className="text-center py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50">
                  CA (30)
                </th>
                <th className="text-center py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50">
                  Exam (70)
                </th>
                <th className="text-center py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50">
                  Total (100)
                </th>
                <th className="text-center py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50">
                  Grade
                </th>
                <th className="text-left py-4 px-4 text-sm font-bold text-slate-900 bg-slate-50 rounded-tr-lg">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {termResult.subjects.map((subject, index) => (
                <tr
                  key={subject.subject_id}
                  className={`${
                    index !== termResult.subjects.length - 1 ? 'border-b border-slate-200' : ''
                  } hover:bg-slate-50 transition-colors`}
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-slate-900">{subject.subject_name}</p>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                        <div
                          className={`h-1.5 rounded-full transition-all ${getScoreBarColor(
                            subject.total_score
                          )}`}
                          style={{ width: `${subject.total_score}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-semibold text-slate-900">{subject.ca_score}</span>
                    <span className="text-slate-500 text-sm">/30</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-semibold text-slate-900">{subject.exam_score}</span>
                    <span className="text-slate-500 text-sm">/70</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-lg font-bold text-slate-900">
                      {subject.total_score}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`px-4 py-1.5 rounded-lg text-sm font-bold border ${getGradeColor(
                        subject.grade
                      )}`}
                    >
                      {subject.grade}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 font-medium">
                    {subject.remarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Comments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
              <Star className="w-5 h-5 text-teal-600" weight="duotone" />
            </div>
            <h3 className="font-bold text-slate-900">Class Teacher's Comment</h3>
          </div>
          <p className="text-slate-700 leading-relaxed italic border-l-4 border-teal-500 pl-4">
            &ldquo;{termResult.teacher_comment}&rdquo;
          </p>
        </Card>

        <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Certificate className="w-5 h-5 text-purple-600" weight="duotone" />
            </div>
            <h3 className="font-bold text-slate-900">Principal's Comment</h3>
          </div>
          <p className="text-slate-700 leading-relaxed italic border-l-4 border-purple-500 pl-4">
            &ldquo;{termResult.principal_comment}&rdquo;
          </p>
        </Card>
      </div>

      {/* Academic Info */}
      <Card className="p-6 border-2 border-slate-200 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 font-medium mb-1">Class</p>
            <p className="font-bold text-slate-900 text-lg">{result.classroom.name}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 font-medium mb-1">Academic Session</p>
            <p className="font-bold text-slate-900 text-lg">{result.academic_session}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 font-medium mb-1">Promotion Status</p>
            <p className="font-bold text-emerald-600 text-lg capitalize">
              {result.promotion_status}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 font-medium mb-1">Subjects</p>
            <p className="font-bold text-slate-900 text-lg">{termResult.subjects.length}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
