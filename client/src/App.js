import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
        </div>
      </Provider>
    );
  }
}

export default App;
