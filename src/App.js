import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import DisplayTasks from './DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // axios.get(`http://localhost:8000/tasks`)
    axios.get(`https://andy-todo-list-back-end.herokuapp.com/tasks`)
    .then((res) => setTasks(res.data))
    .catch((err) => console.log(err.response.data));
  }, []);
  
  const inputForm = <InputForm/>

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
