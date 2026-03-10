console.log("===== FRUTAS =====");

// 🔹 Array com 5 frutas
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

frutas.push("Abacaxi");
frutas.pop();
frutas.unshift("Morango");
frutas.shift();

console.log("Frutas finais:", frutas);


console.log("===== NÚMEROS =====");

// 🔹 Array com 10 números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Apenas pares
let pares = numeros.filter(function (n) {
    return n % 2 === 0;
});
console.log("Pares:", pares);

// Quadrado
let quadrado = numeros.map(function (n) {
    return n * n;
});
console.log("Quadrado:", quadrado);

// Soma total
let soma = numeros.reduce(function (total, n) {
    return total + n;
}, 0);
console.log("Soma:", soma);

// Ordenar e inverter
let ordenado = [...numeros].sort(function (a, b) {
    return a - b;
});
console.log("Ordenado:", ordenado);

let invertido = [...ordenado].reverse();
console.log("Invertido:", invertido);