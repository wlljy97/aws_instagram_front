import React from 'react';
import { getUser } from '../../apis/api/user';
import jwt_Decode from 'jwt-decode';

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
        <div>
            
        </div>
    );
}

export default Home;