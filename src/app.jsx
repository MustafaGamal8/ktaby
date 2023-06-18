import React, { Component } from 'react';
import Loding from './components/loading';
import NavBar from './components/navbar';
import './css/main.css'

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/book';
import Favorites from './pages/fav';
import Help from './pages/help';
import Sections from './pages/sections';
import OtherWebSites from './components/otherWeb';
import Me from './components/me';
import Footer from './components/footer';

class App extends Component {
    state = {
        loader: true
    }
    render() {



        if (this.state.loader === true) {
            setTimeout(() => {
                const loader = false
                this.setState({ loader })
            }, 2000);
            return (
                <>
                    <Loding />
                </>
            )

        }




        return (
            <>

                <NavBar />

            <div style={{"height":"100%"}}>
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/home"  element={<Navigate to="/" replace />}  />
                    <Route path='/book/:index' element={<Book />} />
                    <Route path='section/:sec' element={<Sections />} />
                    <Route path='/fav' element={<Favorites />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/me' element={<Me />} />
                    <Route path='/otherwebsites' element={<OtherWebSites />} />
                    <Route path='*' element={<h1 className='text-center text-4xl mt-10 '>Error page <br />حدث خطأ</h1>} />
                </Routes>
            </div>


                <Footer  />
            </>
        );
    }
}

export default App;