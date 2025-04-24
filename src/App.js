import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [ // Array de objetos que representam os times
    {
      nome: 'Programação',
      corPrimaria: '#ED6868',
      corSecundaria: '#ffeded'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Devops',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8FFFF'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#BC6EDB',
      corSecundaria: '#F2E9FA'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]); // Cria um estado para armazenar os colaboradores

  const onRegisterColaborador = (colaborador) => { // Função para registrar um colaborador
    console.log(colaborador); // Exibe o colaborador no console
    setColaboradores([...colaboradores, colaborador]) // Atualiza o estado 'colaboradores' com o novo colaborador
  }

  return (
    <div className="App">
      <Banner/>

      <Form nomesTimes={times.map(time => time.nome)} onRegister={colaborador => onRegisterColaborador(colaborador)}/>
        {/*  */}
        {/* Renderiza o componente 'Form',
          'nomesTimes.map(time => time.nome)' cria um novo array com os nomes dos times
          e passa uma função como prop 'onRegister' que recebe como argumento o objeto 'colaborador' e chama a função 'onRegisterColaborador', passando o 'colaborador'. */}

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      {/* Renderiza o componente 'Time', para cada objeto no array 'times',
        -> passando as propriedades 'nome', 'corPrimaria' e 'corSecundaria' como props */}
    </div>
  );
}

export default App;