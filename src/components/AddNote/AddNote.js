import React, { Component } from "react";
import {HashRouter as Router, Link, Switch, Route} from "react-router-dom";
import Add from "../Add/Add";
import "../../style.css";


let id=0;
export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNoteSelected: "false",
      isLinkSelected: "false",
      noteTitle: "",
      noteText: "",
      notes: [],
      noteId: "",
      whatSelected: "",
      
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNoteTitleChange = this.handleNoteTitleChange.bind(this);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);

  }

  componentDidMount() {
    
    localStorage.getItem("notes")
      ? this.setState({
          notes: JSON.parse(localStorage.getItem("notes"))
        })
      : this.setState({
          notes: []
        });


        
  }

  handleNote = () => {
    
    this.setState({
      isNoteSelected: "true",
      noteTitle: "",
      noteText: "",
      whatSelected: "note"
    });
  }

  handleLink = () => {
    this.setState({
      isLinkSelected: "true",
      whatSelected: "link"
    })
    

  }

  handleBack() {
    this.setState({
      isNoteSelected: "false",
      isPhotoSelected: "false"
    });
  }


  handleSubmit = (e) => {
   //e.preventDefault();
   e.stopPropagation();
    this.props.handleSubmit(this.state.noteTitle, this.state.noteText, e);
    console.log("działa");
    //this.props.history.push("/main");
    

    
    /* let notesArr = this.state.notes;
    notesArr.push({
      title: this.state.noteTitle,
      text: this.state.noteText,
      id: this.state.noteId + 1
    });
    this.setState({
      notes: [...notesArr]
    });
    console.log("na", notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    this.setState({
      
        noteId: this.state.noteId + +1
      
    });
    */
    this.setState({
      isNoteSelected: "false",
    }); 
};

  handleNoteTextChange (e) {
    this.setState({
      noteText: e.target.value
    })
  }

  handleNoteTitleChange (e) {
    this.setState({
      noteTitle: e.target.value
    })
  }



  render() {


    return (
      
          <div>
              
                  
            <div className="centerContainer animate__animated animate__fadeIn">
              <div className="right50"></div>
              <div className="left50">
                <form  /* onSubmit={this.handleSubmit} */ className="animate__animated animate__fadeIn">
                  <input onChange={this.handleNoteTitleChange} className="formText"
                    type="text"
                    name="AddNoteTitle"
                    placeholder="Note title"
                    value={this.state.noteTitle}
                  />
                  <textarea onChange={this.handleNoteTextChange}
                    name="AddNoteText"
                    placeholder="note..."
                    value={this.state.noteText}
                  />
                  
                  
                  <div className="spaceBetwen">
                    <button className="formButtons" onClick={this.handleBack}>go back</button>
                    <button className="formButtons" onClick={this.handleSubmit}>add note</button>

                    </div>
                </form>
              </div>
            </div>
            
          </div>
        )}
      
    
  
}
