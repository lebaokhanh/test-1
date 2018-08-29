import React, { Component } from 'react';
// import DateRangePicker from 'react-bootstrap-daterangepicker';
import DateTimePicker from 'react-datetime-picker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDateTime: new Date(),
    }

    this.handleDateTimeSelect = this.handleDateTimeSelect.bind(this);
  }

  handleDateTimeSelect(e) {
    this.setState({
      selectedDateTime: e,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
