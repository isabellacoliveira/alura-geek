import {React} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledBanner = styled.div`
    width: 100%;
`
const BannerHero = styled.div`
    background-image: url("https://static.unepetitemousse.fr/wp-content/uploads/2022/09/13155137/calendrier-avent-geek-1024x341.jpg");
    
    @media(max-width: 900px){
        padding-bottom: 20px;
        background-size:  100% 100%;
        background-repeat: no-repeat;
        padding-left: 30px;
    }

    @media(min-width: 900px){
        height: 410px;
        background-size: cover;
        padding-left: 190px;
      
    }
`

const VerConsole = styled.button`
    background: #2A7AE4;
    border: none;
    width: 130px;
    height: 60px;
    
    .BotaoVerConsole {
        
        border: none;
        outline: none;
        font-family: 'Raleway';
        font-style: normal;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media (max-width: 900px){
       .BotaoVerConsole{
         width: 100px;
         height: 50px;
    }
}

    @media (min-width: 900px){
        .BotaoVerConsole{
            width: 120px;
            height: 90px;
        }
        
    }
 `

const Titulo1 = styled.h1`
    font-weight: bold;
    color: #fff;
    font-family: 'Raleway';
    font-style: normal;

    @media(max-width: 900px){
        padding-top: 80px;
        font-size: 15px;
        width: 50%;
    }

    @media(min-width: 900px){
        padding-top: 220px;
    }
`

const Titulo2 = styled.h5`
    font-weight: bold;
    color: #fff;
    font-family: 'Raleway';
    font-style: normal;

    @media(max-width: 900px){
        font-size: 10px;
        width: 50%;
    }

    @media(min-width: 900px){
        padding-top: -100px;
    }

`

export const Banner = () => {
    return (
        <StyledBanner>
            <BannerHero>
                <Titulo1>Dezembro Promocional</Titulo1>
                    <Titulo2>Produtos selecionados com 33% de desconto</Titulo2>
                    <VerConsole>
                        <Link className="BotaoVerConsole" to="/consoles">Ver Consoles</Link>
                    </VerConsole>
            </BannerHero>
        </StyledBanner>
    )
}

export default Banner; 