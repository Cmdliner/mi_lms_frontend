export const API_ENDPOINTS = {
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh',
    },
} as const;

export enum UserRole {
    STUDENT = 'student',
    TEACHER = 'teacher',
    GUARDIAN = 'guardian',
    ADMIN = 'admin'
}

export enum Gender {
    M = 'M',
    F = 'F'
}

export enum MaritalStatus {
    SINGLE = 'single',
    MARRIED = 'married',
    WIDOWED = 'widowed',
    DIVORCED = 'divorced',
    OTHER = 'other'
}

export enum BloodGroup {
    A_POSITIVE = 'A+',
    A_NEGATIVE = 'A-',
    B_POSITIVE = 'B+',
    B_NEGATIVE = 'B-',
    AB_POSITIVE = 'AB+',
    AB_NEGATIVE = 'AB-',
    O_POSITIVE = 'O+',
    O_NEGATIVE = 'O-',
}

export enum StudentEnrollmentStatus {
    ENROLLED = 'enrolled',
    SUSPENDED = 'suspended',
    EXPELLED = 'expelled',
    GRADUATED = 'graduated',
    UNKNOWN = 'unknown'
}