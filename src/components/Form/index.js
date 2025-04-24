import { useState } from 'react';

import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = (props) => {

    // O useState é um hook que serve para criar variáveis reativas, que mudam o valor e atualizam a interface automaticamente
        // O useState retorna um array com duas posições:
        // A primeira é a variável que guarda o dado digitado no formulário
        // A segunda é uma função que atualiza esse valor
    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('')

    const onSave = (event) => { // Cria um evento para acontecer
        event.preventDefault() // Impede o comportamento padrão de regarrer a página
        console.log('Form foi submetido => ', nome, cargo, imagem, time) // Exibe os valores no console
        props.onRegister({ // Chama a função onRegister que foi passada como props, e passa um objeto com os dados do colaborador
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}> {/* Estabele o evento que deve acontecer quando for subemtido */}
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="seu nome"
                    value={nome} // O valor do campo de entrada é controlado pelo estado "nome"
                    onChange={value => setNome(value)} // Atualiza o estado "nome" quando o texto é alterado
                />

                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />

                <TextField
                    label="Imagem"
                    placeholder="o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)}
                />

                <DropdownList
                    required={true}
                    label="Time"
                    itens={props.nomesTimes}
                    value={time}
                    onChange={value => setTime(value)}
                />

                <Button>
                    Criar Card {/* A props children, lá no componente, permite que você coloque tudo que quiser aqui dentro */}
                </Button>
            </form>
        </section>
    )
}

export default Form;