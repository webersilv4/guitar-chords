import React from 'react';


import { ButtonPlay } from './components/PlayAndStop/ButtonPlay';
import { MdMusicOff } from 'react-icons/md';

import Form from './components/Form/Form';
import ButtonStop from './components/PlayAndStop/Stop';
import Nav from './components/Nav/Nav';
import Chords from './components/Chords/Chords';


function App() {
  

    return (
        <>
            <div className="container">

                <h1 className="title">ACORDES ALEATÓRIOS</h1>

                {/* Acordes selecionados */}
                <Chords />

                {/* Formulario de tempo de troca */}
                <Form />

                {/* Acordes em troca */}
                <br /> <br /> <b id="chords"><MdMusicOff className="icon" /></b>   

                {/* Botões de Iniciar e parar */}
                <ButtonPlay />
                <ButtonStop />

            </div>

            {/* NAVBAR */}
            <Nav />

        </>
    );
}

export default App;
