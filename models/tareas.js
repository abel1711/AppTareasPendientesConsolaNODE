const Tarea = require('./tarea');

class Tareas{

    _listado = {};

    get listadoArray(){
        const listado = [];

        Object.keys(this._listado).forEach(key=>{
            listado.push(this._listado[key])
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea (id) {
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasArrayDB( tareas = []){
        
        for ( let tarea of tareas){
        this._listado[tarea.id]= tarea;
        }
    }

    crearTarea( desc ){
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        console.log();
        this.listadoArray.forEach((tarea, ind)=>{

            //tarea.descripcion;//asi saco la tarea;
            let indice = `${ind+1}.`.green//asi le agrego color verde al indice
            let completado=(tarea.completadoEn)? `Completado:${tarea.completadoEn}`.green : 'Pendiente'.red;
            console.log(`${indice}${tarea.descripcion}::${completado}`)
        })
        console.log();
    }

    listarPendientesCompletadas ( completadas = true){//recibo el argumento que necesito mostrar = completadas=> true, pendientes=> false
        console.log();
        let contador=1;
        if(completadas){    //si necesito las completadas que haga esto
            this.listadoArray.forEach((tarea, ind)=>{
                if (tarea.completadoEn){
                    let indice = `${contador}.`.green;  //asi le agrego color verde al indice
                    let completado=(tarea.completadoEn)? 'Completado'.green : 'Pendiente'.red;
                    console.log(`${indice}${tarea.descripcion}::${completado}`);
                    contador++;
                }
            })
        }else { //asi saco las pendientes
            this.listadoArray.forEach((tarea, ind)=>{
                if (!tarea.completadoEn){
                    let indice = `${contador}.`.green;  //asi le agrego color verde al indice
                    let completado=(tarea.completadoEn)? 'Completado'.green : 'Pendiente'.red;
                    console.log(`${indice}${tarea.descripcion}::${completado}`);
                    contador++;
                }
            })
        }
    
    }

    marcarCompletadas(ids){
      
        ids.forEach(id=>{
            if(!this._listado[id].completadoEn){
                
                this._listado[id].completadoEn = new Date().toLocaleTimeString() +' -- '+ new Date().toLocaleDateString();
            }
        })

        this.listadoArray.forEach( tarea =>{

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn=null;
            }
        })
    }

};

module.exports=Tareas;
