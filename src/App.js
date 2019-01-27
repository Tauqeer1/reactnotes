import React, { Component } from "react";
import logo from "./logo.svg";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // We are going to setup the React state of our component
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1 here!" },
        { id: 2, noteContent: "Note 2 here!" }
      ]
    };

    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    this.setState({
      notes: previousNotes
    });
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React and Firebase Todo List</div>
        </div>
        <div className="notesBody">
          {this.state.notes.map(note => (
            <Note
              noteContent={note.noteContent}
              noteId={note.id}
              key={note.id}
            />
          ))}
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
