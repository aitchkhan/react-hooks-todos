import React, {useState, Fragment} from 'react';
import './App.css';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (value === '') return;
        addTodo(value);
        setValue('');
    }

    return (
        <form novalidate onSubmit={handleSubmit}>
            <input className="form-input" type="text" name="title" id="input-title" value={value} onChange= {e => setValue(e.target.value)} />
        </form>
    )
}

function Todos({todos, markTodo}) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
               <li className="todo-item" key={index}>
                   <input type="checkbox" name="mark-todo" value={todo.isCompleted} onChange={e => markTodo(index)}/>

                    <span className="title">{todo.title}</span>
                </li>
                )
            )}
        </ul>
    );
}

function TodoFilters() {
    return(
        <div className="todo-filters">
        <button type="button">Active</button>
        <button type="button">Completed</button>
        </div>

    )
}

function App() {
    const [todos, setTodos] = useState([{
        title: 'I am gonna complete react hooks today',
        isCompleted: false,
    }])

  const addTodo = (title) => {
      const newTodos = [...todos, {
          title,
          isCompleted: false
        }];
      setTodos(newTodos);
  }

  const markTodo = (index) => {
      const newTodos = todos.map((todo, idx) => idx === index ? {
          isCompleted: !todo.isCompleted,
          title: todo.title
      } : todo );

      setTodos(newTodos);
  }

  return (
      <div className="App">
        <div className="container">
            <h3>todos</h3>
            <TodoForm addTodo={addTodo}/>
            <Todos todos={todos} markTodo={markTodo} />
            <TodoFilters/>
        </div>
      </div>

  );
}

export default App;
