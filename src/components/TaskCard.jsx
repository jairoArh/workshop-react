import './styles.css'
export const TaskCard = ({ task, eraseTask }) => {
    function prepared(){
        eraseTask(task.id)
    }

  return (
    <div className='taskCard'>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button className='btn btn-danger' onClick={prepared}>Eliminar Tarea</button>
    </div>
  );
};
