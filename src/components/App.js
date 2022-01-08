import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
   state = {
      tasks: [
         {
            id: 0,
            text: 'Zmienić koła na zimowe',
            date: '2022-02-01',
            important: true,
            active: false,
            endDate: null
         },
         {
            id: 1,
            text: 'Umówić wizytę u dermatologa',
            date: '2022-04-28',
            important: true,
            active: true,
            endDate: null
         },
         {
            id: 2,
            text: 'Oddać auto do lakiernika',
            date: '2018-06-30',
            important: true,
            active: true,
            endDate: null
         },
         {
            id: 3,
            text: 'Kupić bilety na Gran Canarię',
            date: '2022-07-01',
            important: true,
            active: true,
            endDate: null
         },
         {
            id: 4,
            text: 'Wreszcie zacząć szukać pracy jako fron endowiec',
            date: '2019-12-01',
            important: true,
            active: true,
            endDate: null
         },
      ]
   }

   render() {
      return (
         <div className="app">
            <h3>ToDo App</h3>
            <hr />
            <AddTask />
            <hr />
            <TaskList tasks={this.state.tasks} />
         </div>
      )
   }
}

export default App;