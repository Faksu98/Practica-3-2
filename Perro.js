const Entrenador = require("./Entrenador");

class Perro {

    Nombre = "No tengo nombre";
    Estado = true;

   /**
    * Intenta jugar con una persona
    * @param {Persona} unaPersona con quien intenta jugar el Perro
    */
    intentaJugarCon(unaPersona){
        console.log("Woof");
        unaPersona.vioUnPerro(this);
    }



    /**
     * Intenta jugar con un Perro
     * @param {Perro} unPerro con el que se queiere jugar
     */
    vaAJugarCon(unPerro){
        console.log("Estoy intentenado jugar con", unPerro.comoTeLlamas());
        unPerro.estanJugando(this);
    }
    
    /**
     * Reaccion del Perro que viene a jugar
     * @param {Perro} unPerro que viene a jugar
     */
    estanJugando(unPerro){
        console.log(unPerro.comoTeLlamas(), "vino a jugar conmigo");
    }



  /**
   * Verifica en que estado se encuentra el perro
   * Dependiendo si es malo
   * @param {String} nombreDeLaPersona quien entra al perro
   */
    enQueEstadoEstas(nombreDeLaPersona){
        console.log(nombreDeLaPersona,"verifico el estado del perro");
        if(this.Estado){
            console.log ("Soy agresivo y te voy a morder");
        }else{
            console.log ("Soy un perro tranquilo y jugueton");
        }
    }

    /**
     * Cambia el estado del Libro
     * @param {boolean} nuevoEstado para el Libro
     */
    cambiaTuEstado(nuevoEstado){
        this.Estado = nuevoEstado;  
    }

    /**
     * Devuelve el nombre del Libro
     * @returns el nombre del Libro
     */
    comoTeLlamas(){
        return this.Nombre;
    }

    /**
     * Cambia el nombre del Libro
     * @param {String} nuevoNombre Para el Libro
     */
    miNombreEs(nuevoNombre){
        this.Nombre = nuevoNombre;
    }

    

} 


module.exports = Perro;