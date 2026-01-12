import { z } from 'zod';
import { UserRole, Gender, MaritalStatus } from '../constants';

const baseLoginSchema = z.object({
    role: z.nativeEnum(UserRole),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginStudentSchema = baseLoginSchema.extend({
    role: z.literal(UserRole.STUDENT),
    admission_no: z.string().regex(/^STU-\d{9}$/, "Invalid admission number format (e.g., STU-123456789)"),
});

export const loginTeacherSchema = baseLoginSchema.extend({
    role: z.literal(UserRole.TEACHER),
    staff_id: z.string().regex(/^TEA-\d{9}$/, "Invalid staff ID format (e.g., TEA-123456789)"),
});

export const loginGuardianSchema = baseLoginSchema.extend({
    role: z.literal(UserRole.GUARDIAN),
    email: z.string().email("Invalid email address"),
});

export const loginSchema = z.discriminatedUnion('role', [
    loginStudentSchema,
    loginTeacherSchema,
    loginGuardianSchema,
]);

export type LoginFormValues = z.infer<typeof loginSchema>;

const baseRegisterSchema = z.object({
    role: z.nativeEnum(UserRole),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    first_name: z.string().min(1, "First name is required").regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
    last_name: z.string().min(1, "Last name is required").regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
    gender: z.nativeEnum(Gender),
    profile_image: z.instanceof(File).optional(),
});

export const registerStudentSchema = baseRegisterSchema.extend({
    role: z.literal(UserRole.STUDENT),
    date_of_birth: z.string().min(1, "Date of birth is required"),
    blood_group: z.string().optional(),
    allergies: z.string().optional(),
});

export const registerTeacherSchema = baseRegisterSchema.extend({
    role: z.literal(UserRole.TEACHER),
    is_active: z.boolean().default(true),
    qualifications: z.string().min(1, "Qualifications are required"),
    employed_at: z.string().min(1, "Employment date is required"),
    bio: z.string().optional(),
    is_hod: z.boolean().default(false),
});

export const registerGuardianSchema = baseRegisterSchema.extend({
    role: z.literal(UserRole.GUARDIAN),
    occupation: z.string().min(1, "Occupation is required"),
    marital_status: z.nativeEnum(MaritalStatus),
    home_address: z.string().min(1, "Home address is required"),
});

export const registerSchema = z.discriminatedUnion('role', [
    registerStudentSchema,
    registerTeacherSchema,
    registerGuardianSchema,
]);

export type RegisterFormValues = z.infer<typeof registerSchema>;
