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
                            <Label htmlFor="date_of_birth" className="text-sm font-medium text-slate-700">
                                Date of Birth
                            </Label>
                            <Input
                                id="date_of_birth"
                                {...registerField('date_of_birth' as any)}
                                type="date"
                                className="w-full"
                                disabled={isPending}
                            />
                            {(errors as any).date_of_birth && (
                                <p className="text-sm text-red-600">{(errors as any).date_of_birth?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="blood_group" className="text-sm font-medium text-slate-700">
                                Blood Group (Optional)
                            </Label>
                            <Select
                                id="blood_group"
                                {...registerField('blood_group' as any)}
                                className="w-full"
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
                            <Label htmlFor="allergies" className="text-sm font-medium text-slate-700">
                                Allergies (Optional)
                            </Label>
                            <Input
                                id="allergies"
                                {...registerField('allergies' as any)}
                                type="text"
                                placeholder="e.g., Peanuts, Dairy"
                                className="w-full"
                                disabled={isPending}
                            />
                        </div>
                    </>
                );

            case UserRole.TEACHER:
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="qualifications" className="text-sm font-medium text-slate-700">
                                Qualifications
                            </Label>
                            <Input
                                id="qualifications"
                                {...registerField('qualifications' as any)}
                                type="text"
                                placeholder="e.g., B.Ed, M.Sc Mathematics"
                                className="w-full"
                                disabled={isPending}
                            />
                            {errors.qualifications && (
                                <p className="text-sm text-red-600">{(errors as any).qualifications?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="employed_at" className="text-sm font-medium text-slate-700">
                                Employment Date
                            </Label>
                            <Input
                                id="employed_at"
                                {...registerField('employed_at' as any)}
                                type="date"
                                className="w-full"
                                disabled={isPending}
                            />
                            {errors.employed_at && (
                                <p className="text-sm text-red-600">{(errors as any).employed_at?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-sm font-medium text-slate-700">
                                Bio (Optional)
                            </Label>
                            <Input
                                id="bio"
                                {...registerField('bio' as any)}
                                type="text"
                                placeholder="Brief introduction"
                                className="w-full"
                                disabled={isPending}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                id="is_hod"
                                type="checkbox"
                                {...registerField('is_hod' as any)}
                                className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                                disabled={isPending}
                            />
                            <Label htmlFor="is_hod" className="text-sm font-medium text-slate-700 cursor-pointer">
                                Head of Department
                            </Label>
                        </div>
                    </>
                );

            case UserRole.GUARDIAN:
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="occupation" className="text-sm font-medium text-slate-700">
                                Occupation
                            </Label>
                            <Input
                                id="occupation"
                                {...registerField('occupation' as any)}
                                type="text"
                                placeholder="Your occupation"
                                className="w-full"
                                disabled={isPending}
                            />
                            {errors.occupation && (
                                <p className="text-sm text-red-600">{(errors as any).occupation?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="marital_status" className="text-sm font-medium text-slate-700">
                                Marital Status
                            </Label>
                            <Select
                                id="marital_status"
                                {...registerField('marital_status' as any)}
                                className="w-full"
                                disabled={isPending}
                            >
                                {Object.values(MaritalStatus).map((status) => (
                                    <option key={status} value={status}>
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </option>
                                ))}
                            </Select>
                            {errors.marital_status && (
                                <p className="text-sm text-red-600">{(errors as any).marital_status?.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="home_address" className="text-sm font-medium text-slate-700">
                                Home Address
                            </Label>
                            <Input
                                id="home_address"
                                {...registerField('home_address' as any)}
                                type="text"
                                placeholder="Your home address"
                                className="w-full"
                                disabled={isPending}
                            />
                            {errors.home_address && (
                                <p className="text-sm text-red-600">{(errors as any).home_address?.message}</p>
                            )}
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-slate-900 mb-2">Create Account</h2>
                <p className="text-slate-600">Join our learning management system today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-slate-700">
                        Register As
                    </Label>
                    <Select
                        id="role"
                        {...registerField('role')}
                        onChange={(e) => handleRoleChange(e.target.value as UserRole)}
                        className="w-full"
                        disabled={isPending}
                    >
                        <option value={UserRole.STUDENT}>Student</option>
                        <option value={UserRole.TEACHER}>Teacher</option>
                        <option value={UserRole.GUARDIAN}>Guardian</option>
                    </Select>
                    {errors.role && (
                        <p className="text-sm text-red-600">{String(errors.role.message)}</p>
                    )}
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first_name" className="text-sm font-medium text-slate-700">
                            First Name
                        </Label>
                        <Input
                            id="first_name"
                            {...registerField('first_name')}
                            type="text"
                            placeholder="John"
                            className="w-full"
                            disabled={isPending}
                        />
                        {errors.first_name && (
                            <p className="text-sm text-red-600">{String(errors.first_name.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="last_name" className="text-sm font-medium text-slate-700">
                            Last Name
                        </Label>
                        <Input
                            id="last_name"
                            {...registerField('last_name')}
                            type="text"
                            placeholder="Doe"
                            className="w-full"
                            disabled={isPending}
                        />
                        {errors.last_name && (
                            <p className="text-sm text-red-600">{String(errors.last_name.message)}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address
                    </Label>
                    <Input
                        id="email"
                        {...registerField('email')}
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full"
                        disabled={isPending}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-600">{String(errors.email.message)}</p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                        Password
                    </Label>
                    <Input
                        id="password"
                        {...registerField('password')}
                        type="password"
                        placeholder="Minimum 6 characters"
                        className="w-full"
                        disabled={isPending}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-600">{String(errors.password.message)}</p>
                    )}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                    <Label htmlFor="gender" className="text-sm font-medium text-slate-700">
                        Gender
                    </Label>
                    <Select
                        id="gender"
                        {...registerField('gender')}
                        className="w-full"
                        disabled={isPending}
                    >
                        <option value={Gender.M}>Male</option>
                        <option value={Gender.F}>Female</option>
                    </Select>
                    {errors.gender && (
                        <p className="text-sm text-red-600">{String(errors.gender.message)}</p>
                    )}
                </div>

                {/* Profile Image */}
                <div className="space-y-2">
                    <Label htmlFor="profile_image" className="text-sm font-medium text-slate-700">
                        Profile Image (Optional)
                    </Label>
                    <Input
                        id="profile_image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full"
                        disabled={isPending}
                    />
                    {profileImage && (
                        <p className="text-sm text-slate-600">
                            Selected: {profileImage.name}
                        </p>
                    )}
                </div>

                {/* Role-Specific Fields */}
                {renderRoleSpecificFields()}

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full h-11 text-base font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                    disabled={isPending}
                >
                    {isPending ? 'Creating Account...' : 'Create Account'}
                </Button>
            </form>
        </div>
    );
}
