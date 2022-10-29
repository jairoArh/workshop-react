import { TaskCard } from "../components/TaskCard";

export const TaskList = ({ tasks, eraseTask }) => {
  
  if (tasks.length === 0) {
    return <h1>No hay Tareas</h1>;
  }
  
  return (
    <>
      {
        tasks.map( task => (
          <div key={task.id}>
              <TaskCard task={task} eraseTask={eraseTask} />
          </div>
        ))
      }
    </>
  )
}
