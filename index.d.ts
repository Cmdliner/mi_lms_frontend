declare global {

    interface User {
        _id: string;
        email: string;
        first_name: string;
        last_name: string;
        role: UserRole;
        profile_image?: {
            secure_url: string;
            public_id: string;
        };
    }

    interface AuthResponse {
        success: boolean;
        access_token: string;
        user?: User;
    }
}

export { };