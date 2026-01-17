export interface StudentProfile {
  _id: string;
  admission_no: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  address: string;
  avatar?: string;
  current_class: {
    _id: string;
    name: string;
    academic_session: string;
  };
  guardians: Guardian[];
  medical_info?: {
    blood_group: string;
    allergies: string[];
  };
  enrollment_status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Guardian {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  relationship: string;
  occupation: string;
  address: string;
}

export const mockStudentProfile: StudentProfile = {
  _id: 'student1',
  admission_no: 'STU2024001',
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@student.school.com',
  phone_number: '+234 801 234 5678',
  gender: 'Male',
  date_of_birth: '2008-05-15',
  address: '123 Main Street, Lagos, Nigeria',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  current_class: {
    _id: 'class1',
    name: 'SS1A',
    academic_session: '2024/2025',
  },
  guardians: [
    {
      _id: 'guard1',
      first_name: 'Michael',
      last_name: 'Doe',
      email: 'michael.doe@email.com',
      phone_number: '+234 802 345 6789',
      relationship: 'Father',
      occupation: 'Engineer',
      address: '123 Main Street, Lagos, Nigeria',
    },
    {
      _id: 'guard2',
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane.doe@email.com',
      phone_number: '+234 803 456 7890',
      relationship: 'Mother',
      occupation: 'Teacher',
      address: '123 Main Street, Lagos, Nigeria',
    },
  ],
  medical_info: {
    blood_group: 'O+',
    allergies: ['Peanuts', 'Penicillin'],
  },
  enrollment_status: 'enrolled',
  createdAt: '2024-09-01T08:00:00Z',
  updatedAt: '2025-01-10T12:00:00Z',
};
