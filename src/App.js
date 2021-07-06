import './App.css';
import axios from "axios"
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState('');

  const submitComment = (formData) => {
    //axios.post(`http://localhost:3000/tasks`, formData)
    axios.post(`https://andy-todo-list-back-end.herokuapp.com/tasks`, formData)
    .catch((err) => console.log(err.response.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.length > 0) {
      submitComment({ content: input });
      setInput('');
    } else {
      alert("Comments can't be blank");
    }
  };

  const inputButton = () => {
    return <input
      type="submit"
      value="Submit"
      className=""
    />
  };

  const inputElement = () => {
    return <input
      type="text"
      placeholder="Add a comment"
      id="input-element"
      size="30"
      value={input}
      onChange={e => setInput(e.target.value)}
      className="field"
    />
  };

  return <form onSubmit={handleSubmit}>
    {inputElement()}
    <br/><br/>
    {inputButton()}
  </form>
}

export default App;
