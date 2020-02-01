function Emitter() {
  this.events = {}; // objeto vacío con los eventos que se van a ir registrando
}


// Método que registra un evento en base a su tipo y su manejador de evento
Emitter.prototype.on = function( type, listener ) {
  this.events[type] = this.events[type] || []; // inicializa la key del objeto que sería el evento como un arreglo con los eventos ya registrados o un arreglo vacío en caso de que no exista esa key
  this.events[type].push(listener); // al ser ya un arreglo se puede hacer un push a esa propiedad del evento que se quiere registrar
}


// Método que emite todos los listeners registrados a un evento en base al tipo de evento
Emitter.prototype.emit = function( type ) {
  // comprueba que exista ese tipo de evento
  if ( this.events[type] ) { 
    this.events[type].forEach( listener => listener() ); // recorre el arreglo con los listeners y se ejecutan uno a uno
  }
}

// Exportación del prototipo Emitter
module.exports = Emitter; 