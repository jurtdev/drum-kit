import React from 'react';

export default class Drums extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.audio.classList.add('playing');
      let drum = document.getElementById(this.props.id);
      drum.classList.add('playing');
      setTimeout(() => {
        drum.classList.remove('playing');
      }, 100);
    }
  };

  render() {
    return (
      <div className='drum-pad' id={this.props.id}>
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className='clip'
          src={this.props.src}
          ref={(ref) => (this.audio = ref)}></audio>
      </div>
    );
  }
}
