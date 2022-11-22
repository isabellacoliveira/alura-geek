import FaleConosco from "components/FaleConosco";
import { React } from "react";
import styled from 'styled-components';

const Rodape = styled.footer`
    background-color: #ffffff;
    text-align: center;
    padding-bottom: 20px;
    font-family: 'Raleway';
    font-style: normal;
`
const DesenvolvidoPor = styled.footer`
    padding-top: 30px;
`

export const Foot = () => {
    return (
        <Rodape>
            <FaleConosco />
            <DesenvolvidoPor>
                 Desenvolvido por Isabella
            </DesenvolvidoPor>
                         2022
        </Rodape>
    )
}

export default Foot;