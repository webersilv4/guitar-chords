let time = 0;
export const getTime = () => {

    time = document.getElementById('time').value;

    if (time >= 1) localStorage.setItem('time', time + '000');
    else localStorage.setItem('time', 4000);

    location.reload();
};