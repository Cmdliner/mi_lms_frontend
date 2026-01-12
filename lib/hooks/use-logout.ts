import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../api';
import { useAuth } from './use-auth';
import { toast } from 'sonner';

export function useLogout() {
    const { clearAuth } = useAuth();
    const router = useRouter();

    return useMutation({
        mutationFn: () => logoutUser(),
        onSuccess: () => {
            clearAuth();
            toast.success('Logged out successfully');
            router.push('/login');
        },
        onError: (error: any) => {
            // Even if logout fails on server, clear local auth
            clearAuth();
            router.push('/login');
        },
    });
}
