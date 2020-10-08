import React from 'react';
import "../Header/header.css";





export default class Header extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             projectName: "",
             authorName: "",
             accentColor: localStorage.getItem('accentColor'),
        }
    }
    

    componentDidMount() {
        const projectName = localStorage.getItem('projectName');
        const authorName = localStorage.getItem('authorName');
        const accentColor = localStorage.getItem('accentColor');
        this.setState({ projectName, authorName });
      }

    render() {
        return (<div className="mainContainer animate__animated animate__fadeIn" >

        <table >
            <tbody>
                <tr>
                <td><h1 className="center mainTitle uppercase">{this.state.projectName}</h1></td>
                    </tr>
                <tr>
                <td><h2 className={`center mainSubTitle ${this.state.accentColor}`}>in PROCESS</h2></td>
                    </tr>
                <tr>
                <td><h3 className="center mainAuthor"><span style={{fontSize: "0.6rem"}} className={`center mainSubTitle`}>by </span> {this.state.authorName}&nbsp;&nbsp;</h3></td>
                    </tr>
            </tbody>
        </table>
        
        
            
        </div>
    )
    }
}




