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
            <div className="container text-center">
                
                <h1 className="text-white m-5">ACORDES ORDENADOS</h1>

                {/* Acordes selecionados */}
                <Chords />

                {/* Formulario de tempo de troca */}
                <Form />

                {/* Acordes em troca */}
                <br /> <br /> 
                <b id="chords"  className='text-default font-55'>
                    <MdMusicOff className="icon font-55" />
                </b>

                {/* Botão de Iniciar */}
                <div className=''>
                    <ButtonPlayInSequence />
                    <p className='text-green-dft'>Play</p>
                </div>

            </div>

            {/* NAVBAR */}
            <Nav />
        </>
    );
};



export default ChordsInSequence;