import React, { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      accentColor: localStorage.getItem("accentColor"),
      color: "",
      showHideButton: "hide",
      visibility: "visible",
      editTitle: "",
      editText: ""
    };
  
  }

  handleShowButton = (id) => {
    this.setState({
      visibility: this.state.visibility === "visible" ? "hidden" : "visible",
      showHideButton: this.state.showHideButton === "hide" ? "show" : "hide",
      height: this.state.visibility === "visible" ? "0.5rem" : "auto",
      color: this.state.visibility === "visible" ? this.state.accentColor : "",
    })
     
    this.props.handleToggleShow(id)
  }

handleEdit = (id, title, text) => {
  const { note, index, date } = this.props;
  this.props.handleEdit(id);
  this.setState({
    editTitle: note.title,
    editText: note.text,
  })
  console.log("edit title", note.title)
  console.log("edit text", note.text)
}

  render() {
    const { note, index, date } = this.props;
    const noteID = note.id;
    console.log(noteID)
    return (
      <div>
        <div className="animate__animated animate__fadeIn">
          {index % 2 === 0 ? (
            <div className="centerContainer animate__animated animate__fadeIn">
              <div className="left50">
                <div className="noteHeader">
                  <div className="noteId">
                    <div
                      onMouseEnter={this.handelMouseEnter}
                      className={`${localStorage.getItem("accentColor")} `}
                    >
                      Note {note.id}
                    </div>
                  </div>
                  <div className="noteTitle"><span className="editButton" onClick={()=>this.handleEdit(note.id, note.title, note.text)} >edit </span>{note.title}</div>
                </div>
                <div className="noteSubHeader">
                  <div className="noteDate toRight">{date}</div>
                </div>
                <div className="noteBody" style={{visibility: note.newNote ? "visible" : this.state.visibility, height: this.state.height}}>
                  <div className="noteText toRight" >
                    {note.text}
                    <span className={`${localStorage.getItem("accentColor")} `}>
                      <br />
                      unfoldꜜ
                    </span>
                  </div>
                </div>
                <div className="noteFooter" >
                  <div className="noteFav">
                    <div className={`${localStorage.getItem("accentColor")}`} style={{visibility: this.state.visibility}} >
                      Fav
                    </div>
                  </div>
                  <div className="noteHideShow" >
                    <span onClick={()=>this.handleShowButton(note.id)} className={`${localStorage.getItem("accentColor")} `}  style={{color: this.state.color}}>
                    {this.props.note.newNote ? "Hide" : this.state.showHideButton}
                    </span>
                  </div>
                </div>
              </div>
              <div className="right50"></div>
            </div>
          ) : (
            <div className="centerContainer animate__animated animate__fadeIn">
              <div className="right50"></div>
              <div className="left50">
                <div className="noteHeader">
                  <div className="noteId">
                    <div
                      onMouseEnter={this.handelMouseEnter}
                      className={`${localStorage.getItem("accentColor")} `}
                    >
                      Note {note.id}
                    </div>
                  </div>
                  <div className="noteTitle"><span onClick={()=>this.handleEdit(note.id)} style={{fontSize: "0.6rem", color: "lightgrey"}}>edit </span>{note.title}</div>
                </div>
                <div className="noteSubHeader">
                  <div className="noteDate toLeft">{date}</div>
                </div>
                <div className="noteBody" style={{visibility: note.newNote ? "visible" : this.state.visibility}}>
                
                  <div className="noteText toLeft">
                    {note.text}
                    <span className={`${localStorage.getItem("accentColor")} `}>
                      <br />
                      unfoldꜜ
                    </span>
                  </div>
                </div>
                <div className="noteFooter">
                  <div className="noteFav">
                    <div className={`${localStorage.getItem("accentColor")} `} >
                      Fav
                    </div>
                  </div>
                  <div className="noteHideShow">
                    <span onClick={()=>this.handleShowButton(note.id)} className={`${localStorage.getItem("accentColor")}`}  style={{color: `${this.state.color}`}}>
                    {this.props.note.newNote ? "Hide" : this.state.showHideButton}
                    { console.log("tutaj", note.id, note.newNote)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
