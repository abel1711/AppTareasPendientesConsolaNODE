const inquire = require ('inquirer');
require ('colors');

const preguntas=[{
    type:'list',
    name: 'opcion',
    message:'¿Qué desea hacer?...',
    choices:[{
        value: '1',
        name:`${'01'.green}. Crear tarea.-`
    },
    {
        value:'2',
        name:`${'02'.green}. Listar tareas.-`
    },
    {
        value:'3',
        name:`${'03'.green}. Listar tareas completas.-`
    },
    {
        value:'4',
        name:`${'04'.green}. Listar tares pendientes.-`
    },
    {
        value:'5',
        name:`${'05'.green}. Completar tarea(s).-`
    },
    {
        value:'6',
        name:`${'06'.green}. Borrar tarea.-`
    },
    {
        value:'0',
        name:`${'00'.green}. Salir.-`
    }]
}];

const inquireMenu = async ()=>{

    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=======================\n'.green);

    const {opcion} = await inquire.prompt(preguntas);
    return opcion;

}

const inquirePausa=async ()=>{
const pausa = [{
    type:'input',
    name:'pausa',
    message:`Para continuar presione ${'Enter'.green}:...`
}]
    return await inquire.prompt( pausa );
}

const leerInput = async ( message )=>{
    const pregunta = [{
        type:'input',
        name:'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor ingresa un valor...'.red;
            }else{
                return true;
            }
        }
    }]

    const {desc} = await inquire.prompt(pregunta);
    return desc;
}

const menuBorrar = async ( tareas =[]) =>{

    const choices= tareas.map((tarea, indice)=>{
        const idx=`${indice+1}.`.green;
        let estado= (tarea.completadoEn)?'Completada'.green : 'Pendiente'.red;
        return {
            value:`${tarea.id}`,
            name:`${idx}${tarea.descripcion}::${estado}`
        }
    })
    choices.unshift({
        value:'0',
        name:'0.'.green + 'Cancelar'
    })
    const question=[{
        type:'list',
        name:'id',
        message:'¿Que desea Borrar?...',
        choices
    }]

    let {id} = await inquire.prompt(question);
    return id;
    // {
    //     value: '1',
    //     name:`${'01'.green}. Crear tarea.-`
    // }

}

const confirmar = async (message)=> {

    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];

    const {ok}= await inquire.prompt(question);
    return ok;

}
module.exports={
    inquireMenu,
    inquirePausa,
    leerInput,
    menuBorrar,
    confirmar
}

