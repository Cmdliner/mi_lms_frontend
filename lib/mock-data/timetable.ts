export interface TimetableSlot {
  _id: string;
  day: string;
  start_time: string;
  end_time: string;
  subject: {
    _id: string;
    name: string;
    code: string;
  };
  teacher: {
    _id: string;
    name: string;
  };
  room: string;
}

export const mockTimetable: TimetableSlot[] = [
  // Monday
  {
    _id: 'slot1',
    day: 'Monday',
    start_time: '08:00',
    end_time: '09:00',
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    teacher: { _id: 't1', name: 'Dr. Sarah Johnson' },
    room: 'Room 101',
  },
  {
    _id: 'slot2',
    day: 'Monday',
    start_time: '09:00',
    end_time: '10:00',
    subject: { _id: '2', name: 'English Language', code: 'ENG101' },
    teacher: { _id: 't2', name: 'Mr. David Williams' },
    room: 'Room 204',
  },
  {
    _id: 'slot3',
    day: 'Monday',
    start_time: '10:30',
    end_time: '11:30',
    subject: { _id: '3', name: 'Physics', code: 'PHY101' },
    teacher: { _id: 't3', name: 'Dr. Michael Chen' },
    room: 'Lab 1',
  },
  {
    _id: 'slot4',
    day: 'Monday',
    start_time: '11:30',
    end_time: '12:30',
    subject: { _id: '4', name: 'Chemistry', code: 'CHE101' },
    teacher: { _id: 't4', name: 'Mrs. Emily Brown' },
    room: 'Lab 2',
  },
  // Tuesday
  {
    _id: 'slot5',
    day: 'Tuesday',
    start_time: '08:00',
    end_time: '09:00',
    subject: { _id: '5', name: 'Biology', code: 'BIO101' },
    teacher: { _id: 't5', name: 'Dr. Jennifer Lee' },
    room: 'Lab 3',
  },
  {
    _id: 'slot6',
    day: 'Tuesday',
    start_time: '09:00',
    end_time: '10:00',
    subject: { _id: '6', name: 'Economics', code: 'ECO101' },
    teacher: { _id: 't6', name: 'Mr. Robert Taylor' },
    room: 'Room 305',
  },
  {
    _id: 'slot7',
    day: 'Tuesday',
    start_time: '10:30',
    end_time: '11:30',
    subject: { _id: '7', name: 'Computer Science', code: 'CS101' },
    teacher: { _id: 't7', name: 'Mr. James Anderson' },
    room: 'Computer Lab',
  },
  {
    _id: 'slot8',
    day: 'Tuesday',
    start_time: '11:30',
    end_time: '12:30',
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    teacher: { _id: 't1', name: 'Dr. Sarah Johnson' },
    room: 'Room 101',
  },
  // Wednesday
  {
    _id: 'slot9',
    day: 'Wednesday',
    start_time: '08:00',
    end_time: '09:00',
    subject: { _id: '2', name: 'English Language', code: 'ENG101' },
    teacher: { _id: 't2', name: 'Mr. David Williams' },
    room: 'Room 204',
  },
  {
    _id: 'slot10',
    day: 'Wednesday',
    start_time: '09:00',
    end_time: '10:00',
    subject: { _id: '3', name: 'Physics', code: 'PHY101' },
    teacher: { _id: 't3', name: 'Dr. Michael Chen' },
    room: 'Lab 1',
  },
  {
    _id: 'slot11',
    day: 'Wednesday',
    start_time: '10:30',
    end_time: '11:30',
    subject: { _id: '4', name: 'Chemistry', code: 'CHE101' },
    teacher: { _id: 't4', name: 'Mrs. Emily Brown' },
    room: 'Lab 2',
  },
  {
    _id: 'slot12',
    day: 'Wednesday',
    start_time: '11:30',
    end_time: '12:30',
    subject: { _id: '5', name: 'Biology', code: 'BIO101' },
    teacher: { _id: 't5', name: 'Dr. Jennifer Lee' },
    room: 'Lab 3',
  },
  // Thursday
  {
    _id: 'slot13',
    day: 'Thursday',
    start_time: '08:00',
    end_time: '09:00',
    subject: { _id: '6', name: 'Economics', code: 'ECO101' },
    teacher: { _id: 't6', name: 'Mr. Robert Taylor' },
    room: 'Room 305',
  },
  {
    _id: 'slot14',
    day: 'Thursday',
    start_time: '09:00',
    end_time: '10:00',
    subject: { _id: '7', name: 'Computer Science', code: 'CS101' },
    teacher: { _id: 't7', name: 'Mr. James Anderson' },
    room: 'Computer Lab',
  },
  {
    _id: 'slot15',
    day: 'Thursday',
    start_time: '10:30',
    end_time: '11:30',
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    teacher: { _id: 't1', name: 'Dr. Sarah Johnson' },
    room: 'Room 101',
  },
  {
    _id: 'slot16',
    day: 'Thursday',
    start_time: '11:30',
    end_time: '12:30',
    subject: { _id: '2', name: 'English Language', code: 'ENG101' },
    teacher: { _id: 't2', name: 'Mr. David Williams' },
    room: 'Room 204',
  },
  // Friday
  {
    _id: 'slot17',
    day: 'Friday',
    start_time: '08:00',
    end_time: '09:00',
    subject: { _id: '3', name: 'Physics', code: 'PHY101' },
    teacher: { _id: 't3', name: 'Dr. Michael Chen' },
    room: 'Lab 1',
  },
  {
    _id: 'slot18',
    day: 'Friday',
    start_time: '09:00',
    end_time: '10:00',
    subject: { _id: '4', name: 'Chemistry', code: 'CHE101' },
    teacher: { _id: 't4', name: 'Mrs. Emily Brown' },
    room: 'Lab 2',
  },
  {
    _id: 'slot19',
    day: 'Friday',
    start_time: '10:30',
    end_time: '11:30',
    subject: { _id: '5', name: 'Biology', code: 'BIO101' },
    teacher: { _id: 't5', name: 'Dr. Jennifer Lee' },
    room: 'Lab 3',
  },
  {
    _id: 'slot20',
    day: 'Friday',
    start_time: '11:30',
    end_time: '12:30',
    subject: { _id: '6', name: 'Economics', code: 'ECO101' },
    teacher: { _id: 't6', name: 'Mr. Robert Taylor' },
    room: 'Room 305',
  },
];
