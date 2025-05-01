let salariobruto = parseFloat (input ("Informe o salario bruto:"));

let InssFaixaInicio = 0;
let InssFaixaFim = 1_518.00;
let InssFaixaLiquota = 7.5

let Faixa1 = {
    Inicio: 0,
    Fim: 1_518.00,
    Aliquota: 0.075
};

let Faixa2 = {
    Inicio: 1_518.00,
    Fim: 2_793.88,
    Aliquota: 0.09
};

let Faixa3 = {
    Inicio: 2_793.89,
    Fim: 4_190.83,
    Aliquota: 0.12
};

let Faixa4 = {
    Inicio: 4_190.83,
    Fim: 8_157.81,
    Aliquota: 0.14
};

let tabelaINSS = [Faixa1, Faixa2
                  Faixa3,Faixa4]   

console.table(tabelaINSS);

let.faixaEncontrada = {};
for (let i = 0; i < tabelaINSS.length; i++) {
    const faixa = tabelaINSS[i];
    if (salariobruto) >= faixa.inicio &&
        (salariobruto <= faixa.Fim){
            faixaEncontrada = faixa;
            break;
        }
}
                    
