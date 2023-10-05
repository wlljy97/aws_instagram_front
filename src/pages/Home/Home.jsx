import React from 'react';
import { getUser } from '../../apis/api/user';
import jwt_Decode from 'jwt-decode';
import RootContainer from '../../components/Container/RootContainer/RootContainer';

function Home(props) {
    try {
        let decoded = jwt_Decode(localStorage.getItem("accessToken").substring(7));
        console.log(decoded)

        const response = getUser(1);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
    
    return (
        <RootContainer>
            
        </RootContainer>
    );
}

export default Home;