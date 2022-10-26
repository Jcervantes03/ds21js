//
//
//
import {LinkedList} from '../../../jlcr/linked/listasEnlazadas6es.js'

let listaEnlazada = new LinkedList()
listaEnlazada.append(5)
listaEnlazada.append(6)
listaEnlazada.append(9)
console.log(listaEnlazada.insertAfter(9,5))
console.log(listaEnlazada.insertBefore(5,6))
listaEnlazada.print()

