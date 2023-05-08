import React from 'react';
import { addNewChord, removeOneChord } from '../../functions/index.f';


const chordsInSequence = JSON.parse(localStorage.getItem('chords-in-sequence') as string);

/**
 * 
 * @returns Navegação entre as páginas.
 */
export const Chords = () => {
    
    return (
        <nav>

            {/* ADD Chords */}
            <div className="navbar-chords">
            
                <button id="chord-1" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Lá">
                A - Lá
                </button>

                <button id="chord-2" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Sol">
                G - Sol
                </button>

                <button id="chord-3" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Fá">
                F - Fá
                </button>

                <button id="chord-4" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Dó">
                C - Dó
                </button>

                <button id="chord-5" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Mi">
                E - Mi
                </button>

                <button id="chord-6" className="btn-add" 
                    onClick={(e) => {addNewChord(e);}} value="Ré">
                D - Ré
                </button>

            </div>


            <div>

                {chordsInSequence.map((item: string, key: number)=>(
                    <button id="chord-6" className="btn-add" key={key} 
                        onClick={(e) => {removeOneChord(e);}} value={key}>
                        {item}
                    </button>
                ))}
            </div>
        
            {/* BTN REMOVE CHORDS */}
            <div className="navbar-chords">
                <b id="chords-sequence"></b>
            </div>

        </nav>
    );
};


export default Chords;