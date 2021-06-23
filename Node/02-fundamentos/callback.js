// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioByID = (id) => {

    const usuario = {
        id,
        nombre: 'Frenando'
    }

    setTimeout(() => {
        console.log(usuario);
    }, 1500)
}

getUsuarioByID(10);