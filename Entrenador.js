const Perro = require("./Perro")

class Entrenador{

    nombre = "no tengo un nombre";
    muestraLosDientes = false;
    
    /**
     * Asigna un nuevo nombre al entrenador
     * @param {String} nuevoNombre para el entrenador
     */
    miNombreEs(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    comoTeLlamas(){
        return this.nombre;
    }


/**
 * Asigna el estado del perro
 * @param {Perro} unPerro para el perro
 */
verEstado(unPerro){
       console.log("Me fijo el estado de", unPerro.comoTeLlamas() )
       unPerro.enQueEstadoEstas(this.nombre);
    }

    /**
     * Respuesta del Entrenador al ver a un Perro
     * @param {Perro} unPerro que se acerco
     */
    vioUnPerro(unPerro){
        if(this.muestraLosDientes){
            this.correr();
        }else{
            this.verEstado(unPerro);
        }
        
        
    }

    correr(){
        console.log("Se larga a correr")
    }
}

module.exports = Entrenador