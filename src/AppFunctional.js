// eslint-disable-next-line
import React, { useState } from "react";

export default function App() {
  return (
    <div id="app">
      <h1>My Notepad - Functional</h1>

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
