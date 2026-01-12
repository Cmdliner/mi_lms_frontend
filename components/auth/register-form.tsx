'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    UserCircle,
    Lock,
    EnvelopeSimple,
    User,
    Calendar,
    Briefcase,
    House,
    Image as ImageIcon
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRegister } from '@/lib/hooks/use-register';
import { registerStudentSchema, registerTeacherSchema, registerGuardianSchema } from '@/lib/validations/auth';
import { UserRole, Gender, MaritalStatus, BloodGroup } from '@/lib/constants';

export default function RegisterForm() {
    const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.STUDENT);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const { mutate: register, isPending } = useRegister();

    const getSchemaForRole = () => {
        switch (selectedRole) {
            case UserRole.STUDENT:
                return registerStudentSchema;
            case UserRole.TEACHER:
                return registerTeacherSchema;
            case UserRole.GUARDIAN:
                return registerGuardianSchema;
            default:
                return registerStudentSchema;
        }
    };

    const {
        register: registerField,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<any>({
        resolver: zodResolver(getSchemaForRole()),
        defaultValues: {
            role: UserRole.STUDENT,
            gender: Gender.M,
        },
    });

    const handleRoleChange = (role: UserRole) => {
        setSelectedRole(role);
        reset({
            role: role,
            gender: Gender.M,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfileImage(file);
            setValue('profile_image', file);
        }
    };

    const onSubmit = (data: any) => {
        register(data);
    };

    const renderRoleSpecificFields = () => {
        switch (selectedRole) {
            case UserRole.STUDENT:
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="date_of_birth" className="text-card-foreground">
                                Date of Birth *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Calendar className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="date_of_birth"
                                    {...registerField('date_of_birth' as any)}
                                    type="date"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {(errors as any).date_of_birth && (
                                <p className="text-xs text-destructive">{(errors as any).date_of_birth?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="blood_group" className="text-card-foreground">
                                Blood Group (Optional)
                            </Label>
                            <Select
                                id="blood_group"
                                {...registerField('blood_group' as any)}
                                className="bg-white"
                                disabled={isPending}
                            >
                                <option value="">Select blood group</option>
                                {Object.values(BloodGroup).map((bg) => (
                                    <option key={bg} value={bg}>
                                        {bg}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="allergies" className="text-card-foreground">
                                Allergies (Optional, comma-separated)
                            </Label>
                            <Input
                                id="allergies"
                                {...registerField('allergies' as any)}
                                type="text"
                                placeholder="e.g., Peanuts, Dairy"
                                className="bg-white"
                                disabled={isPending}
                            />
                        </div>
                    </>
                );

            case UserRole.TEACHER:
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="qualifications" className="text-card-foreground">
                                Qualifications * (comma-separated)
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="qualifications"
                                    {...registerField('qualifications' as any)}
                                    type="text"
                                    placeholder="e.g., B.Ed, M.Sc Mathematics"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.qualifications && (
                                <p className="text-xs text-destructive">{(errors as any).qualifications?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="employed_at" className="text-card-foreground">
                                Employment Date *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Calendar className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="employed_at"
                                    {...registerField('employed_at' as any)}
                                    type="date"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.employed_at && (
                                <p className="text-xs text-destructive">{(errors as any).employed_at?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-card-foreground">
                                Bio (Optional)
                            </Label>
                            <Input
                                id="bio"
                                {...registerField('bio' as any)}
                                type="text"
                                placeholder="Brief introduction"
                                className="bg-white"
                                disabled={isPending}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                id="is_hod"
                                type="checkbox"
                                {...registerField('is_hod' as any)}
                                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                                disabled={isPending}
                            />
                            <Label htmlFor="is_hod" className="text-card-foreground cursor-pointer">
                                Head of Department
                            </Label>
                        </div>
                    </>
                );

            case UserRole.GUARDIAN:
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="occupation" className="text-card-foreground">
                                Occupation *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="occupation"
                                    {...registerField('occupation' as any)}
                                    type="text"
                                    placeholder="Your occupation"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.occupation && (
                                <p className="text-xs text-destructive">{(errors as any).occupation?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="marital_status" className="text-card-foreground">
                                Marital Status *
                            </Label>
                            <Select
                                id="marital_status"
                                {...registerField('marital_status' as any)}
                                className="bg-white"
                                disabled={isPending}
                            >
                                {Object.values(MaritalStatus).map((status) => (
                                    <option key={status} value={status}>
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </option>
                                ))}
                            </Select>
                            {errors.marital_status && (
                                <p className="text-xs text-destructive">{(errors as any).marital_status?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="home_address" className="text-card-foreground">
                                Home Address *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <House className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="home_address"
                                    {...registerField('home_address' as any)}
                                    type="text"
                                    placeholder="Your home address"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.home_address && (
                                <p className="text-xs text-destructive">{(errors as any).home_address?.message}</p>
                            )}
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Card className="w-full max-w-2xl border-border shadow-lg">
            <CardHeader className="space-y-2 text-center pb-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <UserCircle className="w-10 h-10 text-primary" weight="duotone" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Create Account</CardTitle>
                <CardDescription className="text-muted-foreground">
                    Join our learning management system
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="role" className="text-card-foreground">
                            Register As *
                        </Label>
                        <Select
                            id="role"
                            {...registerField('role')}
                            onChange={(e) => handleRoleChange(e.target.value as UserRole)}
                            className="bg-white"
                        >
                            <option value={UserRole.STUDENT}>Student</option>
                            <option value={UserRole.TEACHER}>Teacher</option>
                            <option value={UserRole.GUARDIAN}>Guardian</option>
                        </Select>
                        {errors.role && (
                            <p className="text-xs text-destructive">{String(errors.role.message)}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Label htmlFor="first_name" className="text-card-foreground">
                                First Name *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <User className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="first_name"
                                    {...registerField('first_name')}
                                    type="text"
                                    placeholder="John"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.first_name && (
                                <p className="text-xs text-destructive">{String(errors.first_name.message)}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="last_name" className="text-card-foreground">
                                Last Name *
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <User className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Input
                                    id="last_name"
                                    {...registerField('last_name')}
                                    type="text"
                                    placeholder="Doe"
                                    className="pl-11 bg-white"
                                    disabled={isPending}
                                />
                            </div>
                            {errors.last_name && (
                                <p className="text-xs text-destructive">{String(errors.last_name.message)}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-card-foreground">
                            Email *
                        </Label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                <EnvelopeSimple className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <Input
                                id="email"
                                {...registerField('email')}
                                type="email"
                                placeholder="john.doe@example.com"
                                className="pl-11 bg-white"
                                disabled={isPending}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-destructive">{String(errors.email.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-card-foreground">
                            Password *
                        </Label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                <Lock className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <Input
                                id="password"
                                {...registerField('password')}
                                type="password"
                                placeholder="Minimum 6 characters"
                                className="pl-11 bg-white"
                                disabled={isPending}
                            />
                        </div>
                        {errors.password && (
                            <p className="text-xs text-destructive">{String(errors.password.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gender" className="text-card-foreground">
                            Gender *
                        </Label>
                        <Select
                            id="gender"
                            {...registerField('gender')}
                            className="bg-white"
                            disabled={isPending}
                        >
                            <option value={Gender.M}>Male</option>
                            <option value={Gender.F}>Female</option>
                        </Select>
                        {errors.gender && (
                            <p className="text-xs text-destructive">{String(errors.gender.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="profile_image" className="text-card-foreground">
                            Profile Image (Optional)
                        </Label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                <ImageIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <Input
                                id="profile_image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="pl-11 bg-white file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                                disabled={isPending}
                            />
                        </div>
                        {profileImage && (
                            <p className="text-xs text-muted-foreground">
                                Selected: {profileImage.name}
                            </p>
                        )}
                    </div>

                    {renderRoleSpecificFields()}

                    <Button
                        type="submit"
                        className="w-full h-11 text-base font-medium"
                        disabled={isPending}
                    >
                        {isPending ? 'Creating Account...' : 'Create Account'}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="font-medium text-primary hover:underline transition-colors"
                        >
                            Sign in here
                        </a>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
