import axios from "../api/axios"
import useAuth from "./useAuth"
const REFRESH_URL = '/dj-rest-auth/token/refresh/'

const useRefreshToken = () => {    
    const { setAuth } = useAuth();    

    const refresh = async () => {
        const response = await axios.post(REFRESH_URL,
        {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data.access_token);
            return{ 
                ...prev,
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token}
        });
        return response.data.access_token;
    }
  return refresh;
}

export default useRefreshToken
