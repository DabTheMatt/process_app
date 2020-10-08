import React from "react";
import "../../style.css";
import AddForm from "../AddForm/AddForm";

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

console.log(monthName);
var date = monthName + " " + today.getDate() + ", " + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let notes = [];

export default class TextNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNoteSelected: "false",
      noteTitle: "",
      noteText: "",
      notes: [],
      noteId: 1,
      isLeft: true,
      accentColor: localStorage.getItem("accentColor"),
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNoteTitleChange = this.handleNoteTitleChange.bind(this);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
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

  handleHide(e) {
    console.log("hide");
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

  handleSubmit = (e) => {
    //e.preventDefault();

    let notesArr = this.state.notes;
    notesArr.unshift({
      title: this.state.noteTitle,
      text: this.state.noteText,
      id: this.state.noteId,
      hide: false,
    });
    this.setState({
      notes: [...notesArr],
      isLeft: this.state.isLeft != this.state.isLeft,
    });
    console.log("na", notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    this.setState({
      noteId: this.state.noteId + +1,
    });
    this.setState({
      isNoteSelected: "false",
    });
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

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        <div>
          {this.state.isNoteSelected === "false" ? (
            <div>
              <div className="centerContainer animate__animated animate__fadeIn">
                <div className="right50"></div>
                <div className="left50">
                  <div className="noteHeader">
                    <div className="addTitle animate__animated animate__fadeIn">
                      Add...
                    </div>
                  </div>

                  <div className="addBody animate__animated animate__fadeIn">
                    <div className="addText">
                      <span
                        onClick={this.handleClick}
                        className={`${localStorage.getItem("accentColor")} `}
                      >
                        note
                      </span>
                      ,
                      <span
                        className={`${localStorage.getItem("accentColor")} `}
                      >
                        {" "}
                        link
                      </span>
                      ,
                      <span
                        className={`${localStorage.getItem("accentColor")} `}
                      >
                        {" "}
                        photo
                      </span>
                      ,
                      <span
                        className={`${localStorage.getItem("accentColor")} `}
                      >
                        {" "}
                        video
                      </span>
                      ,
                      <span
                        className={`${localStorage.getItem("accentColor")} `}
                      >
                        {" "}
                        sound
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate__animated animate__fadeIn">
              <div className="centerContainer animate__animated animate__fadeIn">
                <div className="right50"></div>
                <div className="left50">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      onChange={this.handleNoteTitleChange}
                      className="formText"
                      type="text"
                      name="AddNoteTitle"
                      placeholder="Note title"
                      value={this.state.noteTitle}
                    />
                    <textarea
                      onChange={this.handleNoteTextChange}
                      name="AddNoteText"
                      placeholder="note..."
                      value={this.state.noteText}
                    />
                    <br />

                    <div className="spaceBetwen">
                      <button className="formButtons" onClick={this.handleBack}>
                        go back
                      </button>
                      <button className="formButtons" type="submit">
                        add Note
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {this.state.notes.map((note, index) => {
          return (
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
                      <div className="noteTitle">{note.title}</div>
                    </div>
                    <div className="noteSubHeader">
                      <div className="noteDate toRight">{date}</div>
                    </div>
                    <div className="noteBody">
                      <div className="noteText toRight">
                        {note.text}
                        <span
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          <br />
                          unfoldꜜ
                        </span>
                      </div>
                    </div>
                    <div className="noteFooter">
                      <div className="noteFav">
                        <div
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          Fav
                        </div>
                      </div>
                      <div className="noteHideShow" onClick={this.handleHide}>
                        <span
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          Hide
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="right50"></div>
                </div>
              ) : (
                <div className="centerContainer">
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
                      <div className="noteTitle">{note.title}</div>
                    </div>
                    <div className="noteSubHeader">
                      <div className="noteDate toLeft">{date}</div>
                    </div>
                    <div className="noteBody">
                      <div className="noteText toLeft">
                        {note.text}
                        <span
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          <br />
                          unfoldꜜ
                        </span>
                      </div>
                    </div>
                    <div className="noteFooter">
                      <div className="noteFav">
                        <div
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          Fav
                        </div>
                      </div>
                      <div className="noteHideShow">
                        <span
                          className={`${localStorage.getItem("accentColor")} `}
                        >
                          Hide
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

/* export default function TextNote() {
    return (
        <div> 
        <div className="centerContainer">
            <div className="left50">
                <div className="noteHeader">
                    <div className="noteId"><span className="hover">note ID</span></div><div className="noteTitle">note Title</div>
                </div>
                <div className="noteSubHeader">
                    <div className="noteDate toRight">{date}</div>
                </div>
                <div className="noteBody">
                    <div className="noteText toRight"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus tristique pharetra. Proin non sapien nisl. Sed fermentum, tortor sit amet porta bibendum, mi nulla euismod tellus, eget maximus turpis velit in ipsum. Ut aliquam, purus eget efficitur pulvinar, nisi sem mollis neque, nec elementum massa metus id quam. Integer vel dignissim qui. Ut tempus sapien nisi, in fringilla urna ultricies quis. Nulla sodales imperdiet augue at ultrices… <span className="noteFoldUnfold">unfoldꜜ</span></div>
                </div>
                <div className="noteFooter">
                    <div className="noteFav"><span className="hover">Fav</span></div><div className="noteHideShow"><span className="hover">Hide</span></div>
                </div>
            </div>
            <div className="right50"></div>
        </div>

        <div className="centerContainer">
        <div className="left50"></div>
            
        <div className="right50"><div className="noteHeader">
                <div className="noteTitle">note Title</div><div className="noteId">note ID</div>
            </div>
            <div className="noteSubHeader">
                <div className="noteDate toLeft">may 14, 2020</div>
            </div>
            <div className="noteBody">
                <div className="noteText toLeft"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus tristique pharetra. Proin non sapien nisl. Sed fermentum, tortor sit amet porta bibendum, mi nulla euismod tellus, eget maximus turpis velit in ipsum. Ut aliquam, purus eget efficitur pulvinar, nisi sem mollis neque, nec elementum massa metus id quam. Integer vel dignissim qui. Ut tempus sapien nisi, in fringilla urna ultricies quis. Nulla sodales imperdiet augue at ultrices… unfoldꜜ</div>
            </div>
            <div className="noteFooter">
                <div className="noteFav">Fav</div><div className="noteHideShow">Hide</div>
            </div>
        </div>
        </div>
        </div>
    )
} */
