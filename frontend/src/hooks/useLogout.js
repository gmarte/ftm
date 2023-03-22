import axios from "../api/axios";
import useAuth from "./useAuth";

const LOGOUT_URL = '/dj-rest-auth/logout/';

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        localStorage.removeItem('auth');
        setAuth({});
        try{
            const response = await axios(LOGOUT_URL, {
                withCredentials: true
            });
        }catch(err){
            console.error(err);
        }
    }
    return logout;
}

export default useLogout