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
            <div className="container text-center">

                <h1 className="text-white m-5">ACORDES ALEATÓRIOS</h1>

                {/* Acordes selecionados */}
                <Chords />

                {/* Formulario de tempo de troca */}
                <Form />

                {/* Acordes em troca */}
                <br /> <br /> 
                <b id="chords" className='text-default font-55'>
                    <MdMusicOff className="icon font-55" />
                </b>   

                {/* Botões de Iniciar e parar */}

                <div className='d-flex justify-content-center'>
                    <div>
                        <ButtonPlay />
                        <p className='text-green-dft'>Play</p>
                    </div>
                    <div>
                        <ButtonStop />
                        <p className='text-danger'>Pausa</p>
                    </div>
                </div>

            </div>

            {/* NAVBAR */}
            <Nav />

        </>
    );
}

export default App;
