import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function AuthRoute({ element }) { // 상태
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"]
    const [ authenticated, setAuthenticated ] = useState(true); // true이면 로그인이 되어진 상태, false 로그인 해야함

    // 인증 절차
    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            if(authenticated) { // 인증이 되었는지 확인
                return <Navigate to={"/"} />
            }
            return element;
        }
    }

    if(!authenticated) {
        return <Navigate to={"/accounts/login"} />
    }

    return element;
}

export default AuthRoute;