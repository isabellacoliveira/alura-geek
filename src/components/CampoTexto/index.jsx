import styled from 'styled-components';

const InputGlobal = styled.div`
     margin: 24px 0;
     input {
        background: #FFFFFF;
        border-radius: none;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-right: 10px;
        padding-left: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px ;

        @media(max-width: 900px){
            height: 50px;
            width: 300px;
        }

        @media(min-width: 900px){
            height: 40px;
            width: 500px;
        }
     }


     label {
        display: block;
     } 
`

const CampoTexto = (props) => {
    return (
        <InputGlobal>
            {/* <label>
                {props.label}
            </label>  */}
            <input 
                label={props.label}
                value={props.value}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            >
            </input>
        </InputGlobal>
    )
}
export default CampoTexto