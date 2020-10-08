import React from "react";
import "../Footer/footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accentColor: "",
      red: "red",
      gold: "gold",
      blue: "blue",
      green: "green",
      bw: "bw",
      about: false
    };

    this.handleBlue = this.handleBlue.bind(this);
    this.handleRed = this.handleRed.bind(this);
    this.handleGreen = this.handleGreen.bind(this);
    this.handleGold = this.handleGold.bind(this);
  }

handleClick = () => {
  this.setState({
    about: this.state.about ? false : true
  })
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

  render() {
    return (<div>
      
      <div className="height20  fullW toCenter">
      
        <div onClick={this.handleClick} className="inlineBlock bottom3rem">
          <span className={`dot-${this.state.red}`}></span>
          <span className={`dot-${this.state.gold}`}></span>
          <span className={`dot-${this.state.green}`}></span>
          <span className={`dot-${this.state.blue}`}></span>
          <span className={`dot-${this.state.bw}`}> </span>
        </div>
        
      
        <div onClick={this.handleClick} className="   thin" >
          <div  style={{fontSize: "0.6rem", color: "#cccccc", lineHeight: "1rem", marginBottom: "2rem"}}>Sit down, take a deep breath and create.<br/>
        PROCESS will organize your thoughts,

        and present your creative process.<br/>
        The most important is not the end result, but the questions you'll ask along the way.</div></div>
      
      
      </div>
      </div>
    );
  }
}
