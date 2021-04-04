document.addEventListener('DOMContentLoaded', function(){
    darkMode();
});

function darkMode(){
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const dark = document.querySelector('.dark');
    const light = document.querySelector('.light');

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
        light.classList.add('oculto');
    } else{
        document.body.classList.remove('dark-mode');
        dark.classList.add('oculto');
    }

    light.addEventListener('click', function(){
        dark.classList.toggle('oculto');
        light.classList.toggle('oculto');
        document.body.classList.toggle('dark-mode');
    });

    dark.addEventListener('click', function(){
        dark.classList.toggle('oculto');
        light.classList.toggle('oculto');
        document.body.classList.toggle('dark-mode');
    });
}