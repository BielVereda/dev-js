// Definindo o nome e imprimindo um array
// let fullName = "Gabriel dos Santos Vereda";
// console.log(fullName.split(" "));

// let arrayString = fullName.split(" ")
// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount)

// let name = arrayString[0]
// let lastName = arrayString[arrayCount - 1]

//Criando a função que retorna o nome completo
// function Welcome() {
//     console.log("Hello, World! Dentro da função!");
// }
// Welcome()

// function WelcomeComParams(name) {
//     console.log(`Olá, ${name}`);
// }
// WelcomeComParams("Tikomo Nakama")

function FullName(fullName) {
    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastname = arrayString[arrayString.length -1]

    console.table(arrayString)
    let arrayCount = arrayString[arrayString.length -1]

    console.log(`Olá, ${firstName} ${lastname}!`)
}
FullName("Gabriel dos Santos Vereda");