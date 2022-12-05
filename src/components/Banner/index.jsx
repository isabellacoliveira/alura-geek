import {React} from "react";
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

const VerConsole = styled.div`
    background: #2A7AE4;
    border: none;
    width: 130px;
    height: 60px;
    
    .BotaoVerConsole {
        border: none;
        outline: none;
        font-family: 'Raleway';
        background: none;
        font-style: normal;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
        padding-top: 22px;
        padding-left: 25px;

    }
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
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
    const ScrollTo = () => {
        const sessao = document.querySelector('#sessaoConsoles')
        return sessao ? sessao.scrollIntoView() : null
    }
    return (
        <StyledBanner>
            <BannerHero>
                <Titulo1>Dezembro Promocional</Titulo1>
                    <Titulo2>Produtos selecionados com 33% de desconto</Titulo2>
                    <VerConsole>
                        <button className="BotaoVerConsole" onClick={ScrollTo}>Ver Consoles</button>
                    </VerConsole>
            </BannerHero>
        </StyledBanner>
    )
}

export default Banner; 