import React, { useEffect } from "react";
import LogoAluraGeek from '../../assets/Logo.png';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import InputBusca from "components/Busca";
import BotaoLogin from "components/BotaoDeLogin";

const StyledCabecalho = styled.nav`
    text-align: center;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 10px;
    width: 100%;
    background-color: #fff;

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

const TrocaLado = styled.div`
    @media (max-width: 900px){
        flex-direction: row-reverse;
        display: flex;
    }
`

const Cabecalho = () => {
    const {pathname} = useLocation()
    console.log(pathname)
    // const navegar = window.location.path; 

    return (
        <StyledCabecalho>
            <Logo src={LogoAluraGeek} />
            <TrocaLado>
                <InputBusca />
                {/* e de produtos  */}
                {pathname !== '/login' ? <BotaoLogin /> : null} 
            </TrocaLado>
        </StyledCabecalho>
    );
}; 

export default Cabecalho; 

