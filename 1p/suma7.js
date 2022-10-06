 function sumar(){
    let suma=0;
    let i=[];
    let y=300
    

    for( i= 200; i<=y; i++){
    if(i % 7 === 0){
        suma+= i;
    }
}
return suma;
    }
    console.log("la suma de la susecion es: "+ sumar());