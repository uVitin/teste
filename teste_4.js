function findSequence() {
    //A
    let aSequence = [1, 3, 5, 7];
    let aNext = aSequence[aSequence.length - 1] + 2;
    console.log("A) Próximo elemento:", aNext);

    //B
    let bSequence = [2, 4, 8, 16, 32, 64];
    let bNext = bSequence[bSequence.length - 1] * 2;
    console.log("B) Próximo elemento:", bNext);

    //C
    let cSequence = [0, 1, 4, 9, 16, 25, 36];
    let cNext = Math.pow(cSequence.length, 2);
    console.log("C) Próximo elemento:", cNext);

    //D
    let dSequence = [4, 16, 36, 64];
    let dNext = Math.pow((dSequence.length + 1) * 2, 2);
    console.log("D) Próximo elemento:", dNext);

    //E
    let eSequence = [1, 1, 2, 3, 5, 8];
    let eNext = eSequence[eSequence.length - 1] + eSequence[eSequence.length - 2];
    console.log("E) Próximo elemento:", eNext)

    //F
    let fSequence = [2, 10, 12, 16, 17, 18, 19];
    let fNext = fSequence[fSequence.length - 1] + 1;
    console.log("F) Próximo elemento:", fNext);
}

findSequence();