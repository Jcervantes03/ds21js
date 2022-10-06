var array = [];
let num0;

for(i = 0; i < 10000; i++){
num0 = Math.floor(Math.random() * 10000);
array.push(num0);
};


function secuencial(num){
for(var i=0; i < array.length;i++){
  if(array[i]==num){
    console.log("El numero:", num," esta dentro del array")
    console.log('Posición', i)
    console.log('Pasos', i)
      return   

  }
  
}return  console.log("No se encontro")
}

console.log(array)
console.log(secuencial(10))