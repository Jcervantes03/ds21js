//
//
//
import {LinkedList} from '../../../jlcr/linked/listasEnlazadas6es.js'

let listaEnlazada = new LinkedList()
listaEnlazada.append("m")
listaEnlazada.append("r")
listaEnlazada.append("k")
console.log(listaEnlazada.insertAfter("m","k"))
console.log(listaEnlazada.insertBefore("r","m"))
listaEnlazada.print()

