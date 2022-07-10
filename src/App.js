import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import Profile from "./component/Profile/Profile";


const App = () => {
    return (
        <div style={{minWidth: '100%', minHeight: '100%'}} className='container'>
            <div className='row g-0'>
                <div className='col' >
                    <Header/>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-2 '><NavBar/></div>
                <div className='col-10'><Profile/></div>
            </div>
        </div>
    );
}

export default App;
