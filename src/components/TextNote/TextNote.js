import React from "react";
import "../../style.css";
import AddForm from "../AddForm/AddForm";
import Note from "../Note/Note";
import Footer from "../Footer/Footer";
import Add from "../Add/Add";

let today = new Date();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthNumber = Number(today.getMonth());
let monthName = monthNames[monthNumber];

var date = monthName + " " + today.getDate() + ", " + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let notes = [];

export default class TextNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      noteId: localStorage.getItem("id")
        ? Number(localStorage.getItem("id"))
        : 0,
      isLeft: true,
      accentColor: localStorage.getItem("accentColor"),
      isNote: false,
      weather: ["sun", "rain", "snow", "suncloud"]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNoteTitleChange = this.handleNoteTitleChange.bind(this);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);
  }

  handleColorChange = (color) => {
      this.setState({
          accentColor: color
      })
  }

  componentDidMount() {
    localStorage.getItem("notes")
      ? this.setState({
          notes: JSON.parse(localStorage.getItem("notes")),
        })
      : this.setState({
          notes: [],
        });
  }

  handleClick() {
    this.setState({
      isNoteSelected: "true",
      noteTitle: "",
      noteText: "",
    });
  }

  handleBack() {
    this.setState({
      isNoteSelected: "false",
    });
  }

  handleSubmit = (title, text, e) => {
    e.preventDefault();

let weather = Math.floor(Math.random() * this.state.weather.length);

    let notesArr = this.state.notes;
    notesArr.unshift({
      title: title,
      text: text,
      id: this.state.noteId + +1,
      newNote: true,
      inEdit: true,
      isFav: false,
      isDelete: false,
      weather: this.state.weather[weather],
      
    });
    this.setState({
      notes: [...notesArr],
      isLeft: this.state.isLeft != this.state.isLeft,
    });
    localStorage.setItem("notes", JSON.stringify(notesArr));
    this.setState({
      noteId: +this.state.noteId + +1,
      isNote: false
    });
    localStorage.setItem("id", +this.state.noteId + +1);
  };

  handleSubmit2 = (title, text, id) => {
    //e.preventDefault();

    let notesArr = this.state.notes;
    notesArr.forEach((note) => {
      if (note.id === id) {
        note.title = title;
        note.text = text;
      }
    });

    this.setState({
      notes: [...notesArr],
    });
  };

  handleFav = (id) => {
    
        let notesArr = this.state.notes;
        notesArr.forEach((note) => {
          if (note.id === id) {
            if (note.isFav === true) {
              note.isFav = false;
            } else {
              note.isFav = true;
            }
          }
        });
        this.setState({
          notes: [...notesArr],
        });
        localStorage.setItem("notes", JSON.stringify(notesArr));
  }

  handleDel = (id) => {
    
    let notesArr = this.state.notes;
    notesArr.forEach((note) => {
      if (note.id === id) {
        if (note.isDelete === true) {
          note.isDelete = false;
        } else {
          note.isDelete = true;
        }
      }
    });
    this.setState({
      notes: [...notesArr],
    });
    localStorage.setItem("notes", JSON.stringify(notesArr));
}

  handleEdit = (id) => {
    let notesArr = this.state.notes;
    notesArr.forEach((note) => {
      if (note.id === id) {
        if (note.inEdit === true) {
          note.inEdit = false;
        } else {
          note.inEdit = true;
        }
      }
    });
    this.setState({
      notes: [...notesArr],
    });
    localStorage.setItem("notes", JSON.stringify(notesArr));
  };

  handleToggleShow = (id) => {
    let notesArr = this.state.notes;
    notesArr.forEach((note) => {
      if (note.id === id) {
        note.newNote = false;
      }
    });
    this.setState({
      notes: [...notesArr],
    });
    localStorage.setItem("notes", JSON.stringify(notesArr));
  };

  handleNoteTextChange(e) {
    this.setState({
      noteText: e.target.value,
    });
  }

  handleNoteTitleChange(e) {
    this.setState({
      noteTitle: e.target.value,
    });
  }

  handleEditTitleChange(e) {}

  handleIsNote = () => {
      this.setState({
          isNote: true
      })
  }

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        
       <Add handleSubmit={this.handleSubmit} isNote={this.state.isNote} handleIsNote={this.handleIsNote}/>

        {this.state.notes.map((note, index) => {
          return (
            <Note
              note={note}
              index={index}
              date={date}
              handleToggleShow={this.handleToggleShow}
              handleEdit={this.handleEdit}
              handleSubmit2={this.handleSubmit2}
              handleFav={this.handleFav}
              handleDel={this.handleDel}
            />
            
          );
        })}
        
      </div>
    );
  }
}
