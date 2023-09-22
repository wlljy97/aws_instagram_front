import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import logoImg from "../../../../assets/logoImg.png"

function Top({ children }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLogoBox}>
                <img css={S.SLogoImg} src={logoImg} alt="" />
            </div>
            {children}
        </div>
    );
} 

export default Top;