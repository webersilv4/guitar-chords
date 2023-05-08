import React from 'react';

import { MdQueueMusic, MdMusicNote } from 'react-icons/md';


/**
 * 
 * @returns Navegação entre as páginas.
 */
export const Nav = () => {
    
    return (
        <nav className="navbar">

            <a href="/" className="active">
                <MdMusicNote />
            </a>

            <a href="/sequence">
                <MdQueueMusic />
            </a>
        </nav>
    );
};


export default Nav;