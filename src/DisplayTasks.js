import axios from "axios";

function DisplayTasks(props) {

  const deleteTask = (taskID) => {
    axios.delete(`${props.url}/tasks/${taskID}`)
    .then(() => props.getTasks())
    .catch((err) => console.log(err.response.data));
  };

  return <div>
    {props.tasks.map((task) => {
      return <div className="green" key={task.id}>
        <br/>
        <div>{task.content}</div>
        <div className="cursor" onClick={() => deleteTask(task.id)}>
          Delete
        </div>
      </div>
    })}
  </div>
}

export default DisplayTasks;
