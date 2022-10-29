import {useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components/Navbar'
import { Navigation } from './components/Navigation';
import data from './data/tasks'


function App() {
  const [ rol, setRol ] = useState('admin')
  const [ tasks, setTasks ] = useState([])

  useEffect(()=>{
    setTasks(data)
  },[])

  function createTask(task){
    setTasks([...tasks,task])
  }

  function eraseTask(id){
    setTasks( tasks.filter(t => t.id !== id ))
  }

  return (
    <BrowserRouter>
      <Navbar rol={rol} />
      <Navigation rol={rol} createTask={createTask} eraseTask={eraseTask} tasks={tasks}/>
    </BrowserRouter>
  );
}

export default App;
