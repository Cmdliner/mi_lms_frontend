'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/use-auth';
import DashboardLayout from '@/components/dashboard/layout';
import StudentDashboard from '@/components/dashboard/student-dashboard';
import TeacherDashboard from '@/components/dashboard/teacher-dashboard';
import GuardianDashboard from '@/components/dashboard/guardian-dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const { auth, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return null;
  if (!isAuthenticated) return null;

  // TODO: Get role from JWT token or API
  const userRole = 'teacher'; // Temporary hardcoded role

  return (
    <DashboardLayout role={userRole}>
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'teacher' && <TeacherDashboard />}
      {userRole === 'guardian' && <GuardianDashboard />}
    </DashboardLayout>
  );
}
