import React, { useState } from 'react';

import '../styles/AddTask.css';

const AddTask = props => {

   const minDate = new Date().toISOString().slice(0, 10);

   const [text, setText] = useState('');
   const [checked, setChecked] = useState(false);
   const [date, setDate] = useState(minDate);

   const handleChange = e => {
      const type = e.target.type;

      if (type === 'text') setText(e.target.value)
      else if (type === 'checkbox') setChecked(e.target.checked)
      else if (type === 'date') setDate(e.target.value)
   }

   const handleClick = () => {
      if (text.length > 2) {
         const add = props.add(text, date, checked);

         if (add) {
            setText('');
            setChecked(false);
            setDate(minDate);
         }
      } else {
         alert('Task name too short')
      }
   }

   let maxDate = minDate.slice(0, 4) * 1 + 1;
   maxDate = maxDate + '-12-31';

   return (
      <div className="form">
         <h2>Add task</h2>
         <input
            type="text"
            placeholder='Type task...'
            value={text}
            onChange={handleChange}
         />
         <label htmlFor="important">
            <input
               type="checkbox"
               id='important'
               checked={checked}
               onChange={handleChange}
            />Priority
         </label>
         <label htmlFor="date">End date
            <input
               type="date"
               id='date'
               value={date}
               min={minDate}
               max={maxDate}
               onChange={handleChange}
            />
         </label>
         <button onClick={handleClick}>Add</button>
      </div>
   )
}

export default AddTask;