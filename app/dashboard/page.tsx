'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import StudentDashboard from '@/components/dashboard/student-dashboard';
import TeacherDashboard from '@/components/dashboard/teacher-dashboard';
import GuardianDashboard from '@/components/dashboard/guardian-dashboard';

export default function DashboardPage() {
  const { auth } = useAuth();

  const userRole: string = auth.role as string;

  return (
    <>
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'teacher' && <TeacherDashboard />}
      {userRole === 'guardian' && <GuardianDashboard />}
    </>
  );
}
