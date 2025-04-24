import './DropdownList.css';

const DropdownList = (props) => { // Arrow function sempre vai retornar algo
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select /* O select é o campo de seleção */
                required={props.required}
                value={props.value} /* O valor do campo de seleção é controlado pelo estado "value" */
                onChange={event => props.onChange(event.target.value)} /* Evento que acontece quando o valor do campo muda */
            >
                {props.itens.map( // Criamos uma função *map*, que cria uma lista para renderizar a lista de alguma forma na tela
                    item => // Para cada item
                    <option key={item}>{item}</option>)} {/* Retornamos uma option que contem o item */}
            </select>
        </div>
    )
}

export default DropdownList;