import React, { Component } from "react";
import isun from  "../../asets/photos/sun.png";
import isnow from  "../../asets/photos/snow.png";
import irain from  "../../asets/photos/rain.png";
import isuncloud from  "../../asets/photos/suncloud.png";

let suncloud = isuncloud;
let sun = isun;
let rain = irain;
let snow = isnow;

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
      editText: "",
      inEdit: true,
      isFav: true,
      favColor: "",
      fav: "",
      blue: "#6fa8dc",
      red: "#e06666",
      gold: "#bf9000",
      bw: "#999999",
      green: "#93c47d",
      weather: "",
      isDel: true,
      delClass: ""
    
    };
  }

componentDidMount = () => {

  this.handleEdit = (id) => {
    const {note} = this.props;

    this.setState({
      editTitle: note.title,
      editText: note.text,
      inEdit: note.inEdit ? false : true,
      actualId: note.id,
    });
    this.props.handleEdit(id);
   
  };
  /* const { note, index, date } = this.props; */
  
  /* if (note.weather === "snow") {
  this.setState({
    weather: 
    <img src={snow}  style={{height: "0.9rem", marginRight: "0.3rem"}}/>
  })
} else if (note.weather === "sun") {
  this.setState({
    weather: 
    <img src={sun}  style={{height: "0.9rem", marginRight: "0.3rem"}}/>
  })
} else if (note.weather === "rain") {
  this.setState({
    weather: 
    <img src={rain}  style={{height: "0.9rem", marginRight: "0.3rem"}}/>
  })
} else if (note.weather === "suncloud") {
  this.setState({
    weather: 
    <img src={suncloud}  style={{height: "0.9rem", marginRight: "0.3rem"}}/>
  })
} */
}

  handleShowButton = (id) => {
    this.setState({
      visibility: this.state.visibility === "visible" ? "hidden" : "visible",
      showHideButton: this.state.showHideButton === "hide" ? "show" : "hide",
      height: this.state.visibility === "visible" ? "0.5rem" : "auto",
      color: "grey"
        /* this.state.visibility === "visible"
          ? localStorage.getItem("accentColor")
          : "", */
    });
    
    

    this.props.handleToggleShow(id);
  };

  

  handleEditTitleChange = (e) => {
    this.setState({
      editTitle: e.target.value,
    });
  };

  handleEditTextChange = (e) => {
    this.setState({
      editText: e.target.value,
    });
  };

  handleSubmit2 = (title, text, id) => {
    
    this.props.handleSubmit2(title, text, id);
  };

  handleDel = (id) => {
    const { note } = this.props;
    this.setState({
      isDel: note.isDelete ? true : false,
      delClass: this.state.isDel ? "deleted" : "",
    });

    this.props.handleDel(id);
  }

  handleFav = (id) => {
    const { note } = this.props;
    this.setState({
      isFav: note.isFav ? true : false,
      fav: this.state.isFav ? "fav" : "",
    });
    if (this.state.accentColor === "blue") {
      this.setState({
        favColor: this.state.isFav ? this.state.blue : "yellow",
      });
    } else if (this.state.accentColor === "green") {
      this.setState({
        favColor: this.state.isFav ? this.state.green : "",
      });
    } else if (this.state.accentColor === "gold") {
      this.setState({
        favColor: this.state.isFav ? this.state.gold : "",
      });
    } else if (this.state.accentColor === "red") {
      this.setState({
        favColor: this.state.isFav ? this.state.red : "",
      });
    } else if (this.state.accentColor === "bw") {
      this.setState({
        favColor: this.state.isFav ? this.state.bw : "",
      });
    }

    this.props.handleFav(id);
  };

  

  

  render() {



    const { note, index, date } = this.props;
    const noteID = note.id;
    console.log("note w", note.weather)
    return (
                <div>
                  <div className="animate__animated animate__fadeIn">
                    
                    {this.state.inEdit ? (
                      <div className="centerContainer animate__animated animate__fadeIn">
                        <div className="left50">
                          <div className="noteHeader">
                            <div className="noteId">
                              <div
                                onMouseEnter={this.handelMouseEnter}
                                className={`${localStorage.getItem("accentColor")} ${this.state.delClass}`}
                              >
                                note {note.id}
                              </div>
                            </div>
                            <div className={`noteTitle ${this.state.delClass}  animate__animated animate__fadeIn`}><img src={eval(note.weather)} style={{height: "0.9rem", marginRight: "0.3rem"}}/>
                            {note.title}
                              <i
                                className={`${this.state.fav} `}
                                style={{ background: this.state.favColor }}
                              ></i>
                            </div>
                          </div>
                          <div className="noteSubHeader">
                            <div className={`noteDate toLeft ${this.state.delClass}`}>{date}</div>
                          </div>
                          <div
                            className="noteBody"
                            style={{
                              visibility: note.newNote
                                ? "visible"
                                : this.state.visibility,
                              height: this.state.height,
                            }}
                          >
                            <div className={`noteText toLeft ${this.state.delClass}`}>
                              

                              {note.text}
                              <span className={` b ${localStorage.getItem("accentColor")} `}
                               style={{fontSize: "0.6rem"}}
                                onClick={() =>
                                  this.handleEdit(note.id, note.title, note.text)
                                }
                              
                              >
                                {" "}
                                | edit{" "}
                              </span>
                            </div>
                          </div>
                          <div className="noteFooter">
                            <div className="noteFav">
                              <div>
                                <span className={`${localStorage.getItem("accentColor")}`}
                                onClick={() => this.handleFav(note.id)}
                                style={{ visibility: this.state.visibility}}>mark</span><span style={{ visibility: this.state.visibility}}>{` / `}</span><span style={{ visibility: this.state.visibility}} className={`${localStorage.getItem("accentColor")}`} onClick={()=>this.handleDel(note.id)} >remove</span>
                              </div>
                            </div>
                            <div className="noteHideShow">
                              <span
                                onClick={() => this.handleShowButton(note.id)}
                                className={`${localStorage.getItem("accentColor")} `}
                                style={{ color: this.state.color }}
                              >
                                {this.props.note.newNote
                                  ? "hide"
                                  : this.state.showHideButton}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="right50"></div>
                      </div>
                    ) : (
                      <div>
                        <div className="centerContainer animate__animated animate__fadeIn">
                          <div className="right50"></div>
                          <div className="left50">
                            <form
                              onClick={() =>
                                this.handleSubmit2(
                                  this.state.editTitle,
                                  this.state.editText,
                                  this.state.actualId
                                )
                              }
                              className="animate__animated animate__fadeIn"
                            >
                              <input
                                onChange={this.handleEditTitleChange}
                                className="formText"
                                type="text"
                                name="AddNoteTitle"
                                //placeholder="Note title"
                                value={this.state.editTitle}
                              />
                              <textarea
                                onChange={this.handleEditTextChange}
                                className="formText"
                                name="AddNoteText"
                                placeholder="note..."
                                value={this.state.editText}
                              />

                              <div className="spaceBetwen">
                                <div  >
                                  
                                </div>
                                <button
                                  className="formButtons"
                                  type="submit"
                                  onClick={() =>
                                    this.handleEdit(note.id, note.title, note.text)
                                  }
                                >
                                  finish editing
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
    );
  }
}
