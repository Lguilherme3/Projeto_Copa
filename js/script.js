// código pra randomizar os times
 const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Primero bloco das oitavas resultados
let resultadoOitavas1 = window.document.querySelector('li#resultadoOitavas1')
let resultadoOitavas2 = window.document.querySelector('li#resultadoOitavas2')
let resultadoOitavas3 = window.document.querySelector('li#resultadoOitavas3')
let resultadoOitavas4 = window.document.querySelector('li#resultadoOitavas4')

//----------------------------------------------------------------------------/


// grupos com suas seleções + img
let selectionsGroup1A = ['<img src="imagens/qatar.png" alt="Emblema redondo QATAR"> QATAR', '<img src="imagens/equador.png" alt="Emblema redondo EQUADOR"> EQUADOR', '<img src="imagens/senegal.png" alt="Emblema redondo SENEGAL"> SENEGAL', '<img src="imagens/holanda.png" alt="Emblema redondo HOLANDA"> HOLANDA']

let selectionsGroup1B = ['<img src="imagens/inglaterra.png" alt="Emblema redondo INGLATERRA"> INGLATERRA', '<img src="imagens/irã.png" alt="Emblema redondo IRÃ"> IRÃ', '<img src="imagens/estadosunidos.png" alt="Emblema redondo SUAR"> USA', '<img src="imagens/gales.png" alt="Emblema redondo GALES"> GALES']

let selectionsGroup1C = ['<img src="imagens/argentina.png" alt="Emblema redondo ARGENTINA"> ARGENTINA', '<img src="imagens/arabiasaudita.png" alt="Emblema redondo ARÁBIA SAUD"> ARÁBIA SAUD', '<img src="imagens/mexico.png" alt="Emblema redondo MÉXICO"> MÉXICO', '<img src="imagens/polonia.png" alt="Emblema redondo POLÔNIA"> POLÔNIA']

let selectionsGroup1D = ['<img src="imagens/frança.png" alt="Emblema redondo FRANÇA"> FRANÇA', '<img src="imagens/australia.png" alt="Emblema redondo AUSTRÁLIA"> AUSTRÁLIA', '<img src="imagens/dinamarca.png" alt="Emblema redondo DINAMARCA"> DINAMARCA','<img src="imagens/tunisia.png" alt="Emblema redondo TUNÍSIA"> TUNÍSIA']

let selectionsGroup1E = ['<img src="imagens/espanha.png" alt="Emblema redondo ESPANHA"> ESPANHA','<img src="imagens/costarica.png" alt="Emblema redondo COSTA RICA"> COSTA RICA','<img src="imagens/alemanha.png" alt="Emblema redondo ALEMANHA"> ALEMANHA','<img src="imagens/japao.png" alt="Emblema redondo JAPÃO"> JAPÃO']

let selectionsGroup1F = ['<img src="imagens/belgica.png" alt="Emblema redondo BÉLGICA"> BÉLGICA','<img src="imagens/canada.png" alt="Emblema redondo CANADÁ"> CANADÁ','<img src="imagens/marrocos.png" alt="Emblema redondo MARROCOS"> MARROCOS','<img src="imagens/croacia.png" alt="Emblema redondo CROÁCIA"> CROÁCIA']

let selectionsGroup1G = ['<img src="imagens/brasil.png" alt="Emblema redondo BRASIL"> BRASIL','<img src="imagens/servia.png" alt="Emblema redondo SÉRVIA"> SÉRVIA','<img src="imagens/suica.png" alt="Emblema redondo SUÍÇA"> SUÍÇA','<img src="imagens/camaroes.png" alt="Emblema redondo CAMARÕES"> CAMARÕES']

let selectionsGroup1H = ['<img src="imagens/portugal.png" alt="Emblema redondo PORTUGAL"> PORTUGAL','<img src="imagens/gana.png" alt="Emblema redondo GANA"> GANA','<img src="imagens/uruguay.png" alt="Emblema redondo URUGUAI"> URUGUAI','<img src="imagens/coreiadosul.png" alt="Emblema redondo COREIA DO SUL"> COREIA DO SUL']
//----------------------------------------------------------------------------/

let contadorGols = [1, 2, 3, 4]
contadorGols[random(0, contadorGols.length)]
let contadorGols2 = [1, 2, 3, 4]
contadorGols[random(0, contadorGols.length)]

// qualquer coisa apagar
resultado1 = contadorGols[random(0, contadorGols.length)]
resultado2 = contadorGols[random(0, contadorGols.length)]

// if(resultado1 == resultado2) {
//     resultado1++
// }


// qualquer coisa apagar

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

    // Randomização primeiro grupo oitavas
    resultadoOitavas1.innerHTML = selectionsGroup1A[random(0, selectionsGroup1A.length)] + ' ' + resultado1 + '</br>' + '</br>' + selectionsGroup1B[random(0, selectionsGroup1B.length)] + ' ' + resultado2
    // randomização segundo grupo oitvas
    resultadoOitavas2.innerHTML = selectionsGroup1C[random(0, selectionsGroup1C.length)] + ' ' + contadorGols[random(0, contadorGols.length)] + '</br>' + '</br>' + selectionsGroup1D[random(0, selectionsGroup1D.length)] + ' ' + contadorGols[random(0, contadorGols.length)]
    // randomização terceiro grupo oitvas
    resultadoOitavas3.innerHTML = selectionsGroup1E[random(0, selectionsGroup1E.length)] + ' ' + contadorGols[random(0, contadorGols.length)] + '</br>' + '</br>' + selectionsGroup1F[random(0, selectionsGroup1F.length)] + ' ' + contadorGols[random(0, contadorGols.length)]
    // randomização quarto grupo oitvas
    resultadoOitavas4.innerHTML = selectionsGroup1G[random(0, selectionsGroup1G.length)] + ' ' + contadorGols[random(0, contadorGols.length)] + '</br>' + '</br>' + selectionsGroup1H[random(0, selectionsGroup1H.length)] + ' ' + contadorGols[random(0, contadorGols.length)]
    
}

//----------------------------------------------------------------------------/


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