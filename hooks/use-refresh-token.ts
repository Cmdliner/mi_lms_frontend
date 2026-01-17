import { api } from '../lib/axios';
import useAuth from './use-auth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await api.post('/auth/refresh', {}, {
            withCredentials: true
        });

        setAuth({
            accessToken: response.data.access_token
        });

        return response.data.access_token;
    };

    return refresh;
};

export default useRefreshToken;
