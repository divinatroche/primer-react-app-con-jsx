import './App.css';
import Todo from './componentes/Todo.js';

const App =() => {
  const cabecera ="Hola Dojo!"
  const titulo = "Things I need to do:"
  return(
    <div className = "App">
      <div className="App-header">
        <h1>{cabecera}</h1>
        <h2>{titulo}</h2>
        <Todo item="Learn React"/>
        <Todo item="Climb"/>
        <Todo item="Ryn a marathon"/>
        <Todo item="Feed the dogs"/>
      </div>
    </div>
  )
}

export default App;
