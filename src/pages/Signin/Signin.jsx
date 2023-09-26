import React, { useEffect, useState } from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../apis/api/account';

function Signin(props) {
    const navigate = useNavigate();
    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    useEffect(() => {
        // 리스트 변환 후 빈칸 찾기
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])

    const handleSigninSubmit = async () => {
        try{
            await signin(account)
        } catch(error) {
            setErrorMsg(error.response.data.errorMsssage)
        }
    }

    return (
        <div>
            <SigninAndUpLayout>
                <Top>
                    <div>
                        <Input placeholder={"전화번호, 사용자이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount}/>
                        <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount}/>
                        <button onClick={handleSigninSubmit} disabled={isAccountValuesEmpty}>로그인</button>
                        <OrBar/>
                        <div>
                            kakao로 로그인
                        </div>
                        <div>
                            {errorMsg}
                        </div>
                    </div>
                </Top>
            </SigninAndUpLayout>
        </div>
    );
}

export default Signin;