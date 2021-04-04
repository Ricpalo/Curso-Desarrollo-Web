document.addEventListener('DOMContentLoaded', function(){
    eventos();
});

function eventos(){
    const titulo = document.querySelector('h1');

    titulo.addEventListener('click', function(){

        const textoHola = document.createElement('P');
        textoHola.classList.add('texto');
        textoHola.textContent = 'Hola';

        document.querySelector('.textos').appendChild(textoHola);

        setTimeout(() => {
            textoHola.remove();
        }, 2000);
    });
}