import { useDispatch } from 'react-redux';
import { loginActions } from '../store/login-slice';
import { useRouter } from "next/router";

const Logout = () => {
    
    const dispatch = useDispatch();

    const router = useRouter();

    dispatch(loginActions.logout());

    router.push('/');    

   
}

export default Logout;