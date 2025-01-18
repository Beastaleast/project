import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Auth()
{
    const isAuthenticated = useSelector((state) => state.authenticator.value);
    const navigate = useNavigate();
     useEffect(() => {
       if(!isAuthenticated)
       {  
        navigate('/login');
       }
         }, [isAuthenticated]);
   
    return(<></>)
}