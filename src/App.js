import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "",
      keyPressed: "",
      keyList: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      songValues: {
        Q: "Chord 1",
        W: "Punch",
        E: "Panic",
        A: "Shaker",
        S: "Open HH",
        D: "Closed HH",
        Z: "Punchy Kick",
        X: "Side Stick",
        C: "Tom",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const setKey = (event) => {
      this.setState({
        keyPressed: event.key.toUpperCase(),
        displayValue: this.state.songValues[event.key.toUpperCase()],
      });
    };
    document.addEventListener("keydown", setKey);
  }

  componentDidUpdate() {
    if (this.state.keyList.includes(this.state.keyPressed)) {
      this.handleClick("keydown", this.state.keyPressed);
    }
  }

  // handleKeyPress(event){
  //   const key = event.key.toUpperCase();
  //   this.setState( {displayValue: this.state.songValues[key] } );
  // }

  handleClick(event) {
    let audio;
    if (arguments[0] === "keydown") {
      audio = document.getElementById(arguments[1]);
    } else {
      const { name, value } = event.target;
      this.setState({
        displayValue: value,
      });
      audio = document.getElementById(name);
    }
    audio.paused ? audio.play() : (audio.currentTime = 0);
  }

  render() {
    return (
      <div id="drum-machine">
        <h1>DRUM MACHINE</h1>
        <div id="display">
          <p>{this.state.displayValue}</p>
        </div>
        <div id="container">
          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-q"
              name={this.state.keyList[0]}
              value="Chord 1"
              onClick={this.handleClick}
            >
              Q
              <audio
                className="clip"
                id={this.state.keyList[0]}
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-w"
              name={this.state.keyList[1]}
              value="Punch"
              onClick={this.handleClick}
            >
              W
              <audio
                className="clip"
                id={this.state.keyList[1]}
                src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_420245a900.mp3?filename=fist-punch-or-kick-7171.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-e"
              name={this.state.keyList[2]}
              value="Panic"
              onClick={this.handleClick}
            >
              E
              <audio
                className="clip"
                id={this.state.keyList[2]}
                src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_110f4765f6.mp3?filename=male-gasp-1-7183.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-a"
              name={this.state.keyList[3]}
              value="Shaker"
              onClick={this.handleClick}
            >
              A
              <audio
                className="clip"
                id={this.state.keyList[3]}
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-s"
              name={this.state.keyList[4]}
              value="Open HH"
              onClick={this.handleClick}
            >
              S
              <audio
                className="clip"
                id={this.state.keyList[4]}
                src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-d"
              name={this.state.keyList[5]}
              value="Closed HH"
              onClick={this.handleClick}
            >
              D
              <audio
                className="clip"
                id={this.state.keyList[5]}
                src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-z"
              name={this.state.keyList[6]}
              value="Punchy Kick"
              onClick={this.handleClick}
            >
              Z
              <audio
                className="clip"
                id={this.state.keyList[6]}
                src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-x"
              name={this.state.keyList[7]}
              value="Side Stick"
              onClick={this.handleClick}
            >
              X
              <audio
                className="clip"
                id={this.state.keyList[7]}
                src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
              />
            </button>
          </div>

          <div className="drum">
            <button
              type="button"
              className="drum-pad"
              id="pad-c"
              name={this.state.keyList[8]}
              value="Tom"
              onClick={this.handleClick}
            >
              C
              <audio
                className="clip"
                id={this.state.keyList[8]}
                src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_ec2624b77c.mp3?filename=failure-drum-sound-effect-2-7184.mp3"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
