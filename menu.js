document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('#menu-open').style.display = 'flex';
})

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#menu-open').style.display = 'none';
})