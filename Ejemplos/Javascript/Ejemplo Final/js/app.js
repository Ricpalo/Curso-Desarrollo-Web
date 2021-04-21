document.addEventListener('DOMContentLoaded', function(){
    eventos1();
    eventos2();
    eventos3();
    eventos4();
});

function eventos1(){
    const titulo = document.querySelector('h1');

    if(titulo){
        console.log('Existe');
    } else{
        console.log('No existe');
    }
}

function eventos2(){
    const titulo = document.querySelector('h1');

    // titulo.addEventListener('mouseover', function(){
    //     console.log('Mouse Encima');
    // });

    // titulo.addEventListener('mouseout', function(){
    //     console.log('Mouse Fuera');
    // });

    titulo.addEventListener('click', function(){
        console.log('Click Al Elemento');
    });
}

function eventos3(){
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

function eventos4(){
    const azul = document.querySelector('.azul');
    const verde = document.querySelector('.verde');
    const amarillo = document.querySelector('.amarillo');

    azul.addEventListener('click', function(){
        for(let i = 0; i < 2; i++){
            textoHola();
        }
    });

    verde.addEventListener('click', function(){
        for(let i = 0; i < 5; i++){
            textoHola();
        }
    });

    amarillo.addEventListener('click', function(){
        for(let i = 0; i < 10; i++){
            textoHola();
        }
    });
}

function textoHola(){
    const textoHola = document.createElement('P');
    textoHola.classList.add('texto');
    textoHola.textContent = 'Hola';

    document.querySelector('.textos').appendChild(textoHola);

    setTimeout(() => {
        textoHola.remove();
    }, 2000);
}