import React from "react";
import LogoAluraGeek from '../../assets/Logo.png';
import styled from 'styled-components';
import InputBusca from "components/Busca";
import BotaoLogin from "components/BotaoDeLogin";
// import Lupazinha from '../../assets/lupinha.png'

const StyledCabecalho = styled.nav`
    text-align: center;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 10px;
    width: 100%;

    @media (max-width: 900px) {
        align-items: center;
        justify-content: center;
        display: flex;
    }
`
const Logo = styled.img`
    
    @media(max-width: 900px){
       text-align: center;
       width: 25%;
       margin-right: 10px;
    }

    @media(min-width: 900px){
        margin-left: 100px;
    }
`

const Cabecalho = () => {
    return (
        <StyledCabecalho>
            <Logo src={LogoAluraGeek} />
            <InputBusca />
            <BotaoLogin />
        </StyledCabecalho>
    );
}; 

export default Cabecalho; 

