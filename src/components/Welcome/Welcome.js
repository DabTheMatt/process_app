import React, { Component } from "react";
//import "../Welcome/welcome.css";
import { NavLink, HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Main/Main";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      authorName: "",
      accentColor: "",
      red: "red",
      gold: "gold",
      blue: "blue",
      green: "green",
      bw: "bw",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlue = this.handleBlue.bind(this);
    this.handleRed = this.handleRed.bind(this);
    this.handleGreen = this.handleGreen.bind(this);
    this.handleGold = this.handleGold.bind(this);
    this.handleBW = this.handleBW.bind(this);
  }

  handleBlue() {
    this.setState({
        bw: "bw",
      blue: "blue2",
      gold: "gold",
      red: "red",
      green: "green",
      accentColor: "blue",
    });
  }

  handleGreen() {
    this.setState({
      bw: "bw",
      blue: "blue",
      gold: "gold",
      red: "red",
      green: "green2",
      accentColor: "green",
    });
  }

  handleGold() {
    this.setState({
      bw: "bw",

      blue: "blue",
      gold: "gold2",
      red: "red",
      green: "green",
      accentColor: "gold",
    });
  }
  handleRed() {
    this.setState({
      bw: "bw",

      blue: "blue",
      gold: "gold",
      red: "red2",
      green: "green",
      accentColor: "red",
    });
  }

  handleBW() {
    this.setState({
      blue: "blue",
      gold: "gold",
      red: "red",
      green: "green",
      bw: "bw2",
      accentColor: "bw",
    });
  }

  handleNameChange(e) {
    this.setState({
      projectName: e.target.value,
    });
  }

  handleAuthorChange(e) {
    this.setState({
      authorName: e.target.value,
    });
  }

  handleSubmit = () => {
    const { projectName, authorName, accentColor } = this.state;
    localStorage.setItem("projectName", projectName);
    localStorage.setItem("authorName", authorName);
    localStorage.setItem("accentColor", this.state.accentColor);
  };

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="animate__animated animate__fadeIn fullVp fade-in animate__slow">
            <form className="welcomForm">
              <table className="welcomeTable">
                <tbody>
                  <tr><td><h1 className="toCenter" style={{fontSize: "5rem", marginBottom: "4rem" }}>PROCESS</h1></td></tr>
                  <tr><td></td></tr>
                  <tr>
                    <td className="welcomeTable">
                      <input
                        onChange={this.handleNameChange}
                        value={this.state.projectName}
                        className="fullW  welcomeTypeInput"
                        type="text"
                        name="Project Name"
                        placeholder="Project Name"
                        
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        onChange={this.handleAuthorChange}
                        value={this.state.authorName}
                        className="fullW welcomeInput welcomeTypeInput"
                        type="text"
                        name=" Author Name"
                        placeholder="Your Name"
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="toCenter height20">
                        <br />
                        <p className="fullW welcomeInput welcomeTypeInput">
                          Choose accent color
                        </p>
                        <div className="height20">
                          <span
                            onClick={this.handleRed}
                            className={`dot-${this.state.red} animate__animated  animate__zoomIn animate__slow`}
                          ></span>
                          <span
                            onClick={this.handleGold}
                            className={`dot-${this.state.gold} animate__animated  animate__zoomIn animate__fast`}
                          ></span>
                          <span
                            onClick={this.handleGreen}
                            className={`dot-${this.state.green} animate__animated  animate__zoomIn animate__faster`}
                          ></span>
                          <span
                            onClick={this.handleBlue}
                            className={`dot-${this.state.blue} animate__animated  animate__zoomIn animate__fast`}
                          ></span>
                          <span
                            onClick={this.handleBW}
                            className={`dot-${this.state.bw} animate__animated  animate__zoomIn animate__slow`}
                          ></span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="welcomeTable">
                      <br />
                      <Route path={"/main"} component={Main} />
                      <div className="toCenter" onClick={this.handleSubmit}>
                        <NavLink
                          className="formButton welcomeInput welcomeButton welcomeTypeInput sendButton"
                          to={"/main"}
                        >
                          ENTER
                        </NavLink>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </form>
            
          </div>
        </Switch>
      </Router>
    );
  }
}
