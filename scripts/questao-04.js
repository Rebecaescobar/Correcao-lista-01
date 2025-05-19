const temperaturasCelsius = [0, 10, 10, 30, 40];
let temperaturasFahrenheit = [];
let contadorArrayFahrenheit = 0;

for (let i = 0; i < temperaturasCelsius.length; i++) {
  temperaturasCelsius[contadorArrayFahrenheit] =
    (temperaturasCelsius[i] * 9) / 5 + 32;
  contadorArrayFahrenheit++;
}
console.table(temperaturasCelsius);
console.table(temperaturasCelsius);
