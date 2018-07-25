import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ReactTimeslotCalendar
            initialDate={moment().format()}
        />
      </div>
    );
  }
}

export default App;
