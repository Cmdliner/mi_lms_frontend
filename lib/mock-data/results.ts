export interface SubjectScore {
  subject_name: string;
  subject_id: string;
  ca_score: number;
  exam_score: number;
  total_score: number;
  grade: string;
  remarks: string;
}

export interface TermResult {
  subjects: SubjectScore[];
  total_score: number;
  average_score: number;
  position_in_class: number;
  teacher_comment: string;
  principal_comment: string;
}

export interface Result {
  _id: string;
  student: string;
  classroom: {
    _id: string;
    name: string;
  };
  academic_session: string;
  first_term: TermResult;
  second_term?: TermResult;
  third_term?: TermResult;
  cumulative_average: number;
  final_position: number;
  promotion_status: string;
  createdAt: string;
  updatedAt: string;
}

export const mockResult: Result = {
  _id: 'result1',
  student: 'student1',
  classroom: {
    _id: 'class1',
    name: 'SS1A',
  },
  academic_session: '2024/2025',
  first_term: {
    subjects: [
      {
        subject_name: 'Mathematics',
        subject_id: '1',
        ca_score: 28,
        exam_score: 65,
        total_score: 93,
        grade: 'A',
        remarks: 'Excellent performance',
      },
      {
        subject_name: 'English Language',
        subject_id: '2',
        ca_score: 26,
        exam_score: 58,
        total_score: 84,
        grade: 'A',
        remarks: 'Very good',
      },
      {
        subject_name: 'Physics',
        subject_id: '3',
        ca_score: 25,
        exam_score: 52,
        total_score: 77,
        grade: 'B',
        remarks: 'Good work',
      },
      {
        subject_name: 'Chemistry',
        subject_id: '4',
        ca_score: 24,
        exam_score: 55,
        total_score: 79,
        grade: 'B',
        remarks: 'Good performance',
      },
      {
        subject_name: 'Biology',
        subject_id: '5',
        ca_score: 27,
        exam_score: 60,
        total_score: 87,
        grade: 'A',
        remarks: 'Excellent',
      },
      {
        subject_name: 'Economics',
        subject_id: '6',
        ca_score: 23,
        exam_score: 48,
        total_score: 71,
        grade: 'B',
        remarks: 'Good',
      },
      {
        subject_name: 'Computer Science',
        subject_id: '7',
        ca_score: 29,
        exam_score: 68,
        total_score: 97,
        grade: 'A',
        remarks: 'Outstanding',
      },
    ],
    total_score: 588,
    average_score: 84,
    position_in_class: 3,
    teacher_comment:
      'An exceptional student who consistently demonstrates dedication and understanding across all subjects. Keep up the excellent work!',
    principal_comment:
      'Excellent academic performance. Continue to maintain this high standard.',
  },
  cumulative_average: 84,
  final_position: 3,
  promotion_status: 'promoted',
  createdAt: '2024-12-15T08:00:00Z',
  updatedAt: '2024-12-15T08:00:00Z',
};
