import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function Button({ disabled, onClick, text }) {
    return (
        <div css={S.SLayout}>
            <button css={S.SButton} disabled={disabled} onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;
