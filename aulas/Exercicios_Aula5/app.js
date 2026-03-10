const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1️⃣ Números de 1 a 10 (FOR)
console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2️⃣ Números pares de 2 a 20 (FOR)
console.log("Pares de 2 a 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 3️⃣ Senha com DO...WHILE
let senha = "";

function pedirSenha() {
    rl.question("Digite a senha: ", function (input) {
        senha = input;

        if (senha !== "1234") {
            console.log("Senha errada!");
            pedirSenha();
        } else {
            console.log("Acesso liberado!");
            rl.close();
        }
    });
}

pedirSenha();