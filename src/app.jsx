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


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/home"  element={<Navigate to="/" replace />}  />
                    <Route path='/book/:index' element={<Book />} />
                    <Route path='/fav' element={<Favorites />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='*' element={<h1>Error page</h1>} />
                    <Route path='section/:sec' element={<Sections />} />
                </Routes>
            </>
        );
    }
}

export default App;