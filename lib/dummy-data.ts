export const studentDummyData = {
    profile: {
        admission_no: 'STU-123456789',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@school.com',
        classroom: 'JSS 2A'
    },
    attendance: {
        present: 85,
        absent: 5,
        percentage: 94
    },
    subjects: [
        { name: 'Mathematics', teacher: 'Mr. Johnson', grade: 'A' },
        { name: 'English', teacher: 'Mrs. Smith', grade: 'B+' },
        { name: 'Physics', teacher: 'Dr. Williams', grade: 'A-' },
        { name: 'Chemistry', teacher: 'Ms. Brown', grade: 'B' },
    ],
    recentResults: [
        { subject: 'Mathematics', score: 85, grade: 'A', term: '1st Term' },
        { subject: 'English', score: 78, grade: 'B+', term: '1st Term' },
    ],
    upcomingEvents: [
        { title: 'Mid-Term Exam', date: '2026-02-15', type: 'exam' },
        { title: 'Science Fair', date: '2026-02-20', type: 'event' },
    ]
};

export const teacherDummyData = {
    profile: {
        staff_id: 'TEA-987654321',
        first_name: 'Sarah',
        last_name: 'Johnson',
        email: 'sarah.johnson@school.com',
        subjects: ['Mathematics', 'Further Mathematics'],
        is_hod: false
    },
    classes: [
        { name: 'JSS 2A', students: 35, subject: 'Mathematics' },
        { name: 'JSS 3B', students: 32, subject: 'Mathematics' },
        { name: 'SS 1A', students: 28, subject: 'Further Mathematics' },
    ],
    todaySchedule: [
        { time: '08:00 AM', class: 'JSS 2A', subject: 'Mathematics' },
        { time: '10:00 AM', class: 'JSS 3B', subject: 'Mathematics' },
        { time: '01:00 PM', class: 'SS 1A', subject: 'Further Mathematics' },
    ],
    pendingTasks: [
        { task: 'Submit JSS 2A attendance', due: 'Today' },
        { task: 'Grade SS 1A assignments', due: '2 days' },
        { task: 'Prepare lesson plan', due: '3 days' },
    ]
};

export const guardianDummyData = {
    profile: {
        first_name: 'Michael',
        last_name: 'Doe',
        email: 'michael.doe@email.com',
        occupation: 'Software Engineer'
    },
    wards: [
        {
            name: 'John Doe',
            admission_no: 'STU-123456789',
            classroom: 'JSS 2A',
            attendance: 94,
            overallGrade: 'B+'
        },
        {
            name: 'Jane Doe',
            admission_no: 'STU-987654321',
            classroom: 'JSS 1B',
            attendance: 96,
            overallGrade: 'A'
        }
    ]
};
