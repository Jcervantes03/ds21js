function multiplicador() {
  let mul = 1;
  let i = [];
  let y = 300


  for (i = 200; i <= y; i++) {
    if (i % 7 === 0) {
      mul *= i;
    }
  }
  return mul;
}
console.log("la multiplicacion de la susecion es: " + multiplicador());