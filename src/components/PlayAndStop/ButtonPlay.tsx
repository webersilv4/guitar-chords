import React from 'react';

import { VscDebugStart } from 'react-icons/vsc';
import { start, startChordInSequence } from '../../functions/index.f';


/**
 * 
 * @returns Botão que inicia a sequencia de acordes ordenados.
 */
export const ButtonPlayInSequence = () => {
    
    return (
        <button onClick={()=> startChordInSequence()} className="btn-start">
            <VscDebugStart className="icon-btn" />
        </button>
    );
};

/**
 * 
 * @returns Botão que inicia os acordes aleatorios.
 */
export const ButtonPlay = () => {
    
    return (
        <button onClick={()=> start()} className="btn-start">
            <VscDebugStart className="icon-btn" />
        </button>
    );
};




// export default ButtonPlayInSequence;