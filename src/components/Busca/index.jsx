import React, { useState } from "react";
import styled from 'styled-components';
import Lupa from 'assets/lupa.png'; 
// import CloseIcon from '@mui/icons-material/Close';

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
        width: 20px;
        height: 20px;
        margin-left: 20px;
        margin-top: 10px;
    }

    @media (min-width: 900px){
        display: none;
    }

`
const BarrinhaPequena = styled.input`
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

        ::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
        }

        @media(max-width: 900px){
            width: 200px;
        }
        @media(min-width: 900px){
            display: none;
        }


`

const BotaoAparece = styled.button`
    border: none;
    background-color: #fff;
    @media (min-width: 900px){
        display: none;
    }

`

const InputBusca = () => {
    const [ fazAparecer, setFazAparecer ] = useState(true);
    // const apareceOuEsconde  = () => setFazAparecer(true)
    
    function mostraBarra(){
        setFazAparecer(!fazAparecer)
    }
    
    return (
        <>
            {fazAparecer ? <InputDeBusca placeholder="O que deseja encontrar?"/> : null}
           
           
            <BotaoAparece onClick={mostraBarra}> 
                {/* quando a barrinha pequena for = a true, o icone é um x ,  se não, uma lupa  */}
                    <IconePesquisa src={Lupa}/>
                </BotaoAparece>
            {!fazAparecer ? <BarrinhaPequena placeholder="O que deseja encontrar?"/> : null}
            
        </>
       
    )
}

export default InputBusca