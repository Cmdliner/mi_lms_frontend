'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import useAuth from '@/hooks/use-auth';
import { api } from '@/lib/axios';
import { UserRole } from '@/lib/constants';
import { 
    loginStudentSchema, 
    loginTeacherSchema, 
    loginGuardianSchema 
} from '@/lib/validations/auth';

type LoginFormData = {
    role: string;
    admission_no?: string;
    staff_id?: string;
    email?: string;
    password: string;
};

export default function LoginForm() {
    const router = useRouter();
    const { setAuth } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string>('student');

    const getSchema = () => {
        switch (selectedRole) {
            case 'student': return loginStudentSchema;
            case 'teacher': return loginTeacherSchema;
            case 'guardian': return loginGuardianSchema;
            default: return loginStudentSchema;
        }
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>({
        resolver: zodResolver(getSchema()),
        defaultValues: {
            role: 'student',
            password: ''
        }
    });

    const onRoleChange = (role: string) => {
        setSelectedRole(role);
        reset({
            role: role,
            password: ''
        });
    };

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            console.log('Attempting login with:', data);
            const response = await api.post('/auth/login', data, {
                withCredentials: true
            });

            console.log('Login response:', response.data);

            if (response.data.success && response.data.access_token) {
                const accessToken = response.data.access_token;
                
                // Store in localStorage
                localStorage.setItem('accessToken', accessToken);
                
                // Update auth context
                setAuth({
                    accessToken: accessToken
                });

                toast.success('Welcome back!');
                router.push('/dashboard');
            } else {
                toast.error('Login failed. Please try again.');
            }

        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.message || 'Login failed. Please check your credentials.';
            toast.error(Array.isArray(msg) ? msg[0] : msg);
        } finally {
            setIsLoading(false);
        }
    };

    const getIdentifierField = () => {
        switch (selectedRole) {
            case 'student':
                return {
                    name: 'admission_no',
                    label: 'Admission Number',
                    placeholder: 'STU-123456789'
                };
            case 'teacher':
                return {
                    name: 'staff_id',
                    label: 'Staff ID',
                    placeholder: 'TEA-123456789'
                };
            default:
                return {
                    name: 'email',
                    label: 'Email Address',
                    placeholder: 'guardian@example.com'
                };
        }
    };

    const identifierField = getIdentifierField();

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-slate-900 mb-2">Sign In</h2>
                <p className="text-slate-600">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-slate-700">
                        Login As
                    </Label>
                    <Select
                        id="role"
                        {...register('role')}
                        onChange={(e) => onRoleChange(e.target.value)}
                        className="w-full"
                        disabled={isLoading}
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="guardian">Guardian</option>
                    </Select>
                    {errors.role && (
                        <p className="text-sm text-red-600">{String(errors.role.message)}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor={identifierField.name} className="text-sm font-medium text-slate-700">
                        {identifierField.label}
                    </Label>
                    <Input
                        id={identifierField.name}
                        {...register(identifierField.name)}
                        type="text"
                        placeholder={identifierField.placeholder}
                        className="w-full"
                        disabled={isLoading}
                    />
                    {errors[identifierField.name] && (
                        <p className="text-sm text-red-600">{String((errors as any)[identifierField.name]?.message)}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                        Password
                    </Label>
                    <Input
                        id="password"
                        {...register('password')}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full"
                        disabled={isLoading}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-600">{String(errors.password.message)}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full h-11 text-base font-medium"
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>

                <p className="text-center text-sm text-slate-600">
                    Don&apos;t have an account?{' '}
                    <a
                        href="/register"
                        className="font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
}
