import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/App.css';
import { TaskContext } from './TaskContext';

let counter = 0;

const App = () => {

   const [tasks, setTasks] = useState([]);

   const addTask = (text, date, important) => {
      const task = {
         id: counter,
         text,
         date,
         important,
         active: true,
         endDate: null
      }
      counter++;

      setTasks(tasks.concat(task))

      return true;
   }

   const handleChange = id => {
      const tasksCopy = [...tasks];
      tasksCopy.forEach(task => {
         if (task.id === id) {
            task.active = false;
            task.endDate = new Date().getTime();
         }
      })
      setTasks(tasksCopy)
   }

   const handleDelete = id => {
      const tasksCopy = [...tasks];
      const index = tasks.findIndex(task => task.id === id)

      tasksCopy.splice(index, 1);

      setTasks(tasksCopy)
   }

   return (
      <div className="app">

         <h3>ToDo App</h3>

         <hr />

         <AddTask
            add={addTask}
         />

         <hr />

         <TaskContext.Provider value={{ handleChange, handleDelete }}>
            <TaskList
               tasks={tasks}
            />
         </TaskContext.Provider>

      </div>
   )
}

export default App;