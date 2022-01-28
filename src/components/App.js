import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/App.css';

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
      const taskss = [...tasks];
      taskss.forEach(task => {
         if (task.id === id) {
            task.active = false;
            task.endDate = new Date().getTime();
         }
      })
      setTasks(taskss)
   }

   const handleDelete = id => {
      const taskss = [...tasks];
      const index = tasks.findIndex(task => task.id === id)

      tasks.splice(index, 1);

      setTasks(taskss)
   }

   return (
      <div className="app">

         <h3>ToDo App</h3>

         <hr />

         <AddTask
            add={addTask}
         />

         <hr />

         <TaskList
            tasks={tasks}
            change={handleChange}
            delete={handleDelete}
         />

      </div>
   )
}

export default App;