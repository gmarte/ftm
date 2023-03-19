import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    console.log(auth);

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try{
                await refresh()
            }
            catch(err){
                console.error(err);
            }
            finally{
                setIsLoading(false);
            }
        }
        !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);
    },[])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`at: ${JSON.stringify(auth?.access_token)} and ${JSON.stringify(auth?.refresh_token)} `)
    },[isLoading])

    return(
        <>
        {isLoading}
        ? <p>Loading...</p>
        : <Outlet />
        </>
    )
}
export default PersistLogin