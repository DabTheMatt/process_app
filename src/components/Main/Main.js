import React from 'react';
import Header from "../Header/Header"
import TextNote from "../TextNote/TextNote";
import AddForm from "../AddForm/AddForm";
import PhotoNote from '../PhotoNote/PhotoNote';
import Footer from '../Footer/Footer';
import Add from "../Add/Add";



export default function Main() {
    return (
        <div className="animate__animated animate__fadeIn">
            <Header />
            <TextNote />
            <Footer />
        </div>
    )
}
