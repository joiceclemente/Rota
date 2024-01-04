
function pegarValor() {
    const iNome = document.getElementById("iNome");
    const iDade = document.getElementById("iDade");
    
    const dataAtual = new Date();
    
    if(iNome.value === null || iDade.value === '' || isNaN(new Date(iDade.value)) || new Date(iDade.value) > dataAtual) {
        alert('Preencha todos os campos corretamente!')

    } else {

    const elementMain = document.getElementById("elementMain");
    const newS = document.getElementById("newS");
    
    elementMain.style.display = 'none'
    newS.classList.add('newPage');
    newS.innerHTML = ''

    const  containerNome = document.createElement('div');
    containerNome.classList.add('containerNome');
    newS.appendChild(containerNome)

    const  containerData = document.createElement('div');
    containerData.classList.add('containerData');
    newS.appendChild(containerData)

    const divN = document.createElement('div');
    divN.classList.add("divN");
    const divD = document.createElement('div');
    divD.classList.add("divD");
    containerNome.appendChild(divN);
    containerData.appendChild(divD);
    divN.classList.add('resNome');
    divD.classList.add('resIdade');
    

    const iNome = document.getElementById("iNome");
    const iDade = document.getElementById("iDade");
    

    const divNN = document.createElement('div');
    divNN.classList.add('divNN')
    divNN.textContent = "Número do seu nome";
    containerNome.appendChild(divNN)
    
    const divND = document.createElement('div');
    divND.classList.add('divND')
    divND.textContent = "Número da sua data";
    containerData.appendChild(divND)
    
    
    // ------------------------Botoes--------------------------------

    const divBotao = document.createElement('div')
    divBotao.classList.add('divBotao')
    newS.appendChild(divBotao)
    
    const botaoInicio = document.createElement('button');
    botaoInicio.classList.add("buts");
    botaoInicio.classList.add("butsI");
    const tagC = document.createElement('a');
    tagC.classList.add('txtButs');
    tagC.classList.add("botI");
    tagC.href = "index.html";
    tagC.textContent = "Início"
    tagC.classList.add('tagC');
    botaoInicio.appendChild(tagC);
    divBotao.appendChild(botaoInicio);
    
    const botaoNum = document.createElement('button');
    botaoNum.classList.add("buts");
    botaoNum.classList.add("butsN");
    const tagD = document.createElement('a');
    tagD.classList.add('txtButs');
    tagD.classList.add("botN");
    tagD.href = "num.html";
    tagD.textContent = "Numerologia";
    botaoNum.appendChild(tagD);
    divBotao.appendChild(botaoNum);


    // ------------------------Data------------------------- 
    let valorIdade = new Date(iDade.value);
    
    let dia = valorIdade.getDate() + 1;
    let mes = valorIdade.getMonth() + 1;
    let ano = valorIdade.getFullYear();
    
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    
    let dataForm = `${dia}${mes}${ano}`;
    const digitosD = Array.from(dataForm);
    
    const somarData = digitosD.reduce((acc, curr) => acc + parseInt(curr), 0);

    const resSD = document.createElement('div');
    resSD.classList.add('resSD');
    containerData.appendChild(resSD);

    
    // ---------------------------------------Nome-----------------------------
    
    const numerologia = {
        1: ['a', 'j', 's', 'à', 'ã'],
        2: ['b', 'k', 't'],
        3: ['c', 'l', 'u', 'ç'],
        4: ['d', 'm', 'v'],
        5: ['e', 'n', 'w', 'é'],
        6: ['f', 'o', 'x', 'ó'],
        7: ['g', 'p', 'y'],
        8: ['h', 'q', 'z'],
        9: ['i', 'r', 'í']
    };


    let contem = '';
    const nome = iNome.value.toLowerCase();

    for (let i = 0; i < nome.length; i++) {
        const letras = nome[i];

        for (let key in numerologia) {
            if (numerologia[key].includes(letras)) {
                if (contem !== '') {
                    contem += "+";
                }
                contem += `${key}`;
            }
        }
    }
    
    
    const numero = contem.split('+');
    let soma = 0;
    for (let i = 0; i < numero.length; i++) {
        soma +=Number(numero[i]); 
    }

    const resultadoArray = {
        1: ['É a energia pura, positiva, original e criativa. Este é o primeiro dos números, é o início, o único, o absoluto. Representa o ímpeto que leva à realização. Eu sou! Eu faço! É a unidade, Deus; e também o Eu, a personalidade individual do ser humano.'],
        2: ['Representa a dualidade, é o portal para a nossa sensibilidade e diz respeito à nossa necessidade de estar em par. É o agente intermediário, já que a unidade só pode ser alcançada com a união de 2 mentes.'],
        3: ['É o portal para a mente consciente, raciocínio lógico, é o foco do lobo cerebral esquerdo, a chave da memória. É simbolizado pelo triângulo, que representa mente, alma e corpo.'],
        4: ['É simbolizado pelo quadrado, a base de praticamente todas as construções. Representa ainda a manifestação terrena - segundo a Bíblia, no quarto dia formou-se o mundo.'],
        5: ['Representa a mudança, a aventura, a curiosidade, a atividade constante, a adaptabilidade e a versatilidade.'],
        6: ['Tem relação com a criatividade e também a destruição. Fala sobre harmonia, verdade, justiça, equilíbrio, amor incondicional, compaixão, cura e serviço.'],
        7: ['Representa o ensino, a aprendizagem, a experiência espiritual, a filosofia e o resgate da quietude interna.'],
        8: ['Está associado ao equilíbrio entre o material e o espiritual para chegar ao ponto mais alto da evolução. É o equilíbrio cósmico, a harmonia das coisas, o símbolo da eternidade.'],
        9: ['Tem relação com a união entre o físico, o mental e o espiritual. É a universalidade, a impessoalidade, a generosidade, a benevolência, a abnegação e o respeito à vida.'],
        11: ['Você é idealista, incansável e enxerga as coisas além do que as pessoas normais vêem. A pessoa com a vibração do 11 é dotada de inspiração e precisa segui-la e revelá-la para a humanidade'],
        22: ['Você tem a missão de ajudar na evolução do planeta e da humanidade, em abnegação de si mesmo. Tem também a vibração do Mestre Construtor, mas evitamos reduzir 22 a 4 (2+2) pois seu significado está além.'],
        33: ['Está associado a um profundo senso de propósito espiritual e à capacidade de se tornar um instrumento de serviço altruísta para o bem da humanidade. É considerado um número de mestres e líderes espirituais, aqueles que têm uma missão especial neste mundo']
    };

    //-----------Aparecer Resultado da Data---------------//
    let resultoData = ''

    const arrayData = document.createElement('div');
    arrayData.classList.add('arrayData');
    containerData.appendChild(arrayData);

            if(somarData === 11 || somarData === 22 || somarData === 33) {
                resSD.textContent = `${somarData}`;
                resSD.classList.add('numMestre')

                const arrayCorrespData = resultadoArray[somarData] ;
                arrayData.textContent = `${arrayCorrespData}`;

                const divMD = document.createElement('div');
                divMD.classList.add('divMD')
                containerData.appendChild(divMD);
                divMD.textContent = 'PARABÉNS! Você tem um número mestre.'

            } else {
                const contSoma = somarData.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
                const verificaData = contSoma.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
                if (contSoma > 9) {
                    resSD.textContent = `${verificaData}`
                    resSD.classList.add('numNormal')

                    const arrayCorrespData = resultadoArray[verificaData] ;
                    arrayData.textContent = `${arrayCorrespData}`;
                } else {
                    resSD.textContent = `${contSoma}`
                    resSD.classList.add('numNormal')

                    const arrayCorrespData = resultadoArray[contSoma] ;
                    arrayData.textContent = `${arrayCorrespData}`;
                }
            }
            resultoData = resSD

            //-----------Aparecer Resultado do Nome-----------------//
   
            
    const somarDigitos = soma.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    const divSD = document.createElement('div');
    divSD.classList.add('divSD')
    containerNome.appendChild(divSD); 
    

    const arrayNome = document.createElement('div');
    arrayNome.classList.add('arrayNome');
    containerNome.appendChild(arrayNome);
    
    if (somarDigitos === 11 || somarDigitos === 22 || somarDigitos === 33) {
        divSD.textContent = `${somarDigitos}`;
        divSD.classList.add('numMestre');
        
        const arrayCorresp = resultadoArray[somarDigitos] ;
        arrayNome.textContent = `${arrayCorresp}`; 
        

        const divMN = document.createElement('div');
        divMN.classList.add('divMN')
        containerNome.appendChild(divMN);
        divMN.textContent = 'PARABÉNS! Você tem um número mestre.'
        
    } else {
        const continuarSoma = somarDigitos.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        const verificarSoma = continuarSoma > 9 ? continuarSoma : somarDigitos
        if (verificarSoma > 9) {
 
            divSD.textContent= `${continuarSoma}`;
            divSD.classList.add('numNormal')

            const arrayCorresp = resultadoArray[continuarSoma] ;
            arrayNome.textContent = `${arrayCorresp}`;
        
        } else {
  
            divSD.textContent= `${verificarSoma}`;
            divSD.classList.add('numNormal');

            const arrayCorresp = resultadoArray[verificarSoma] ;
            arrayNome.textContent = `${arrayCorresp}`;
            
        }
    }
};

}

