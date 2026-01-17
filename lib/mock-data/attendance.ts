export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
  EXCUSED = 'excused',
}

export interface AttendanceRecord {
  _id: string;
  student: string;
  date: string;
  status: AttendanceStatus;
  subject: {
    _id: string;
    name: string;
    code: string;
  };
  academic_session: string;
}

export interface AttendanceSummary {
  total_days: number;
  present: number;
  absent: number;
  late: number;
  excused: number;
  attendance_percentage: number;
}

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    _id: 'att1',
    student: 'student1',
    date: '2025-01-15T08:00:00Z',
    status: AttendanceStatus.PRESENT,
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att2',
    student: 'student1',
    date: '2025-01-15T09:00:00Z',
    status: AttendanceStatus.PRESENT,
    subject: { _id: '2', name: 'English Language', code: 'ENG101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att3',
    student: 'student1',
    date: '2025-01-15T10:00:00Z',
    status: AttendanceStatus.LATE,
    subject: { _id: '3', name: 'Physics', code: 'PHY101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att4',
    student: 'student1',
    date: '2025-01-14T08:00:00Z',
    status: AttendanceStatus.PRESENT,
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att5',
    student: 'student1',
    date: '2025-01-14T09:00:00Z',
    status: AttendanceStatus.ABSENT,
    subject: { _id: '4', name: 'Chemistry', code: 'CHE101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att6',
    student: 'student1',
    date: '2025-01-13T08:00:00Z',
    status: AttendanceStatus.PRESENT,
    subject: { _id: '5', name: 'Biology', code: 'BIO101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att7',
    student: 'student1',
    date: '2025-01-13T10:00:00Z',
    status: AttendanceStatus.EXCUSED,
    subject: { _id: '6', name: 'Economics', code: 'ECO101' },
    academic_session: '2024/2025',
  },
  {
    _id: 'att8',
    student: 'student1',
    date: '2025-01-12T08:00:00Z',
    status: AttendanceStatus.PRESENT,
    subject: { _id: '7', name: 'Computer Science', code: 'CS101' },
    academic_session: '2024/2025',
  },
];

export const mockAttendanceSummary: AttendanceSummary = {
  total_days: 50,
  present: 42,
  absent: 3,
  late: 4,
  excused: 1,
  attendance_percentage: 84,
};
