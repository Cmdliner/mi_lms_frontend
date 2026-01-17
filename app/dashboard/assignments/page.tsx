'use client';

import { Card } from '@/components/ui/card';
import { AssignmentStatus, mockAssignments } from '@/lib/mock-data/assignments';
import {
  Calendar,
  CheckCircle,
  ClipboardText,
  Clock,
  Star,
  Warning,
  FileText,
  ChartBar,
} from '@phosphor-icons/react/dist/ssr';
import { format, formatDistanceToNow, isPast } from 'date-fns';

export default function AssignmentsPage() {
  const getStatusBadge = (assignment: (typeof mockAssignments)[0]) => {
    const dueDate = new Date(assignment.due_date);
    const isOverdue = isPast(dueDate) && assignment.status === AssignmentStatus.PENDING;

    if (isOverdue) {
      return (
        <span className="px-4 py-2 rounded-lg text-sm font-bold bg-red-100 text-red-700 border-2 border-red-200 flex items-center gap-2">
          <Warning className="w-5 h-5" weight="fill" />
          Overdue
        </span>
      );
    }

    switch (assignment.status) {
      case AssignmentStatus.PENDING:
        return (
          <span className="px-4 py-2 rounded-lg text-sm font-bold bg-amber-100 text-amber-700 border-2 border-amber-200 flex items-center gap-2">
            <Clock className="w-5 h-5" weight="fill" />
            Pending
          </span>
        );
      case AssignmentStatus.SUBMITTED:
        return (
          <span className="px-4 py-2 rounded-lg text-sm font-bold bg-blue-100 text-blue-700 border-2 border-blue-200 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" weight="fill" />
            Submitted
          </span>
        );
      case AssignmentStatus.GRADED:
        return (
          <span className="px-4 py-2 rounded-lg text-sm font-bold bg-emerald-100 text-emerald-700 border-2 border-emerald-200 flex items-center gap-2">
            <Star className="w-5 h-5" weight="fill" />
            Graded
          </span>
        );
    }
  };

  const pendingAssignments = mockAssignments.filter(
    (a) => a.status === AssignmentStatus.PENDING || isPast(new Date(a.due_date))
  );
  const submittedAssignments = mockAssignments.filter(
    (a) => a.status === AssignmentStatus.SUBMITTED || a.status === AssignmentStatus.GRADED
  );

  const overdueCount = mockAssignments.filter(
    (a) => isPast(new Date(a.due_date)) && a.status === AssignmentStatus.PENDING
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FileText className="w-9 h-9" weight="duotone" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">My Assignments</h1>
              <p className="text-teal-50 mt-1">{mockAssignments.length} total assignments</p>
            </div>
          </div>
          {overdueCount > 0 && (
            <div className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold hidden md:block">
              {overdueCount} Overdue
            </div>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-5 border-2 border-slate-200 hover:border-slate-300 transition-all">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <ClipboardText className="w-6 h-6 text-slate-600" weight="duotone" />
            </div>
            <p className="text-sm text-slate-600 font-medium">Total</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{mockAssignments.length}</p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-amber-200 hover:border-amber-300 transition-all bg-gradient-to-br from-amber-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-amber-600" weight="duotone" />
            </div>
            <p className="text-sm text-amber-700 font-medium">Pending</p>
            <p className="text-3xl font-bold text-amber-600 mt-1">
              {mockAssignments.filter((a) => a.status === AssignmentStatus.PENDING).length}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-blue-200 hover:border-blue-300 transition-all bg-gradient-to-br from-blue-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-blue-600" weight="duotone" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Submitted</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">
              {mockAssignments.filter((a) => a.status === AssignmentStatus.SUBMITTED).length}
            </p>
          </div>
        </Card>

        <Card className="p-5 border-2 border-emerald-200 hover:border-emerald-300 transition-all bg-gradient-to-br from-emerald-50 to-white">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-emerald-600" weight="duotone" />
            </div>
            <p className="text-sm text-emerald-700 font-medium">Graded</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">
              {mockAssignments.filter((a) => a.status === AssignmentStatus.GRADED).length}
            </p>
          </div>
        </Card>
      </div>

      {/* Pending Assignments */}
      {pendingAssignments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Pending Assignments</h2>
            <span className="text-sm text-slate-500">{pendingAssignments.length} pending</span>
          </div>

          {pendingAssignments.map((assignment) => {
            const dueDate = new Date(assignment.due_date);
            const isOverdue = isPast(dueDate);

            return (
              <Card
                key={assignment._id}
                className={`p-6 border-2 hover:shadow-lg transition-all ${
                  isOverdue
                    ? 'border-red-300 bg-gradient-to-r from-red-50 to-white'
                    : 'border-amber-200 bg-gradient-to-r from-amber-50 to-white hover:border-amber-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isOverdue ? 'bg-red-100' : 'bg-amber-100'
                        }`}
                      >
                        <ClipboardText
                          className={`w-6 h-6 ${isOverdue ? 'text-red-600' : 'text-amber-600'}`}
                          weight="duotone"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-slate-900 mb-1">
                          {assignment.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-semibold text-slate-700">
                            {assignment.subject.name}
                          </span>
                          <span className="text-slate-500">by {assignment.teacher.name}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-16">{assignment.description}</p>
                  </div>
                  <div className="ml-4">{getStatusBadge(assignment)}</div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-slate-200 pl-16">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-slate-600" weight="duotone" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Due Date</p>
                        <p className={`text-sm font-bold ${isOverdue ? 'text-red-600' : 'text-slate-900'}`}>
                          {format(dueDate, 'MMM d, yyyy')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <ChartBar className="w-4 h-4 text-slate-600" weight="duotone" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Total Marks</p>
                        <p className="text-sm font-bold text-slate-900">{assignment.total_marks}</p>
                      </div>
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors text-sm font-bold shadow-lg hover:shadow-xl">
                    Submit Assignment
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Submitted/Graded Assignments */}
      {submittedAssignments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Submitted Assignments</h2>
            <span className="text-sm text-slate-500">{submittedAssignments.length} submitted</span>
          </div>

          {submittedAssignments.map((assignment) => (
            <Card key={assignment._id} className="p-6 border-2 border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600" weight="duotone" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-slate-900 mb-1">{assignment.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-semibold text-slate-700">{assignment.subject.name}</span>
                        <span className="text-slate-500">by {assignment.teacher.name}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed pl-16">{assignment.description}</p>
                </div>
                <div className="ml-4">{getStatusBadge(assignment)}</div>
              </div>

              {assignment.status === AssignmentStatus.GRADED && assignment.score !== undefined && (
                <div className="mt-4 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200 ml-16">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Star className="w-5 h-5 text-emerald-600" weight="fill" />
                      </div>
                      <span className="font-bold text-slate-900">Your Score</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">
                        {assignment.score}/{assignment.total_marks}
                      </div>
                      <div className="text-sm text-emerald-700 font-medium">
                        {Math.round((assignment.score / assignment.total_marks) * 100)}%
                      </div>
                    </div>
                  </div>

                  {assignment.feedback && (
                    <div className="bg-white p-4 rounded-lg border border-emerald-200">
                      <p className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-600" weight="duotone" />
                        Teacher Feedback
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed italic">
                        &ldquo;{assignment.feedback}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center gap-6 pt-4 border-t-2 border-slate-200 text-sm text-slate-600 ml-16">
                {assignment.submitted_at && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" weight="fill" />
                    <span className="font-medium">
                      Submitted {formatDistanceToNow(new Date(assignment.submitted_at), { addSuffix: true })}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>Due {format(new Date(assignment.due_date), 'MMM d, yyyy')}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
