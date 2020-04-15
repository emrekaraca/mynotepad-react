import React, { useState } from "react";

export default function App() {
  const [note, setNote] = useState("");
  const handleChange = e => setNote(e.target.value);

  return (
    <div id="app">
      <h1>My Notepad - Functional</h1>
      <div className="notepad">
        <label htmlFor="my-note">Editor:</label>
        <textarea
          name="my-note"
          id="my-note"
          rows="10"
          value={note}
          onChange={handleChange}
        />
      </div>
      <div className="viewer">
        <p className="viewer--heading">Viewer:</p>
        <p id="viewer--text">{note}</p>
      </div>
    </div>
  );
}
