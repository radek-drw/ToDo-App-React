import React from 'react';
import Task from './Task';

const TaskList = props => {

   const active = props.tasks.filter(task => task.active);
   const done = props.tasks.filter(task => !task.active);


   if (active.length > 2) {
      active.sort((a, b) => {

         a = a.text.toLowerCase();
         b = b.text.toLowerCase();

         if (a < b) return -1;
         if (a > b) return 1;
         return 0;
      })
   }

   if (done.length > 2) {
      done.sort((a, b) => {
         if (a.endDate < b.endDate) return 1;
         if (a.endDate > b.endDate) return -1;
         return 0;
      })
   }

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