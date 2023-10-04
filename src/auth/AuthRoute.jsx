import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import { useQuery } from 'react-query';
import Loading from '../components/Loading/Loading';

function AuthRoute({ element }) { // 상태
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    
    
    // useQuery는 get 요청
    // useQuery 의 옵션을 넣어줄 수 있음 ↓
    const authenticateState = useQuery(["authenticate"], authenticate, { // <- 여기의 key값이 중요
        retry : 0,
        refetchOnWindowFocus: false
    });

    if(authenticateState.isLoading) { // .을 찍을수 있는 것은 객체이다
        return <Loading />
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)){
                return element;
            }
        }
        return <Navigate to={"/accounts/login"}/>
    }

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)){
            return <Navigate to={"/"}/>
        }
    }
    
    return element;
}

export default AuthRoute;