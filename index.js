const Emitter = require('./emitter'); // modulo con el emitter
const emitterObj = new Emitter(); // objeto del prototipo

// registro de evento click y su manejador
emitterObj.on('click', () => console.log('1. You clicked me!!!!!'));
// registro de otro evento click y su menejador
emitterObj.on('click', () => console.log('2. You clicked me!!!!!'));

// se emiten todos los manejadores del tipo de evento click
emitterObj.emit('click');