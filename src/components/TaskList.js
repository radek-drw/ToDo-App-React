import React from 'react';
import Task from './Task';

const TaskList = props => {

   const active = props.tasks.filter(task => task.active);
   const done = props.tasks.filter(task => !task.active);

   const activeTask = active.map(task => (
      <Task
         key={task.id}
         task={task}
         change={props.change}
         delete={props.delete}
      />
   ))

   const doneTask = done.map(task => (
      <Task
         key={task.id}
         task={task}
         change={props.change}
         delete={props.delete}
      />
   ))

   return (
      <>
         <div className="active">
            <h2>Zadania do zrobienia</h2>
            {activeTask.length ? activeTask : <h4>Hurra, nie masz nic do zrobienia!!!!!!!</h4>}
         </div>

         <hr />

         <div className="done">
            <h2>Zrobione ({done.length})</h2>
            {done.length > 3 && <p style={{ fontSize: 12 }} >Wyświetlane są tylko 3 zadania</p>}
            {doneTask.slice(0, 3)}
         </div>
      </>
   );
}

export default TaskList;