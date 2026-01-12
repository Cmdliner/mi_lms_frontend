import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { loginUser } from '../api';
import { useAuth } from './use-auth';
import type { LoginFormValues } from '../validations/auth';
import { toast } from 'sonner';

export function useLogin() {
    const { setAuth } = useAuth();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: LoginFormValues) => loginUser(data),
        onSuccess: (response) => {
            if (response.success && response.access_token) {
                setAuth({
                    accessToken: response.access_token,
                    user: response.user,
                });
                toast.success('Login successful!');
                router.push('/dashboard');
            }
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || 'Login failed. Please try again.';
            toast.error(message);
        },
    });
}
