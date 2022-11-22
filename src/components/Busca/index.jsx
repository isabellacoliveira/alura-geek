import React from "react";
import styled from 'styled-components';
import Lupa from 'assets/lupa.png'; 

const InputDeBusca = styled.input`
        background: #F5F5F5;
        border-radius: 50px;
        height: 30px;
        padding: 8px 16px;
        gap: 8px;
        outline: none;
        color: #A2A2A2;
        font-family: 'Lembra';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        border: none;
        background-image: url("https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png");
        background-size:  20px 20px;
        background-repeat: no-repeat;
        background-position: right;
        
        ::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
        }

        @media(max-width: 900px){
            width: 200px;
            display: none;
        }

        @media(min-width: 900px){
            width: 500px; 
            margin-right: 300px;
            margin-left: 40px;
        }
`

const IconePesquisa = styled.img`
    @media (max-width: 900px){
        align-items: left;
    }

    @media (min-width: 900px){
        display: none;
    }
`

const InputBusca = () => {
    return (
        <>
            <InputDeBusca placeholder="O que deseja encontrar?">
            </InputDeBusca>
            <IconePesquisa src={Lupa}/>
        </>
       
    )
}

export default InputBusca