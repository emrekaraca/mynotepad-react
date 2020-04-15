import React, { useState, useEffect } from "react";

export default function App() {
  const [note, setNote] = useState("");
  const [noteLength, setNoteLength] = useState(0);
  const handleChange = e => {
    setNote(e.target.value);
    setNoteLength(e.target.value.length);
  };

  // Only runs on mount
  useEffect(() => {
    const storedNote = localStorage.getItem("functionalNote");
    if (storedNote) {
      setNote(storedNote);
      setNoteLength(storedNote.length);
    }
  }, [setNote]);

  // Runs on mount and every update
  useEffect(() => {
    localStorage.setItem("functionalNote", note);
  });

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
        <p>
          Length: <span id="viewer--length">{noteLength}</span>
        </p>
      </div>
    </div>
  );
}
