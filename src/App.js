import React from 'react';
import './App.css';
import { data } from './data/data.js';
import Drums from './components/Drums.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Drum Master',
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <div id='drum-pads'>
          {data.map((d) => (
            <Drums key={d.id} id={d.id} letter={d.letter} src={d.src} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
