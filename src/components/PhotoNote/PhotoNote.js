import React, { Component } from 'react';
import "../../style.css";
import img4c from  "../../asets/photos/IMG_4c.jpg";
import img5c from  "../../asets/photos/IMG_5c.jpg";



var today = new Date();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthNumber = Number(today.getMonth()+1);
let monthName = monthNames[monthNumber];

console.log(monthName)
var date = monthName + " " + today.getDate() + ", " + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default class PhotoNote extends Component {
    render() {
        return (
            <div> 
        <div className="centerContainer animate__animated animate__fadeIn">
            <div className="left50">
                <div className="noteHeader">
                    <div className="noteId"><span className={`${localStorage.getItem('accentColor')} `}>note ID</span></div><div className="noteTitle">photo Title</div>
                </div>
                <div className="noteSubHeader">
                    <div className="noteDate toRight">{date}</div>
                </div>
                <div className="noteBody">
                    <div className="imageContainer"><img src={img4c} alt="Photo of wood"></img> </div>
                </div>
                <div className="noteFooter">
                    <div className="noteFav"><span className={`${localStorage.getItem('accentColor')} `}>Fav</span></div><div className="noteHideShow"><span className={`${localStorage.getItem('accentColor')} `}>Hide</span></div>
                </div>
            </div>
            <div className="right50"></div>
        </div>

        <div className="centerContainer">
        <div className="right50"></div>
            
        <div className="left50"><div className="noteHeader">
                <div className="noteTitle">photo Title</div><div className={`${localStorage.getItem('accentColor')} `}>note ID</div>
            </div>
            <div className="noteSubHeader">
                <div className="noteDate toLeft">may 14, 2020</div>
            </div>
            <div className="noteBody">
            <div className="imageContainer"><img src={img5c} alt="Photo of wood"></img> </div>

            </div>
            <div className="noteFooter">
                <div className={`${localStorage.getItem('accentColor')} `}>Fav</div><div className={`${localStorage.getItem('accentColor')} `}>Hide</div>
            </div>
        </div>
        </div>
        </div>
        )
    }
}
