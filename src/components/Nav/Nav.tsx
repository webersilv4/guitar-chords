import React from 'react';

import { MdQueueMusic, MdMusicNote } from 'react-icons/md';


/**
 * 
 * @returns Navegação entre as páginas.
 */
export const Nav = () => {
    
    return (
        <nav className="mt-5 d-flex justify-content-center navbar-fixed">

            <a href="/" className="m-2 text-warning">
                Aleatórios
                <MdMusicNote className='font-30'/>
            </a>

            <a href="/sequence" className='m-2 text-warning'>
                Ordenados
                <MdQueueMusic className='font-30'/>
            </a>
        </nav>
    );
};


export default Nav;