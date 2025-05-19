const idades = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;

for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    maioresDeIdade++;
  } else {
    menoresDeIdade;
  }
}

menoresDeIdade = idades.length - maioresDeIdade;

console.log(`A quantidade de pessoas maiores de idade é: ${maioresDeIdade}`);
console.log(`A quantidade de pessoas menores de idade é ${menoresDeIdade}}`);
