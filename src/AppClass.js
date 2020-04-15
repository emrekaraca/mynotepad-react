import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>My Notepad - Class</h1>
        <div className="notepad">
          <label htmlFor="my-note">Editor:</label>
          <textarea name="my-note" id="my-note" rows="10" />
        </div>
        <div className="viewer">
          <p className="viewer--heading">Viewer:</p>
          <p id="viewer--text" />
        </div>
      </div>
    );
  }
}
