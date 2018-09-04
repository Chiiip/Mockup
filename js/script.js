function abrirProcessosGeral() {
    document.querySelector("#menuPrincipal").style = "display: none;"
    document.querySelector("#menuOpcao").style = "display: block;"
}

function calcularCustas() {
    let valor = document.querySelector("#valorCausa").value;
    valor.replace(',', '.');
    valor = Number.parseFloat(valor);
    if (valor != null && valor != '' && valor != 'Informe o valor da causa (R$)') {
        document.querySelector("#resultado").style = "display: block;"
        let texto;

        if (valor <= 1000) {
            texto = 'As taxas a pagar são de R$ 301,98';
        } else if (valor > 1000 && valor <= 1560) {
            texto = 'As taxas a pagar são de R$ 363,04';
        } else if (valor > 1560 && valor <= 3900) {
            texto = 'As taxas a pagar são de R$ 452,82';
        } else if (valor > 3900 && valor <= 7800) {
            texto = 'As taxas a pagar são de R$ 754,94';
        } else if (valor > 7800 && valor <= 15600) {
            texto = 'As taxas a pagar são de R$ 1.129,98';
        } else if (valor > 15600 && valor <= 23500) {
            texto = 'As taxas a pagar são de R$ 1.508,10';
        } else if (valor > 23500 && valor <= 39000) {
            texto = 'As taxas a pagar são de R$ 1.795,44';
        } else if (valor > 39000 && valor <= 58000) {
            texto = 'As taxas a pagar são de R$ 2.134,92';
        } else if (valor > 58000 && valor <= 88000) {
            texto = 'As taxas a pagar são de R$ 2.469,60';
        } else if (valor > 88000 && valor <= 132000) {
            texto = 'As taxas a pagar são de R$ 3.339,36';
        } else if (valor > 132000 && valor <= 203742) {
            texto = 'As taxas a pagar são de R$ 5.093,54';
        } else {
            const taxa = (0.025 * valor > 38634.54) ? 38634.54 : 0.025 * valor;
            texto = 'As taxas a pagar são de R$ ' + taxa;
        }

        document.querySelector("#resultado").innerHTML = texto;
        }
}