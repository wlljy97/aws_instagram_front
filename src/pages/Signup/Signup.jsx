import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';
import Button from '../../components/Layouts/SigninAndUpLayout/Button/Button';
import { RiKakaoTalkFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate();
    const emptyAccount = {
        phoneAndEmail: "",
        name: "",
        username: "",
        password: ""
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

    const handleSignupSubmit = async () => {
        try {
            const response = await signup(account);
            navigate("/accounts/login")

        } catch(error) {
            const responseErrorMsg = error.response.data;
            const keys = Object.keys(responseErrorMsg);

            if(keys.includes("usernmae")) {
                setErrorMsg(responseErrorMsg.username);
            } else if(keys.includes("phoneAndEmail")) {
                setErrorMsg(responseErrorMsg.phoneAndEmail)
            } else if(keys.includes("name")){
                setErrorMsg(responseErrorMsg.name);
            } else if(keys.includes("password")) {
                setErrorMsg(responseErrorMsg.password);
            }
        }
    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <div css={S.STopTextBox}>
                        <span css={S.STopText}>친구들의 사진과 동영상을 보려면 가입하세요.</span>
                    </div>
                    <div css={S.SKakaoBox}>
                        <button css={S.SKakaoButton}>
                            <RiKakaoTalkFill css={S.SKakaoLogo}/>
                            카카오로 로그인
                        </button>
                    </div>
                    <OrBar />
                    <Input name={"phoneAndEmail"} placeholder={"휴대폰 번호 또는 이메일 주소"} changeAccount={changeAccount} />
                    <Input name={"name"} placeholder={"성명"} changeAccount={changeAccount} />
                    <Input name={"username"} placeholder={"사용자 이름"} changeAccount={changeAccount} />
                    <Input type={"password"} name={"password"} placeholder={"비밀번호"} changeAccount={changeAccount} />
                    {/* <Button text={"가입"} disabled={isAccountValuesEmpty} onClick={handleSignupSubmit}/> */}
                    <button onClick={handleSignupSubmit} disabled={isAccountValuesEmpty}>가입</button>
                    <div>
                        {errorMsg}
                    </div>
                </div>
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signup;