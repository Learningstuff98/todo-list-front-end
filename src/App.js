import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import DisplayTasks from './DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  //const url = 'http://localhost:8000';
  const url = 'https://andy-todo-list-back-end.herokuapp.com';

  const getTasks = () => {
    axios.get(`${url}/tasks`)
    .then((res) => setTasks(res.data))
    .catch((err) => console.log(err.response.data));
  };
  
  const inputForm = <InputForm
    getTasks={getTasks}
    url={url}
  />

  const tasksDisplay = <DisplayTasks
    tasks={tasks}
  />

  return <div>
    {inputForm}
    <br/>
    {tasksDisplay}
  </div>
}

export default App;
