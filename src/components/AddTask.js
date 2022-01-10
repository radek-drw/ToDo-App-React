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
      this.setState({
         text: e.target.value
      })
   }

   handleChekbox = e => {
      this.setState({
         checked: e.target.checked
      })
   }

   handleDate = e => {
      this.setState({
         date: e.target.value
      })
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
         console.log('Za krótka nazwa');
      }
   }

   render() {
      let maxDate = this.minDate.slice(0, 4) * 1 + 1;
      maxDate = maxDate + '-12-31';

      return (
         <div className="form">
            <h2>Dodaj zadanie</h2>
            <input
               type="text"
               placeholder='dadaj zadanie'
               value={this.state.text}
               onChange={this.handleChange}
            />
            <label htmlFor="important">
               <input
                  type="checkbox"
                  id='important'
                  checked={this.state.checked}
                  onChange={this.handleChekbox}
               />Priorytet
            </label>
            <label htmlFor="date">Do kiedy zrobić
               <input
                  type="date"
                  id='date'
                  value={this.state.date}
                  min={this.minDate}
                  max={maxDate}
                  onChange={this.handleDate}
               />
            </label>
            <button onClick={this.handleClick}>Dodaj</button>
         </div>
      )
   }
}

export default AddTask;