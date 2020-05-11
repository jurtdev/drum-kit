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
            <Drums
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

// function playSound(e) {

//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   console.log(audio);
//   console.log(key);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
// key.classList.add('playing');
//}

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach((key) =>
//   key.addEventListener('transitionend', removeTransition)
// );

//   window.addEventListener('keydown', playSound);

//   return (
//     <div className='App'>
//       <div className='keys'>
//         <div className='key' data-key='65'>
//           <kbd>A</kbd>
//           <span className='sound'>clap</span>
//         </div>
//         <div className='key' data-key='83'>
//           <kbd>S</kbd>
//           <span className='sound'>hihat</span>
//         </div>
//         <div className='key' data-key='68'>
//           <kbd>D</kbd>
//           <span className='sound'>kick</span>
//         </div>
//         <div className='key' data-key='70'>
//           <kbd>F</kbd>
//           <span className='sound'>openhat</span>
//         </div>
//         <div className='key' data-key='71'>
//           <kbd>G</kbd>
//           <span className='sound'>boom</span>
//         </div>
//         <div className='key' data-key='72'>
//           <kbd>H</kbd>
//           <span className='sound'>ride</span>
//         </div>
//         <div className='key' data-key='74'>
//           <kbd>J</kbd>
//           <span className='sound'>snare</span>
//         </div>
//         <div className='key' data-key='75'>
//           <kbd>K</kbd>
//           <span className='sound'>tom</span>
//         </div>
//         <div className='key' data-key='76'>
//           <kbd>L</kbd>
//           <span className='sound'>tink</span>
//         </div>
//       </div>

//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='65'
//         src='sounds/clap.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='83'
//         src='sounds/hihat.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='68'
//         src='sounds/kick.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         ata-key='70'
//         src='sounds/openhat.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='71'
//         src='src/sounds/boom.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='72'
//         src='sounds/ride.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='74'
//         src='sounds/snare.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='75'
//         src='sounds/tom.wav'></audio>
//       <audio
//         ref={(ref) => (this.audio = ref)}
//         data-key='76'
//         src='sounds/tink.wav'></audio>
//     </div>
//   );
// }

export default App;
