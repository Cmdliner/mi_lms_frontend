export interface Subject {
  _id: string;
  name: string;
  code: string;
  description: string;
  teachers: Teacher[];
  grade_level: string;
  academic_session: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Teacher {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export const mockSubjects: Subject[] = [
  {
    _id: '1',
    name: 'Mathematics',
    code: 'MATH101',
    description: 'Core mathematics including algebra, geometry, and calculus',
    teachers: [
      {
        _id: 't1',
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '2',
    name: 'English Language',
    code: 'ENG101',
    description: 'Comprehensive English language and literature studies',
    teachers: [
      {
        _id: 't2',
        name: 'Mr. David Williams',
        email: 'david.williams@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '3',
    name: 'Physics',
    code: 'PHY101',
    description: 'Introduction to classical and modern physics',
    teachers: [
      {
        _id: 't3',
        name: 'Dr. Michael Chen',
        email: 'michael.chen@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '4',
    name: 'Chemistry',
    code: 'CHE101',
    description: 'General chemistry covering organic and inorganic chemistry',
    teachers: [
      {
        _id: 't4',
        name: 'Mrs. Emily Brown',
        email: 'emily.brown@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '5',
    name: 'Biology',
    code: 'BIO101',
    description: 'Life sciences including botany, zoology, and human biology',
    teachers: [
      {
        _id: 't5',
        name: 'Dr. Jennifer Lee',
        email: 'jennifer.lee@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '6',
    name: 'Economics',
    code: 'ECO101',
    description: 'Basic principles of micro and macro economics',
    teachers: [
      {
        _id: 't6',
        name: 'Mr. Robert Taylor',
        email: 'robert.taylor@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
  {
    _id: '7',
    name: 'Computer Science',
    code: 'CS101',
    description: 'Introduction to programming and computational thinking',
    teachers: [
      {
        _id: 't7',
        name: 'Mr. James Anderson',
        email: 'james.anderson@school.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      },
    ],
    grade_level: 'SS1',
    academic_session: '2024/2025',
    is_active: true,
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-09-01T08:00:00Z',
  },
];
