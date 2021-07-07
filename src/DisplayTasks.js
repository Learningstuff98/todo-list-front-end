function DisplayTasks(props) {
  return <div>
    {props.tasks.map((task) => {
      return <div key={task.id}>
        {task.content}
      </div>
    })}
  </div>
}

export default DisplayTasks;
