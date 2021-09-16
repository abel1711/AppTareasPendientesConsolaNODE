require ('colors');



const mostrarMenu= () =>{

    return new Promise ((resolve)=>{

    
        console.clear();
        console.log('======================='.green);
        console.log(' Seleccione una opcion'.green);
        console.log('=======================\n'.green);

        console.log(`${'01'.green}. Crear tarea.-`);
        console.log(`${'02'.green}. Listar tareas.-`);
        console.log(`${'03'.green}. Listar tareas completadas.-`);
        console.log(`${'04'.green}. Listar tares pendientes.-`);
        console.log(`${'05'.green}. Completar tarea(s).-`);
        console.log(`${'06'.green}. Borrar tarea.-`);
        console.log(`${'00'.green}. Salir.-\n`);

        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccion una opción:', (respuesta)=>{
            readline.close();
            resolve(respuesta);
        })
    })
};

const pausa = ()=>{
    return new Promise(resolve=>{
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`\nPresione ${'Enter'.green} para continuar\n`, (respuesta)=>{
            readline.close();
            resolve();
        })
        
    });

}

module.exports={
    mostrarMenu, pausa
}