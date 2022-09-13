import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const token = localStorage.getItem('token');

    if(token && token !== ''){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
};                        

export default ProtectedRoutes;