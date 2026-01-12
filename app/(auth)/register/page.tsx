import RegisterForm from '@/components/auth/register-form';

export default function RegisterPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-primary/5 p-4 py-12">
            <div className="w-full max-w-2xl">
                <RegisterForm />
            </div>
        </main>
    );
}