let titulo = '';
let tituloSecao = '';
const taxasAPagar = 'As taxas a pagar são de R$ ';

function abrirSecao(valorTitulo) {
    document.querySelector('#menuPrincipal').classList.add('hidden-menu');
    document.querySelector('#menuOpcao').classList.remove('hidden-menu');

    tituloSecao = valorTitulo;
    switch (valorTitulo) {
        case 'processosEmGeral': titulo = 'Processos Judiciais em Geral'; break;
        case 'atosTabeliaesNotas': titulo = 'Atos dos Tabeliães de Notas'; break;
        case 'atosOficiaisImoveis': titulo = 'Atos dos Oficiais de Registro de Imóveis'; break;
        case 'atosOficiaisTitulos': titulo = 'Atos dos Oficiais de Registro de Títulos e Documentos e Civil das Pessoas Jurídicas'; break;
        case 'atosTabeliaesTitulos': titulo = 'Atos dos Tabeliães de Protesto de Títulos'; break;
        case 'atosOficiaisCivil': titulo = 'Atos dos Oficiais de Registro Civil das Pessoas Naturais e de Interdições e Tutelas'; break;
    }   

    document.querySelector('#tituloSecao').innerHTML = titulo;
}

function voltar() {
    document.querySelector('#menuOpcao').classList.add('hidden-menu');
    document.querySelector('#menuPrincipal').classList.remove('hidden-menu');
    document.querySelector('#resultado').classList.add('hidden-menu');
    document.querySelector('#valorCausa').value = 'Informe o valor da causa (R$)';
}

function calcularCustas() {
    let valor = document.querySelector("#valorCausa").value;
    valor.replace(',', '.');
    valor = Number.parseFloat(valor);
    if (valor != null && valor != '' && valor != 'Informe o valor da causa (R$)') {
        document.querySelector('#resultado').classList.remove('hidden-menu');
        const texto = taxasAPagar + calcularPorSecao(valor);

        document.querySelector("#resultado").innerHTML = texto;
    }
}

function calcularPorSecao(valor) {
    switch (tituloSecao) {
        case 'processosEmGeral': return calcularProcessosJudiciais(valor);
        case 'atosTabeliaesNotas': return calcularTabeliaesNotas(valor);
        case 'atosOficiaisImoveis': return calcularOficiaisImoveis(valor);
        case 'atosOficiaisTitulos': return calcularOficiaisTitulos(valor);
        case 'atosTabeliaesTitulos': return calcularTabeliaesTitulos(valor);
        case 'atosOficiaisCivil': return calcularOficiaisCivil(valor);
    }
}

function calcularProcessosJudiciais(valor) {
    if (valor <= 1000) {
        return '301,98';
    } else if (valor > 1000 && valor <= 1560) {
        return '363,04';
    } else if (valor > 1560 && valor <= 3900) {
        return '452,82';
    } else if (valor > 3900 && valor <= 7800) {
        return '754,94';
    } else if (valor > 7800 && valor <= 15600) {
        return '1.129,98';
    } else if (valor > 15600 && valor <= 23500) {
        return '1.508,10';
    } else if (valor > 23500 && valor <= 39000) {
        return '1.795,44';
    } else if (valor > 39000 && valor <= 58000) {
        return '2.134,92';
    } else if (valor > 58000 && valor <= 88000) {
        return '2.469,60';
    } else if (valor > 88000 && valor <= 132000) {
        return '3.339,36';
    } else if (valor > 132000 && valor <= 203742) {
        return '5.093,54';
    } else {
        const taxa = (0.025 * valor > 38634.54) ? 38634.54 : 0.025 * valor;
        return taxa.toFixed(2).replace('.', ',');
    }
}

function calcularTabeliaesNotas(valor) {
    if (valor <= 1600) {
        return '219,84';
    } else if (valor > 1600 && valor <= 3200) {
        return '276,54';
    } else if (valor > 3200 && valor <= 8000) {
        return '333,22';
    } else if (valor > 8000 && valor <= 12000) {
        return '360,14';
    } else if (valor > 12000 && valor <= 16000) {
        return '387,54';
    } else if (valor > 16000 && valor <= 24000) {
        return '442,46';
    } else if (valor > 24000 && valor <= 32000) {
        return '498,76';
    } else if (valor > 32000 && valor <= 47000) {
        return '550,92';
    } else if (valor > 47000 && valor <= 63000) {
        return '607,10';
    } else if (valor > 63000 && valor <= 78000) {
        return '666,64';
    } else if (valor > 78000 && valor <= 118000) {
        return '710,00';
    } else if (valor > 118000 && valor <= 160000) {
        return '768,20';
    } else if (valor > 160000 && valor <= 235000) {
        return '1.243,56';
    } else if (valor > 235000 && valor <= 350000) {
        return '1.865,56';
    } else if (valor > 350000 && valor <= 530000) {
        return '2.801,90';
    } else if (valor > 530000 && valor <= 800000) {
        return '4.201,78';
    } else if (valor > 800000 && valor <= 1200000) {
        return '6.301,62';
    } else if (valor > 1200000 && valor <= 1800000) {
        return '7.561,92';
    } else if (valor > 1800000 && valor <= 2700000) {
        return '9.830,72';
    } else if (valor > 2700000 && valor <= 4000000) {
        return '12.779,92';
    } else if (valor > 4000000) {
        return '16.613,94';
    } 
}

