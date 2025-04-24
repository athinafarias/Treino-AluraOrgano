import './TextField.css';

// Define o componente que recebe "props" como argumento
const TextField = (props) => {

    // Função chamada quando o texto no campo de entrada é alterado
    const onTypeText = (event) => {
        props.onChange(event.target.value) // Aciona lá no Form, atualizando o estado com o novo valor digitado
    }; 

    // Retorna o JSX que define a estrutura do componente
    return (
        <div className='text-field'>
            <label>{props.label}</label> {/* Exibe o rótulo passado como propriedade (props.label) */}
            <input
                value={props.value} /* Define o valor do campo de entrada como a variável "Value" */
                onChange={onTypeText} /* Define a função a ser chamada quando o texto for alterado */
                required={props.required} /* Define se o campo é obrigatório com base na propriedade "props.required" */
                placeholder={`Digite ${props.placeholder}`} /* Define o placeholder */
            />
        </div>
    );
};

export default TextField;