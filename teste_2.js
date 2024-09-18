function countLetterA(inputString) {
    let lowerCaseString = inputString.toLowerCase();

    let count =  0;
    for (let char of lowerCaseString) {
        if (char === 'a') {
            count++;
        }
    }

    return count;
}

let inputString = prompt("Informe uma string para verificar a existencia da letra 'a':");

let count = countLetterA(inputString);

if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
} else {
    console.log("A letra 'a' NÃO aparece na string.");
}