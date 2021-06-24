require('colors');

const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { cargarTareasFromArray } = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquireMenu();
        console.log({ opt });

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion : ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        guardarDB(tareas.listadoAddr);

        await pausa();
    } while (opt != '0');

    // await pausa();
}

main();