import React, { Component } from "react";

//Components
import Header from "../../components/Header";
import Note from "../../components/Note";

//Custom Component
import NewNote from "./componentsNewNote";

//CSS
import "./Notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.renderNotes = this.renderNotes.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  componentDidMount() {
    console.log("mount");
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => response.json())
      .then(({ notes }) => {
        var notesArray = [];
        for (let key in notes) {
          notesArray.push({
            key,
            title: notes[key]["title"],
            content: notes[key]["content"],
          });
        }
        this.setState({
          notes: notesArray,
        });
      });
  }

  renderNotes() {
    const { notes } = this.state;
    return notes.map(({ key, title, content }) => {
      return <Note key={key} title={title} content={content} />;
    });
  }

  handleNewNote(note) {
    fetch(
      "https://reactsessions-ac545.firebaseio.com/notes.json",
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
        'Content-type': 'application/json'
      }
     }
    )
    
    .then(response => response.json())
    .then(({ name }) => {
        const { notes } = this.state
        note['key'] = name
        this.setState({
          notes: [...notes, note]
        })
      })
  };

   // this.setState({
    //   notes: [...notes, note],
    // });

  render() {
    return (
      <div className="Container">
        <div>
          <Header title="Kodemia Modulo 3" description="Estoy en Notes" />
          <div className="Notes-container">
            <ul>{this.renderNotes()}</ul>
            <NewNote handleNewNote={this.handleNewNote} />{" "}
            {/* Pasar el cuerpo de la funcion como prop al hijo */}
          </div>
        </div>
      </div>
    );
  }
}
