import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useRecoilState } from 'recoil';
import { showModalState } from '../../../store/atoms/ModalState';

function ModalLayout({ children }) {
    const [ showModal, setShowModal ] = useRecoilState(showModalState);

    const handleBackgroundClick = (e) => {
        e.stopPropagation(); // event 방지
        setShowModal(<></>);
    }
    
    const handleContainerClick = (e) => {
        e.stopPropagation(); // event 방지
        
    }

    return (
        <div css={S.SLayout} onClick={handleBackgroundClick}>
            <div css={S.SContainer} onClick={handleContainerClick}>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout;