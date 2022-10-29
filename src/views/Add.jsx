import { useState } from "react";
import { TaskList } from "../components/TaskList";

export const Add = ({createTask, eraseTask, tasks}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handlingSubmit(event) {
    event.preventDefault();
    createTask({id:tasks.length,title,description})
    setTitle("");
    setDescription("");
  }

  return (
    <div className="container">
      <h1>Adicionar Tarea</h1>
      <form onSubmit={handlingSubmit}>
        <input
          type="text"
          placeholder="Titulo tarea"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        /><p />

        <textarea
          cols="30"
          rows="2"
          placeholder="Defina la Tarea"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <p />

        <button>Guardar</button>
      </form>

      {
          <TaskList tasks={tasks} eraseTask={eraseTask}/>
      }
    </div>
    
  );
};
