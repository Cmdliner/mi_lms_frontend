import {
  BookOpen,
  CalendarBlank,
  ChartBar,
  ClipboardText,
  Clock,
  FolderOpen,
  GraduationCap,
  House,
  Note,
  UserCircle,
  Users,
  IconProps,
} from '@phosphor-icons/react/dist/ssr';

export interface NavLink {
  label: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

export const studentNavigation: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard', icon: House },
  { label: 'My Subjects', href: '/dashboard/subjects', icon: BookOpen },
  { label: 'Attendance', href: '/dashboard/attendance', icon: CalendarBlank },
  { label: 'Results', href: '/dashboard/results', icon: ChartBar },
  { label: 'Assignments', href: '/dashboard/assignments', icon: ClipboardText },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Clock },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle },
];

export const teacherNavigation: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard', icon: House },
  { label: 'My Classes', href: '/dashboard/classes', icon: Users },
  { label: 'Students', href: '/dashboard/students', icon: GraduationCap },
  { label: 'Attendance', href: '/dashboard/attendance', icon: CalendarBlank },
  { label: 'Results', href: '/dashboard/results', icon: ChartBar },
  { label: 'Assignments', href: '/dashboard/assignments', icon: ClipboardText },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Clock },
  { label: 'Resources', href: '/dashboard/resources', icon: FolderOpen },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle },
];

export const guardianNavigation: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard', icon: House },
  { label: 'My Wards', href: '/dashboard/wards', icon: Users },
  { label: 'Attendance', href: '/dashboard/attendance', icon: CalendarBlank },
  { label: 'Results', href: '/dashboard/results', icon: ChartBar },
  { label: 'Reports', href: '/dashboard/reports', icon: Note },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle },
];

export const adminNavigation: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard', icon: House },
  { label: 'Students', href: '/dashboard/students', icon: GraduationCap },
  { label: 'Teachers', href: '/dashboard/teachers', icon: Users },
  { label: 'Classes', href: '/dashboard/classes', icon: BookOpen },
  { label: 'Subjects', href: '/dashboard/subjects', icon: Note },
  { label: 'Reports', href: '/dashboard/reports', icon: ChartBar },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle },
];

export function getNavigationByRole(role: string): NavLink[] {
  switch (role.toLowerCase()) {
    case 'student':
      return studentNavigation;
    case 'teacher':
      return teacherNavigation;
    case 'guardian':
      return guardianNavigation;
    case 'admin':
      return adminNavigation;
    default:
      return studentNavigation;
  }
}
