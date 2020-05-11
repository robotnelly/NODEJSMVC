// 1. CONSTANTES
  const resultArea = document.querySelector("#resultado")   //creo una variables para mi resultado de mi calculadora
//  B. CONSTANTES - EXPORTACIONES
   export const getInputNumA = document.querySelector("#numA")    // exporto mi inputs
   export const getInputNumB = document.querySelector("#numB")
// // // 2. FUNCIONES - CONSTANTES
// // // 2. FUNCIONES - EXPORTACIONES
       export const parseInputs = (input) => {
        return parseInt(input.value)                 //parseInt() es una función de alto nivel
                                                      //La función parseInt comprueba el primer argumento, una cadena texto,
                                                     //e intenta devolver un entero de la base especificada
     }
       export const clearArea = (area) => {             // funcion para que mi area se limpie linea 3 de este archivo
        return resultArea.innerHTML = "   ";
      }
     export const renderSumView = (result) => {        // creo una funcion para insertar mi resultado
      const markup = `
               <span>
                 ${result}
              </span>
    `
        return resultArea.insertAdjacentHTML('beforeend', markup)     // EL método insertAdjacentHTML()  analiza la cadena
                                                                   // de texto introducida como cadena
                                                                   // HTML  e inserta al árbol DOM los nodos resultantes de dicho
                                                                    // análisis en la posición especificada.
                                                                     //‘beforeend’: Justo dentro del elemento igual lo pone después de su último elemento hijo.
  }