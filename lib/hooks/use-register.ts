import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { registerUser } from '../api';
import type { RegisterFormValues } from '../validations/auth';
import { toast } from 'sonner';

export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: RegisterFormValues) => registerUser(data),
        onSuccess: (response) => {
            if (response.success) {
                toast.success('Registration successful! Please login.');
                router.push('/login');
            }
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || 'Registration failed. Please try again.';
            toast.error(message);
        },
    });
}
