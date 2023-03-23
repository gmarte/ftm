import axios from "../api/axios";
import useAuth from "./useAuth";

const LOGOUT_URL = '/dj-rest-auth/logout/';

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {        
        try{
            const response = await axios.post(LOGOUT_URL, {
                withCredentials: true
            });
        }catch(err){
            console.error(err);
        }
        finally{
            localStorage.removeItem('auth');
            setAuth({});
        }
    }
    return logout;
}

export default useLogout