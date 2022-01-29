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
            <h2>Tasks to be done</h2>
            {activeTask.length ? activeTask : <h4>Hurray, you've got nothing to do!!!!!!!</h4>}
         </div>

         <hr />

         <div className="done">
            <h2>Done ({done.length})</h2>
            {done.length > 3 && <p style={{ fontSize: 12 }} >Only 3 tasks showed</p>}
            {doneTask.slice(0, 3)}
         </div>
      </>
   );
}

export default TaskList;