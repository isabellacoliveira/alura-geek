import React from "react";
import styled from 'styled-components';
// import {Link} from 'react-router-dom';

const BotaoDeLogin = styled.button`
    border: 1px solid #2A7AE4;
    box-sizing: border-box;
    width: 166px;
    height: 40px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2A7AE4;
    background-color: #fff;
    
    @media (max-width: 900px){
        margin-right: 10px;
    }
    
    @media (min-width: 900px){
       margin-right: 100px;
    }
`

const BotaoLogin = () => {
    return(
        <BotaoDeLogin>Login</BotaoDeLogin>
    )
}

export default BotaoLogin; 