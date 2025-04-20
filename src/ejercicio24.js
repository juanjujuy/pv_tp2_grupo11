const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const nuevoColor = 'lightblue';
    document.body.style.backgroundColor = nuevoColor;
    console.log(`Color de fondo cambiado a: ${nuevoColor}`);

});
