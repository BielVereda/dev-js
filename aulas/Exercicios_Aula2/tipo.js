//String -> Number
let idade = "18"; //Criando a variável idade (String)
console.log(typeof idade); //String
let idade_convertida = Number(idade); //Convertendo a variável idade
console.log(typeof idade_convertida); //Number
console.log("18 + 2 = "+ idade_convertida + 2); // 18 + 2 = 20

//Number -> String
let altura = 1; //Criando a variável altura (Number)
console.log(typeof altura); //Number
let altura_convertida = String(altura); //Convertendo a variável altura
console.log(typeof altura_convertida); //String
console.log("Altura: "+ altura_convertida +"m"); //Altura: 1m

//Number -> Bool
let tamanho = 89; //Criando a variável tamanho (Number)
console.log(typeof tamanho); //(Number)
let tamanho_convertido = Boolean(tamanho); //Convertendo a variável tamanho
console.log(typeof tamanho_convertido); //Boolean
console.log("Foi convertido?: "+ tamanho_convertido); //Foi convertido?: true