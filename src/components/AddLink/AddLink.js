import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";


export default class AddLink extends Component {
    render() {
        return (
            <div>
                <div>
            <div className="centerContainer animate__animated animate__fadeIn">
              <div className="right50"></div>
              <div className="left50">
                <form onSubmit={this.handleSubmit} className="animate__animated animate__fadeIn">
                  <input onChange={this.handleNoteTitleChange} className="formText"
                    type="text"
                    name="AddNoteTitle"
                    placeholder="Link title"
                    
                  />
                  <textarea onChange={this.handleNoteTextChange} style={{height: "2rem"}}
                    name="AddNoteText"
                    placeholder="link..."
                    
                  />
                  
                  <div className="spaceBetwen">
                    <button className="formButtons" onClick={this.handleBack}><Link to="/main">go back</Link></button>
                    <button  className="formButtons" type="submit">add Link</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
