import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

   minDate = new Date().toISOString().slice(0, 10);

   state = {
      text: '',
      checked: false,
      date: this.minDate
   }

   handleChange = e => {
      const type = e.target.type;

      if (type === 'text') {
         this.setState({
            text: e.target.value
         })
      } else if (type === 'checkbox') {
         this.setState({
            checked: e.target.checked
         })
      } else if (type === 'date') {
         this.setState({
            date: e.target.value
         })
      }
   }

   handleClick = () => {
      const { text, checked, date } = this.state;

      if (text.length > 2) {
         const add = this.props.add(text, date, checked);

         if (add) {
            this.setState({
               text: '',
               checked: false,
               date: this.minDate
            })
         }
      } else {
         alert('Task name too short')
      }
   }

   render() {
      let maxDate = this.minDate.slice(0, 4) * 1 + 1;
      maxDate = maxDate + '-12-31';

      return (
         <div className="form">
            <h2>Add task</h2>
            <input
               type="text"
               placeholder='Type task...'
               value={this.state.text}
               onChange={this.handleChange}
            />
            <label htmlFor="important">
               <input
                  type="checkbox"
                  id='important'
                  checked={this.state.checked}
                  onChange={this.handleChange}
               />Priority
            </label>
            <label htmlFor="date">End date
               <input
                  type="date"
                  id='date'
                  value={this.state.date}
                  min={this.minDate}
                  max={maxDate}
                  onChange={this.handleChange}
               />
            </label>
            <button onClick={this.handleClick}>Add</button>
         </div>
      )
   }
}

export default AddTask;