import React, { useEffect, useState } from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';

function Signup(props) {
    const emptyAccount = {
        phoneAndEmail: "",
        name: "",
        username: "",
        password: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);

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

    const handleSignupSubmit = () => {
        signup(account)
    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                    <button>Kakao로 로그인</button>
                    <OrBar />
                    <Input name={"phoneAndEmail"} placeholder={"휴대폰 번호 또는 이메일 주소"} changeAccount={changeAccount} />
                    <Input name={"name"} placeholder={"성명"} changeAccount={changeAccount} />
                    <Input name={"username"} placeholder={"사용자 이름"} changeAccount={changeAccount} />
                    <Input type={"password"} name={"password"} placeholder={"비밀번호"} changeAccount={changeAccount} />
                    <button disabled={isAccountValuesEmpty} onClick={handleSignupSubmit}>가입</button>
                </div>
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signup;