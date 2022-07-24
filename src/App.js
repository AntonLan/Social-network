import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div style={{minWidth: '100%', minHeight: '100%'}} className='container'>
                <div className='row g-0'>
                    <div className='col'>
                        <Header/>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-2'>
                        <NavBar/>
                    </div>
                    <div className={`profileColor col-10`}>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/dialogs/*" element={<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
