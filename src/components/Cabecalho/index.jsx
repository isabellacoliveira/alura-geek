import LogoAluraGeek from 'assets/Logo.png';
import { Link, useLocation } from 'react-router-dom'
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
    padding-bottom: 20px;
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
       width: 50%;
       margin-right: 10px;
    }

    @media(min-width: 900px){
        margin-left: 100px;
       
    }
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
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

    return (
        <StyledCabecalho>
            <Link to="/home"> 
                 <Logo src={LogoAluraGeek} />
            </Link>
            
            <TrocaLado>
                <InputBusca />
                {(pathname === '/home' || pathname === '/cadastrarproduto') ? <BotaoLogin /> : null}
            </TrocaLado>
        </StyledCabecalho>
    );
}; 

export default Cabecalho; 

