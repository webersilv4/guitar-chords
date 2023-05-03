import React, { useState } from 'react';

function App() {
            
    let chords: any;
    let time = 0;

    const getTime = () => {

        time = document.getElementById('time').value;

        if (time >= 1) localStorage.setItem('time', time + '000');
        else localStorage.setItem('time', 4000);

        location.reload();
    };

    const start = () => {

        time = localStorage.getItem('time') ? localStorage.getItem('time') : 4000;

        chords = setInterval(() => {
            const chords = ['D (Ré)', 'A (Lá)', 'E (Mi)'];
            const chord = Math.floor(Math.random() * chords.length);

            document.getElementById('chords').innerText = chords[chord];

        }, time);
    };

    const stop = () => {
        clearInterval(chords);
    };

    return (
        <>
            <div className="container">

                <form id="formTime" onSubmit={getTime}>
                    <input type="number" placeholder="Ex: 5" id="time" className="form-input" />
                    <input type="submit" value="Definir tempo" className="btn-submit" />
                </form>

                <h1 className="title">ACORDES ALEATÓRIOS</h1>
        
                <br /> <br />
                <b id="chords">Olá</b>   


                <div>
                    <button id="stop" className="btn-stop" onClick={stop}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                            strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="10" y1="15" x2="10" y2="9"></line>
                            <line x1="14" y1="15" x2="14" y2="9"></line>
                        </svg>
                    </button>
        
                    <button id="stop" className="btn-start" onClick={start}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                            strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                    </button>
                </div>

            </div>

            <nav className="navbar">

                <a href="/" className="active">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
                        <path fillRule="evenodd" d="M9 3v10H8V3h1z"></path>
                        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"></path>
                    </svg>
                </a>

                <a href="/sequence.html">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
                        <path fillRule="evenodd" d="M12 3v10h-1V3h1z"></path>
                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"></path>
                        <path fillRule="evenodd"
                            d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z">
                        </path>
                    </svg>
                </a>
            </nav>

            <button  className="btn-full-screen">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z">
                    </path>
                </svg>
            </button>
        </>
    );
}

export default App;
