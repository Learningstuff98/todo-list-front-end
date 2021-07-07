import axios from "axios";

function DisplayTasks(props) {

  const deleteTask = (taskID) => {
    axios.delete(`${props.url}/tasks/${taskID}`)
    .then(() => props.getTasks())
    .catch((err) => console.log(err.response.data));
  };

  return <div>
    {props.tasks.map((task) => {
      return <div key={task.id}>
        <div>{task.content}</div>
        <div onClick={() => deleteTask(task.id)}>
          Delete
        </div>
      </div>
    })}
  </div>
}

export default DisplayTasks;