function calcularOficiaisImoveis(valor) {
    if (valor <= 1600) {
        return '219,84';
    } else if (valor > 1600 && valor <= 3200) {
        return '276,54';
    } else if (valor > 3200 && valor <= 8000) {
        return '333,22';
    } else if (valor > 8000 && valor <= 12000) {
        return '360,14';
    } else if (valor > 12000 && valor <= 16000) {
        return '387,54';
    } else if (valor > 16000 && valor <= 24000) {
        return '442,46';
    } else if (valor > 24000 && valor <= 32000) {
        return '498,76';
    } else if (valor > 32000 && valor <= 47000) {
        return '550,92';
    } else if (valor > 47000 && valor <= 63000) {
        return '607,10';
    } else if (valor > 63000 && valor <= 78000) {
        return '666,64';
    } else if (valor > 78000 && valor <= 118000) {
        return '710,00';
    } else if (valor > 118000 && valor <= 160000) {
        return '768,20';
    } else if (valor > 160000 && valor <= 235000) {
        return '1.243,56';
    } else if (valor > 235000 && valor <= 350000) {
        return '1.865,56';
    } else if (valor > 350000 && valor <= 530000) {
        return '2.801,90';
    } else if (valor > 530000 && valor <= 800000) {
        return '4.201,78';
    } else if (valor > 800000 && valor <= 1200000) {
        return '6.301,62';
    } else if (valor > 1200000 && valor <= 1800000) {
        return '7.561,92';
    } else if (valor > 1800000 && valor <= 2700000) {
        return '9.830,72';
    } else if (valor > 2700000 && valor <= 4000000) {
        return '12.779,92';
    } else if (valor > 4000000) {
        return '16.613,94';
    }
}

function calcularOficiaisTitulos(valor) {
    if (valor <= 3200) {
        return  '219,84';
    } else if (valor > 3200 && valor <= 8000) {
        return '333,22';
    } else if (valor > 8000 && valor <= 12000) {
        return '360,14';
    } else if (valor > 12000 && valor <= 16000) {
        return '387,54';
    } else if (valor > 16000 && valor <= 24000) {
        return '442,46';
    } else if (valor > 24000 && valor <= 32000) {
        return '498,76';
    } else if (valor > 32000 && valor <= 47000) {
        return '550,92';
    } else if (valor > 47000 && valor <= 63000) {
        return '607,10';
    } else if (valor > 63000 && valor <= 78000) {
        return '666,64';
    } else if (valor > 78000 && valor <= 118000) {
        return '710,00';
    } else if (valor > 118000 && valor <= 160000) {
        return '768,20';
    } else if (valor > 160000 && valor <= 235000) {
        return '1.243,56';
    } else if (valor > 235000 && valor <= 350000) {
        return '1.865,56';
    } else if (valor > 350000 && valor <= 530000) {
        return '2.801,90';
    } else if (valor > 530000 && valor <= 800000) {
        return '4.201,78';
    } else if (valor > 800000 && valor <= 1200000) {
        return '6.301,62';
    } else if (valor > 1200000 && valor <= 1800000) {
        return '7.561,92';
    } else if (valor > 1800000 && valor <= 2700000) {
        return '9.830,72';
    } else if (valor > 2700000 && valor <= 4000000) {
        return '12.779,92';
    } else if (valor > 4000000) {
        return '16.613,94';
    } 
}

function calcularTabeliaesTitulos(valor) {
    if (valor <= 157) {
        return  '48,08';
    } else if (valor > 157 && valor <= 315) {
        return '56,46';
    } else if (valor > 315 && valor <= 550) {
        return '79,20';
    } else if (valor > 550 && valor <= 785) {
        return '89,74';
    } else if (valor > 785 && valor <= 1175) {
        return '109,72';
    } else if (valor > 1175 && valor <= 1570) {
        return '133,54';
    } else if (valor > 1570 && valor <= 2350) {
        return '165,52';
    } else if (valor > 2350 && valor <= 3920) {
        return '219,84';
    } else if (valor > 3920 && valor <= 7840) {
        return '439,70';
    } else if (valor > 7840 && valor <= 15670) {
        return '517,84';
    } else if (valor > 15670 && valor <= 23500) {
        return '936,32';
    } else if (valor > 23500 && valor <= 35250) {
        return '1.399,66';
    } else if (valor > 35250 && valor <= 52870) {
        return '2.099,60';
    } else if (valor > 52870 && valor <= 79300) {
        return '3.149,50';
    } else if (valor > 79300 && valor <= 119000) {
        return '4.726,72';
    } else if (valor > 119000 && valor <= 178000) {
        return '5.672,74';
    } else if (valor > 178000 && valor <= 267000) {
        return '6.807,02';
    } else if (valor > 267000 && valor <= 400000) {
        return '8.168,46';
    } else if (valor > 400000) {
        return '9.802,18';
    }
}

function calcularOficiaisCivil(valor) {
    if (valor <= 1000) {
        return '301,98';
    } else if (valor > 1000 && valor <= 1560) {
        return '363,04';
    } else if (valor > 1560 && valor <= 3900) {
        return '452,82';
    } else if (valor > 3900 && valor <= 7800) {
        return '754,94';
    } else if (valor > 7800 && valor <= 15600) {
        return '1.129,98';
    } else if (valor > 15600 && valor <= 23500) {
        return '1.508,10';
    } else if (valor > 23500 && valor <= 39000) {
        return '1.795,44';
    } else if (valor > 39000 && valor <= 58000) {
        return '2.134,92';
    } else if (valor > 58000 && valor <= 88000) {
        return '2.469,60';
    } else if (valor > 88000 && valor <= 132000) {
        return '3.339,36';
    } else if (valor > 132000 && valor <= 203742) {
        return '5.093,54';
    } else {
        const taxa = (0.025 * valor > 38634.54) ? 38634.54 : 0.025 * valor;
        return taxa.toFixed(2).replace('.', ',');
    }
}