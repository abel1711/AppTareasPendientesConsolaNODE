const {v4:uuidv4} = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion){
        
        this.descripcion = descripcion;
        this.id = uuidv4();
        this.completadoEn = null;
        
    }

};


module.exports=Tarea;