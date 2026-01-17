import { api, apiPrivate } from "./axios";
import { API_ENDPOINTS } from "./constants";
import type { LoginFormValues, RegisterFormValues } from "./validations/auth";

export async function loginUser(data: LoginFormValues): Promise<AuthResponse> {
    const payload: Record<string, any> = {
        role: data.role,
        password: data.password,
    };

    if ('admission_no' in data) {
        payload.admission_no = data.admission_no;
    } else if ('staff_id' in data) {
        payload.staff_id = data.staff_id;
    } else if ('email' in data) {
        payload.email = data.email;
    }

    const res = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload, {
        withCredentials: true,
    });

    return res.data;
}

export async function registerUser(data: RegisterFormValues): Promise<AuthResponse> {
    const formData = new FormData();

    formData.append('role', data.role);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('gender', data.gender);

    if (data.profile_image) {
        formData.append('profile_image', data.profile_image);
    }

    if (data.role === 'student' && 'date_of_birth' in data) {
        formData.append('date_of_birth', data.date_of_birth);
        
        if (data.blood_group) {
            formData.append('medical_info[blood_group]', data.blood_group);
        }
        
        if (data.allergies) {
            const allergiesArray = data.allergies.split(',').map(a => a.trim()).filter(Boolean);
            allergiesArray.forEach((allergy, index) => {
                formData.append(`medical_info[allergies][${index}]`, allergy);
            });
        }
    } else if (data.role === 'teacher' && 'qualifications' in data) {
        formData.append('is_active', String(data.is_active));
        formData.append('employed_at', data.employed_at);
        formData.append('is_hod', String(data.is_hod));
        
        if (data.bio) {
            formData.append('bio', data.bio);
        }
        
        const qualificationsArray = data.qualifications.split(',').map(q => q.trim()).filter(Boolean);
        qualificationsArray.forEach((qualification, index) => {
            formData.append(`qualifications[${index}]`, qualification);
        });
    } else if (data.role === 'guardian' && 'occupation' in data) {
        formData.append('occupation', data.occupation);
        formData.append('marital_status', data.marital_status);
        formData.append('home_address', data.home_address);
    }

    const res = await api.post(API_ENDPOINTS.AUTH.REGISTER, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
        withCredentials: true,
    });

    return res.data;
}

export async function logoutUser(): Promise<void> {
    await apiPrivate.post(API_ENDPOINTS.AUTH.LOGOUT);
}

export async function refreshToken(): Promise<AuthResponse> {
    const res = await apiPrivate.post(API_ENDPOINTS.AUTH.REFRESH);
    return res.data;
}