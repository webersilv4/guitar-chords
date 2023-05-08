/**
 * VARIAVEIS GLOBAIS
 */

// Nome dado ao setInterval que com os dados dos acordes
let chords: NodeJS.Timer;

// Pega do localstorage o tempo de troca
const currentChordTime = localStorage.getItem('time') ? Number(localStorage.getItem('time')) : 4000;

// Recebe os acordes
const arrayChords: Array<string> = JSON.parse(localStorage.getItem('chords-in-sequence') as string);


/**
 * FIM DAS VARIAVEIS GLOBAIS
 */



// Pega o tempo definido pelo usuario para troca de acordes
export const getTime = (time: number) => {
    
    if (time >= 1) localStorage.setItem('time', time + '000');
    else localStorage.setItem('time', '4000');

    location.reload();
};

// Da play na troca de acordes
export const start = () => {

    chords = setInterval(() => {
        const chord = Math.floor(Math.random() * arrayChords.length);
        
        (document.getElementById('chords') as HTMLInputElement).innerText = arrayChords[chord];

    }, currentChordTime);
};

// Da o play nos acordes em sequencia. 
export const startChordInSequence = () => {
  
    const sleep = (ms: number) =>
        new Promise(res => {
            setTimeout(res, ms);
        });

    const myPromise = (chord: string) =>
        sleep(currentChordTime).then(() => {
            (document.getElementById('chords') as HTMLInputElement).innerText = chord;
        });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const forEachSeries = async (iterable: Array<string>, action: any) => {
        for (const x of iterable) {
            await action(x);
        }
    };

    forEachSeries(arrayChords, myPromise)
        .then(async () => {
            for (let index = 0; index < 1000000000000; index++) {
                await forEachSeries(arrayChords, myPromise);
            }
        });
};

// Para com a troca de acordes
export const stop = () => {
    clearInterval(chords);
};

// Adicionando acordes
export const addNewChord = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    arrayChords.push(event.currentTarget.value);
    localStorage.setItem('chords-in-sequence', JSON.stringify(arrayChords));
    location.reload();
};

// Remove um acorde especifico da lsita de acordes
export const removeOneChord = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = Number(event.currentTarget.value);

    arrayChords.splice(element, 1);
    localStorage.setItem('chords-in-sequence', JSON.stringify(arrayChords));
    location.reload();
};


// Função auto executavel que lista os acordes selecionados pelo usuario
(async () => {
    if (!arrayChords) {
        localStorage.setItem('chords-in-sequence', JSON.stringify([]));
        location.reload();
    }
})();