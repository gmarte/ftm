import axios from "../api/axios"
import useAuth from "./useAuth"
const REFRESH_URL = '/dj-rest-auth/token/refresh/'

const useRefreshToken = () => {    
    const { auth, setAuth } = useAuth();        

    const refresh = async () => {              
        const response = await axios.post(REFRESH_URL,
        {
            refresh: auth?.refresh_token
        },
        {
            withCredentials: true
        }
        );
        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(`new token: ${response.data.access}`);
            return{ 
                ...prev,
                access_token: response.data.access}
        });
        return response.data.access;
    }
  return refresh;
}

export default useRefreshToken
