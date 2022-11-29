import styled from "styled-components";
import { ProdutoContext } from "Contextos/produtos";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroNovoProduto = styled.form`
	background: #e5e5e5;
	text-align: left;
	height: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;

	option {
			font-family: 'Raleway';
            font-style: normal;
			color: #A2A2A2;
	}

	@media (min-width: 900px) {
		input {
			height: 50px;
			width: 420px;
		}

		button {
			width: 420px;
			height: 60px;
		}

		select {
			width: 420px;
		}
	}

	@media (max-width: 900px) {
		input {
			height: 50px;
			width: 50%;
			margin-top: 100px;
		}

		button {
			width: 200px;
			height: 70px;
			margin-top: 20px;
		}

		select {
			width: 230px;
		}
	}

	input, select {
		background: #ffffff;
		border: none;
		display: block;
		padding-left: 5px;
		outline: none;
		box-shadow: 0px 2px #c8c8c8;
		margin-top: 20px;
		padding-bottom: 20px;
		box-sizing: border-box;
		border-radius: 4px 4px 0px 0px;
		padding-top: 20px;

		
	}

	button {
		color: #ffffff;
		border: none;
		background: #2a7ae4;
		margin-top: 20px;
	}
`

const InputsDaPagina = styled.input`
	::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
			color: #A2A2A2;
	}
`

export default function CadastraProduto() {
    const [imagemDoProduto, setImagemDoProduto] = useState('');
    const [IDcategoria, setIDCategoria] = useState();
    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('R$'); 
    const [texto, setTexto] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate();

	const {
		adicionaProduto,
		categorias
	} = useContext(ProdutoContext);

	const aoSalvar = (evento) => {
		evento.preventDefault();
        adicionaProduto({ titulo, imagemDoProduto, texto, preco, categoria, IDcategoria })
		alert("Seu produto foi cadastrado");
        navigate('/')
	};

    const handleCategoria = (value) => {
		let filtraCategoria = categorias.find(categoria => (categoria.id === Number(value)));
		setCategoria(filtraCategoria.titulo)
		setIDCategoria(value)
    }

	return (
		<CadastroNovoProduto onSubmit={aoSalvar}>
			<p>Adicionar novo produto</p>
			<InputsDaPagina
				placeholder="Url da imagem"
				value={imagemDoProduto}
				onChange={(evento) => setImagemDoProduto(evento.target.value)}
				required
			/>
			<select placeholder="Categorias" 
					onChange={(evento) => handleCategoria(evento.target.value)}
					required={true}
			>
				<option key='default' value=''>Selecione uma categoria</option>
				{categorias.map((categoria) => (
					<option key={categoria.id} value={categoria.id}>{categoria.titulo}</option>
				))}
			</select>
			<InputsDaPagina
				placeholder="Nome do produto"
				value={titulo}
				onChange={(evento) => setTitulo(evento.target.value)}
                required
				type="text"
			/>
			<InputsDaPagina
				placeholder="Preço do produto (ex: R$ 0.00)"
				value={preco}
				onChange={(evento) => setPreco(evento.target.value)}
                required
			/>
			<InputsDaPagina
				placeholder="Descrição do produto"
				value={texto}
				onChange={(evento) => setTexto(evento.target.value)}
                required
			/>
			<button
                type="submit"
            >Adicionar Produto</button>
		</CadastroNovoProduto>
	);
}
