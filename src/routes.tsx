import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './Pages/Home/Home';
import App from './App';
import ChordsInSequence from './pages/chords/sequence';
import NotFound from './pages/errors/notfound';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path='/' 
                    element={ <App /> } />

                <Route 
                    path='/sequence' 
                    element={ <ChordsInSequence /> } />
                   
                <Route 
                    path='/*' 
                    element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;