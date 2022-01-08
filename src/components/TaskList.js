import React from 'react';
import Task from './Task';

const TaskList = props => {
   const tasks = props.tasks.map(task => (
      <Task
         key={task.id}
         task={task}
      />
   ))

   return (
      <>
         <h3>Zadania do zrobienia</h3>
         {tasks}
      </>
   );
}

export default TaskList;