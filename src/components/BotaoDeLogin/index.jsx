import React from "react";
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const BotaoDeLogin = styled.button`
    border: 1px solid #2A7AE4;
    box-sizing: border-box;
    height: 40px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2A7AE4;
    background-color: #fff;
    
    .BotaoLogin{
        text-decoration: none;
        color: #2A7AE4;
        font-family: 'Raleway';
        font-style: normal;

    }

    @media (max-width: 900px){
        margin-right: 10px;
        width: 150px;
    }
    
    @media (min-width: 900px){
       margin-right: 100px;
       width: 166px;
    }
`

const BotaoLogin = () => {
    const {pathname} = useLocation()
    console.log(pathname)

    return(
        <BotaoDeLogin>
            <Link to="/login" className="BotaoLogin">
               {pathname === '/cadastrarproduto' ? <Link to="/produtos" className="BotaoLogin">Menu Administrador</Link> : "Login "}
            </Link>
        </BotaoDeLogin>
    )
}

export default BotaoLogin; 