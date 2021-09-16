require ('colors');
const { cargarDataBase, leerDataBase } = require('./helpers/interaccionDB');
const { 
    inquireMenu,
    inquirePausa,
    leerInput, 
    menuBorrar,
    confirmar} = require('./helpers/inquire');
const Tareas = require('./models/tareas');

console.clear();


const main = async ()=>{
    
    let opt='';
    const tareas = new Tareas();
    const tareasDB=leerDataBase();
    if(tareasDB){
        tareas.cargarTareasArrayDB(tareasDB);
    }

    do {

        opt = await inquireMenu();
        switch (opt) {
            case '1':
                   const nuevaTarea=  await leerInput('Descripcion de la tarea:..');
                   tareas.crearTarea(nuevaTarea);
                break;
            case '2':
                tareas.listadoCompleto()
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                break;
            case '6':
                let id= await menuBorrar(tareas.listadoArray);
                if( id !== '0'){
                    
                    let confirmacion= await confirmar('¿Está seguro?');
                    if (confirmacion){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente...');
                    };
                };

                break;
        
        }
        cargarDataBase(tareas.listadoArray);
        if (opt !=='0') await inquirePausa();

    } while (opt !== '0');
    
    console.clear();

};

main();