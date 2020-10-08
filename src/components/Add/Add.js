import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";
import AddNote from "../AddNote/AddNote";
import AddLink from "../AddLink/AddLink";
import AddForm from "../AddForm/AddForm";

export default class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
handleSubmit = () => {
    this.props.handleSubmit();
}

handleNote = () => {
    this.props.handleIsNote();
}

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                       {this.props.isNote && <Route  path="/main/note" component={()=> <AddNote handleSubmit={this.props.handleSubmit}/>}/>}
                        <Route  path="/main/link" component={AddLink}/>
                        <Route  path="/main/photo" component={AddNote}/>
                        <Route  path="/main/video" component={AddLink}/>
                        <Route  path="/main/sound" component={AddLink}/>

                        <div className="animate__animated animate__fadeIn">
        
        
          <div>
            <div className="centerContainer animate__animated animate__fadeIn">
              <div className="right50"></div>
              <div className="left50">
                <div className="noteHeader animate__animated animate__fadeIn">
                  {/* <div className="addTitle">Add...</div> */}
                </div>

                <div className="addBody animate__animated animate__fadeIn">
                  <div className="addText">
                  
                    <Link to="/main/note" onClick={this.handleNote} className={`${localStorage.getItem('accentColor')} noUnderLine`}>+ note</Link><span style={{color: "#cccccc"}}>, link</span><span style={{color: "#cccccc"}}>, photo</span><span style={{color: "#cccccc"}}>, sound</span><span style={{color: "#cccccc"}}>, video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
                        </Switch>
                </Router>
                
            </div>

        )
    }
}
