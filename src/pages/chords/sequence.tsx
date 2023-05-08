import React from 'react';

import { ButtonPlayInSequence } from '../../components/PlayAndStop/ButtonPlay';
import { MdMusicOff } from 'react-icons/md';


import Form from '../../components/Form/Form';
import Nav from '../../components/Nav/Nav';
import Chords from '../../components/Chords/Chords';

const ChordsInSequence = () => {

    return (
        <>
            

            {/* CONTAINER */}
            <div className="container">
                
                <h1 className="title">ACORDES ORDENADOS</h1>

                {/* Acordes selecionados */}
                <Chords />

                {/* Formulario de tempo de troca */}
                <Form />

                {/* Acordes em troca */}
                <br /> <br /> <b id="chords"><MdMusicOff className="icon" /></b>

                {/* Botão de Iniciar */}
                <ButtonPlayInSequence />

            </div>

            {/* NAVBAR */}
            <Nav />
        </>
    );
};



export default ChordsInSequence;