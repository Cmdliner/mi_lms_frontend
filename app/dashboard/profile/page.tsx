'use client';

import { Card } from '@/components/ui/card';
import { mockStudentProfile } from '@/lib/mock-data/profile';
import {
  At,
  BookOpen,
  Briefcase,
  CalendarBlank,
  DropHalf,
  Envelope,
  GenderIntersex,
  House,
  IdentificationCard,
  MapPin,
  Phone,
  User,
  Users,
  Warning,
  Student,
  Certificate,
} from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';
import Image from 'next/image';

export default function ProfilePage() {
  const profile = mockStudentProfile;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Student className="w-9 h-9" weight="duotone" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-rose-50 mt-1">View and manage your personal information</p>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="p-8 border-2 border-slate-200">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            {profile.avatar ? (
              <div className="relative">
                <Image
                  src={profile.avatar}
                  alt={`${profile.first_name} ${profile.last_name}`}
                  width={140}
                  height={140}
                  className="rounded-2xl ring-4 ring-emerald-100"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white">
                  <Certificate className="w-5 h-5 text-white" weight="bold" />
                </div>
              </div>
            ) : (
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center ring-4 ring-emerald-100">
                <User className="w-20 h-20 text-emerald-600" weight="duotone" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {profile.first_name} {profile.last_name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                <IdentificationCard className="w-5 h-5 text-slate-600" weight="duotone" />
                <span className="font-semibold text-slate-900">{profile.admission_no}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-emerald-600" weight="duotone" />
                <span className="font-semibold text-emerald-900">{profile.current_class.name}</span>
              </div>
              <span
                className={`px-4 py-2 rounded-lg text-sm font-bold border-2 ${
                  profile.enrollment_status === 'enrolled'
                    ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {profile.enrollment_status.charAt(0).toUpperCase() +
                  profile.enrollment_status.slice(1)}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <At className="w-4 h-4" weight="duotone" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4" weight="duotone" />
                <span>{profile.phone_number}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card className="p-6 border-2 border-slate-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" weight="duotone" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <At className="w-5 h-5 text-slate-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Email Address</p>
                <p className="font-semibold text-slate-900">{profile.email}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-slate-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Phone Number</p>
                <p className="font-semibold text-slate-900">{profile.phone_number}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <CalendarBlank className="w-5 h-5 text-slate-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Date of Birth</p>
                <p className="font-semibold text-slate-900">
                  {format(new Date(profile.date_of_birth), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <GenderIntersex className="w-5 h-5 text-slate-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Gender</p>
                <p className="font-semibold text-slate-900 capitalize">{profile.gender}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-slate-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Address</p>
                <p className="font-semibold text-slate-900">{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Academic Information */}
      <Card className="p-6 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-emerald-200">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-emerald-600" weight="duotone" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Academic Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-xl border-2 border-emerald-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-emerald-700 font-bold mb-1">Current Class</p>
                <p className="font-bold text-lg text-slate-900">{profile.current_class.name}</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <CalendarBlank className="w-6 h-6 text-blue-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-blue-700 font-bold mb-1">Academic Session</p>
                <p className="font-bold text-lg text-slate-900">{profile.current_class.academic_session}</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <IdentificationCard className="w-6 h-6 text-purple-600" weight="duotone" />
              </div>
              <div>
                <p className="text-xs text-purple-700 font-bold mb-1">Admission Number</p>
                <p className="font-bold text-lg text-slate-900">{profile.admission_no}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Medical Information */}
      {profile.medical_info && (
        <Card className="p-6 border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-red-200">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <DropHalf className="w-5 h-5 text-red-600" weight="duotone" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Medical Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border-2 border-red-200">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <DropHalf className="w-6 h-6 text-red-600" weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-red-700 font-bold mb-1">Blood Group</p>
                  <p className="font-bold text-2xl text-red-600">{profile.medical_info.blood_group}</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border-2 border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Warning className="w-6 h-6 text-amber-600" weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-amber-700 font-bold mb-1">Allergies</p>
                  <p className="font-semibold text-slate-900">
                    {profile.medical_info.allergies.length > 0
                      ? profile.medical_info.allergies.join(', ')
                      : 'None'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Guardians Information */}
      {profile.guardians.length > 0 && (
        <Card className="p-6 border-2 border-slate-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-600" weight="duotone" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Guardian Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.guardians.map((guardian) => (
              <div key={guardian._id} className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all">
                <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-200">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <User className="w-7 h-7 text-slate-600" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {guardian.first_name} {guardian.last_name}
                    </h4>
                    <p className="text-sm text-slate-600 font-semibold capitalize">{guardian.relationship}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Envelope className="w-4 h-4 text-slate-600" weight="duotone" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{guardian.email}</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-slate-600" weight="duotone" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{guardian.phone_number}</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-slate-600" weight="duotone" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{guardian.occupation}</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <House className="w-4 h-4 text-slate-600" weight="duotone" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">{guardian.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
