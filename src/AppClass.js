import React from "react";

export default class App extends React.Component {
  state = {
    note: "",
    noteLength: 0,
    counter: 0
  };

  handleChange = event => {
    this.setState({
      note: event.target.value,
      noteLength: event.target.value.length
    });
  };

  handeProcrastination = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  componentDidMount() {
    const storedNote = localStorage.getItem("classNote");
    if (storedNote) {
      this.setState({ note: storedNote, noteLength: storedNote.length });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.note !== prevState.note) {
      localStorage.setItem("classNote", this.state.note);
    }
  }

  render() {
    return (
      <div id="app">
        <h1>My Notepad - Class</h1>
        <button onClick={this.handeProcrastination}>
          My Procrastination Counter: {this.state.counter}
        </button>
        <div className="notepad">
          <label htmlFor="my-note">Editor:</label>
          <textarea
            name="my-note"
            id="my-note"
            rows="10"
            value={this.state.note}
            onChange={this.handleChange}
          />
        </div>
        <div className="viewer">
          <p className="viewer--heading">Viewer:</p>
          <p id="viewer--text">{this.state.note}</p>
          <p>
            Length: <span id="viewer--length">{this.state.noteLength}</span>
          </p>
        </div>
      </div>
    );
  }
}
