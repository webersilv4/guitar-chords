import React from 'react';

import { VscStopCircle } from 'react-icons/vsc';
import { stop } from '../../functions/index.f';


/**
 * 
 * @returns Botão que para a sequencia de acordes.
 */
export const ButtonStop = () => {
    
    return (
        <button onClick={()=> stop()} className="btn-stop">
            <VscStopCircle className="icon-btn" />
        </button>
    );
};


export default ButtonStop;