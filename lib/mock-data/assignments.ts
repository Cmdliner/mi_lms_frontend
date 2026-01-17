export enum AssignmentStatus {
  PENDING = 'pending',
  SUBMITTED = 'submitted',
  GRADED = 'graded',
  OVERDUE = 'overdue',
}

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  subject: {
    _id: string;
    name: string;
    code: string;
  };
  teacher: {
    _id: string;
    name: string;
  };
  due_date: string;
  total_marks: number;
  status: AssignmentStatus;
  submitted_at?: string;
  score?: number;
  feedback?: string;
  attachment_url?: string;
  createdAt: string;
}

export const mockAssignments: Assignment[] = [
  {
    _id: 'assign1',
    title: 'Quadratic Equations Worksheet',
    description:
      'Solve all problems in chapter 5, showing complete working. Include graphical representations where necessary.',
    subject: { _id: '1', name: 'Mathematics', code: 'MATH101' },
    teacher: { _id: 't1', name: 'Dr. Sarah Johnson' },
    due_date: '2025-01-20T23:59:59Z',
    total_marks: 50,
    status: AssignmentStatus.PENDING,
    createdAt: '2025-01-10T08:00:00Z',
  },
  {
    _id: 'assign2',
    title: 'Essay on Shakespeare',
    description:
      'Write a 1500-word essay analyzing the themes in Macbeth. Focus on ambition, power, and guilt.',
    subject: { _id: '2', name: 'English Language', code: 'ENG101' },
    teacher: { _id: 't2', name: 'Mr. David Williams' },
    due_date: '2025-01-18T23:59:59Z',
    total_marks: 100,
    status: AssignmentStatus.SUBMITTED,
    submitted_at: '2025-01-17T14:30:00Z',
    score: 85,
    feedback:
      'Excellent analysis of themes. Your arguments are well-structured and supported with textual evidence. Consider exploring the supernatural elements more deeply.',
    createdAt: '2025-01-08T08:00:00Z',
  },
  {
    _id: 'assign3',
    title: 'Newton\'s Laws Lab Report',
    description:
      'Complete the laboratory report on Newton\'s laws of motion. Include hypothesis, methodology, results, and conclusion.',
    subject: { _id: '3', name: 'Physics', code: 'PHY101' },
    teacher: { _id: 't3', name: 'Dr. Michael Chen' },
    due_date: '2025-01-15T23:59:59Z',
    total_marks: 40,
    status: AssignmentStatus.OVERDUE,
    createdAt: '2025-01-05T08:00:00Z',
  },
  {
    _id: 'assign4',
    title: 'Organic Chemistry Mechanisms',
    description:
      'Draw and explain the mechanisms for reactions in chapter 8. Include electron movement arrows and intermediate structures.',
    subject: { _id: '4', name: 'Chemistry', code: 'CHE101' },
    teacher: { _id: 't4', name: 'Mrs. Emily Brown' },
    due_date: '2025-01-22T23:59:59Z',
    total_marks: 60,
    status: AssignmentStatus.PENDING,
    createdAt: '2025-01-12T08:00:00Z',
  },
  {
    _id: 'assign5',
    title: 'Cell Division Diagram',
    description:
      'Create detailed diagrams showing the stages of mitosis and meiosis. Label all important structures and phases.',
    subject: { _id: '5', name: 'Biology', code: 'BIO101' },
    teacher: { _id: 't5', name: 'Dr. Jennifer Lee' },
    due_date: '2025-01-12T23:59:59Z',
    total_marks: 30,
    status: AssignmentStatus.GRADED,
    submitted_at: '2025-01-11T18:00:00Z',
    score: 28,
    feedback: 'Excellent diagrams with clear labels. Minor error in prophase I.',
    createdAt: '2025-01-03T08:00:00Z',
  },
  {
    _id: 'assign6',
    title: 'Market Structures Analysis',
    description:
      'Compare and contrast different market structures: perfect competition, monopoly, oligopoly, and monopolistic competition.',
    subject: { _id: '6', name: 'Economics', code: 'ECO101' },
    teacher: { _id: 't6', name: 'Mr. Robert Taylor' },
    due_date: '2025-01-25T23:59:59Z',
    total_marks: 75,
    status: AssignmentStatus.PENDING,
    createdAt: '2025-01-14T08:00:00Z',
  },
  {
    _id: 'assign7',
    title: 'Python Programming Project',
    description:
      'Create a simple calculator program using Python. Include functions for basic arithmetic operations and error handling.',
    subject: { _id: '7', name: 'Computer Science', code: 'CS101' },
    teacher: { _id: 't7', name: 'Mr. James Anderson' },
    due_date: '2025-01-19T23:59:59Z',
    total_marks: 100,
    status: AssignmentStatus.SUBMITTED,
    submitted_at: '2025-01-18T20:15:00Z',
    createdAt: '2025-01-09T08:00:00Z',
  },
];
