import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
   counter = 0;

   state = {
      tasks: []
   }

   addTask = (text, date, important) => {
      const task = {
         id: this.counter,
         text,
         date,
         important,
         active: true,
         endDate: null
      }
      this.counter++;

      this.setState(prevState => ({
         tasks: [...prevState.tasks, task]
      }))

      return true;
   }

   handleChange = id => {
      const tasks = [...this.state.tasks];
      tasks.forEach(task => {
         if (task.id === id) {
            task.active = false;
            task.endDate = new Date().getTime();
         }
      })

      this.setState({
         tasks
      })
   }

   handleDelete = id => {
      const tasks = [...this.state.tasks];
      const index = tasks.findIndex(task => task.id === id)

      tasks.splice(index, 1);

      this.setState({
         tasks
      })
   }

   render() {
      return (
         <div className="app">

            <h3>ToDo App</h3>

            <hr />

            <AddTask
               add={this.addTask}
            />

            <hr />

            <TaskList
               tasks={this.state.tasks}
               change={this.handleChange}
               delete={this.handleDelete}
            />

         </div>
      )
   }
}

export default App;