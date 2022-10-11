//  let selectionsGroup1B = ['INGLATERRA', 'IRÃ', 'USA', 'GALES', ]
//  let selectionsGroup1C = ['ARGENTINA', 'ARÁBIA SAUD', 'MÉXICO', 'POLÔNIA', ]
//  let selectionsGroup1D = ['FRANÇA', 'AUSTRÁLIA', 'DINAMARCA', 'TUNÍSIA', ]
//  const allSelections = [selectionsGroup1A, selectionsGroup1B, selectionsGroup1C, selectionsGroup1D]

 let resultadoOitavas = window.document.querySelector('li#resultadoOitavas')
 let selectionsGroup1A = ['QATAR', 'EQUADOR', 'SENEGAL', 'HOLANDA', 'INGLATERRA', 'IRÃ', 'USA', 'GALES', 'ARGENTINA', 'ARÁBIA SAUD', 'MÉXICO', 'POLÔNIA', 'FRANÇA', 'AUSTRÁLIA', 'DINAMARCA', 'TUNÍSIA',]
 const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

 console.log(selectionsGroup1A[random(0, selectionsGroup1A.length)])



// botão para mostrar o resultados das oitavas de final
function botaoOitavas() {
    if (secondColumnGroup.style.display == 'block') {
        secondColumnGroup.style.display = 'none';
    } else {
        secondColumnGroup.style.display = 'block';
    }

    if (seventColumnGroup.style.display == 'block') {
            seventColumnGroup.style.display = 'none';
    } else {
            seventColumnGroup.style.display = 'block';
    }
    resultadoOitavas.innerHTML = selectionsGroup1A[random(0, selectionsGroup1A.length)] + '</br>' + "x" + '</br>' + selectionsGroup1A[random(0, selectionsGroup1A.length)]
}

// botão para mostrar o resultados das quartas de final


function botaoQuartas() {
    if (thirdColumnGroup.style.display == 'block') {
        thirdColumnGroup.style.display = 'none';
    } else {
        thirdColumnGroup.style.display = 'block';
    }

    if (sixthColumnGroup.style.display == 'block') {
        sixthColumnGroup.style.display = 'none';
    } else {
        sixthColumnGroup.style.display = 'block';
    }
}



// botão para mostrar o resultados das semifinal

function botaoSemi() {
    if (fourthColumnGroup.style.display == 'block') {
        fourthColumnGroup.style.display = 'none';
    } else {
        fourthColumnGroup.style.display = 'block';
    }

    if (fifthColumnGroup.style.display == 'block') {
        fifthColumnGroup.style.display = 'none';
    } else {
        fifthColumnGroup.style.display = 'block';
    }
}



// menu hamburguinho para telas menores

function mudouTamanho() {
    if (window.innerWidth <= 1299) {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function clickMenu() {
    if (itens.style.display == 'none') {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}