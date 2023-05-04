const currentChordTime = localStorage.getItem('time') ? Number(localStorage.getItem('time')) : 4000;
let chords: any;
export const getTime = (time: number) => {
    
    if (time >= 1) localStorage.setItem('time', time + '000');
    else localStorage.setItem('time', '4000');

    location.reload();
};


export const start = () => {

    

    chords = setInterval(() => {
        const chords = ['D (Ré)', 'A (Lá)', 'E (Mi)'];
        const chord = Math.floor(Math.random() * chords.length);

        document.getElementById('chords').innerText = chords[chord];

    }, currentChordTime);
};