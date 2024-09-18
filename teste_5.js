function findSwitches() {
    let lights = {
        1: {alight: false, hot: false},
        2: {alight: false, hot: false},
        3: {alight: false, hot: false}
    };

    lights[1].alight = true;
    setTimeout(() => {
        lights[1].alight = false;
        lights[1].hot = true;
    }, 5000);

    lights[2].alight = true;

    setTimeout(() => {
        console.log("Verificando o estado das lâmpadas...");

        let result = {};
        for (let i = 1; i <= 3; i++) {
            if (lights[i].alight) {
                result[i] = "Interruptor 2";
            } else if (lights[i].hot) {
                result[i] = "Interruptor 1";
            } else {
                result[i] = "Interruptor 3";
            }
        }

        console.log(`Lâmpada 1 está conectada ao: ${result[1]}`);
        console.log(`Lâmpada 2 está conectada ao: ${result[2]}`);
        console.log(`Lâmpada 3 está conectada ao: ${result[3]}`);
    }, 9000);
}

findSwitches();