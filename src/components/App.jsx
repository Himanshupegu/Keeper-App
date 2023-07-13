import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((notes, index) => index !== id);
    });
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            // key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
