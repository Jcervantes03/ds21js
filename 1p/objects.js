obj= {"name":"noname"}
console.log(obj)

let numeros = [generar]
function generar() {
  return 'name'+Math.floor(Math.random()*10000)
  
}
for (let i=1; i<=10000; i++){
  const name1 = generar();
  obj[name1] = name1;}
console.log(obj)