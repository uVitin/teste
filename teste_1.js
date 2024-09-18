function isFibonacci(number) {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

const number = parseInt(prompt("Informe um número para verificar se à sequencia de Fibonacci:"))

if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`)
} else {
    console.log(`O número ${number} NÃO pertence à sequência de Fibonacci.`)
}



