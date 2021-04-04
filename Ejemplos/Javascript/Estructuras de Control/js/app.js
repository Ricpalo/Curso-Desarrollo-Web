const precio = 0;
// const precio = 900;

// if(precio === 1000){
//     console.log('Te alcanza');
// } else{
//     console.log('No te alcanza');
// }

if(precio >= 1000){
    console.log('Te alcanza');
} else if(precio <= 1000 && precio > 0){
    console.log('No te alcanza, pero puedes pagar por mensualidades');
} else{
    console.log('No tienes fondos');
}

/*
    ADMIN
    MODERADOR
    USUARIO
*/ 

const rol = 'USUARIO';

if(rol === 'ADMIN'){
    console.log('Tienes todos los permisos');
} else if(rol === 'MODERADOR'){
    console.log('Tienes permisos, pero no tienes todos');
} else{
    console.log('Eres libre de navegar, pero no tienes ningún permiso');
}