const Task = props => {
   const { text, date } = props.task;

   return (
      <div>
         <p><strong>{text}</strong> - do {date}</p>
      </div>
   );
}

export default Task;