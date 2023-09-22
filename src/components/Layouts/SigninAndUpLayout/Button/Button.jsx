import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function Button({ name }) {
    return (
        <button>{name}</button>
    );
}

export default Button;