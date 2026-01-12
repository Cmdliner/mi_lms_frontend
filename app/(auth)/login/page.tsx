'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from "@/components/auth/login-form";
import useAuth from '@/hooks/use-auth';

const images = [
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80'
];

export default function LoginPage() {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isLoading, isAuthenticated, router]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (isLoading || isAuthenticated) return null;

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative bg-slate-900 overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Professional workspace ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-primary/30" />
                    </div>
                ))}

                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">
                    <div className="max-w-lg">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary mb-2">MILMS</h2>
                            <p className="text-sm text-white/60">Modular Intelligence Learning Management System</p>
                        </div>
                        <h1 className="text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                            Welcome Back
                        </h1>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Access your learning dashboard and continue your educational journey.
                        </p>
                        
                        <div className="flex gap-2 mt-12">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        index === currentImage ? 'w-8 bg-white' : 'w-1 bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-white">
                <div className="w-full max-w-md">
                    <div className="lg:hidden text-center mb-12">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">
                            MILMS
                        </h1>
                        <p className="text-sm text-slate-600">
                            Modular Intelligence Learning Management System
                        </p>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
