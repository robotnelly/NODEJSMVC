// IMPORTACIONES   Controlador
   import Sum from './models/index.js';
                                                 // importo mi  model function
    import * as sumView from './views/index.js';       // importo mi vista
     document.querySelector("#sumar").addEventListener(("click"), () => {
        event.preventDefault()                                        // El método preventDefault () cancela el evento si es cancelable,
                                                                   // lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
        sumView.clearArea()
         const numA = sumView.parseInputs(sumView.getInputNumA)        // me convierta todo lo que entre en NumA en enteros
         const numB = sumView.parseInputs(sumView.getInputNumB)
         const resultado = Sum(numA, numB)                          //una variable para nuestro resultado de nuestra funcion
         return sumView.renderSumView(resultado)                        // me pinta el resultado
    });