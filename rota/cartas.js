

const emb = document.getElementById('emb');
const sort = document.getElementById('sort');

let embaralhou = false

function trocarIds() {
    const divUm = document.getElementById('um');
    const divDois = document.getElementById('dois');
    const divTres = document.getElementById('tres');
    const divQuatro = document.getElementById('quatro');
    const divCinco = document.getElementById('cinco');
    
    const idsAtuais = [divUm.id, divDois.id, divTres.id, divQuatro.id, divCinco.id]
    
    for (let i = idsAtuais.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idsAtuais[i], idsAtuais[j]] = [idsAtuais[j], idsAtuais[i]];
    }
    
    divUm.id = idsAtuais[0];
    divDois.id = idsAtuais[1];
    divTres.id = idsAtuais[2];
    divQuatro.id = idsAtuais[3];
    divCinco.id = idsAtuais[4];

    embaralhou = true;   
}


function sortear() {
    if (embaralhou) {
        
        const cartaSorteada = window.cartaSorteada[Math.floor(Math.random() * window.cartaSorteada.length)];

        const newSection = document.getElementById('novaSection');
        const elementMain = document.getElementById('elementMain');

        newSection.innerHTML = ''
        newSection.classList.add('newSection')
        elementMain.classList.add('hidden');

        const divBut = document.createElement('div');
        divBut.classList.add('divBut');
        newSection.appendChild(divBut);

        const imgCon = document.createElement('div');
        const imagemCarta = document.createElement('img');
        imagemCarta.src = cartaSorteada.imagem;
        imgCon.appendChild(imagemCarta);
        imgCon.classList.add('cartaTarot');
        imagemCarta.classList.add('imagemCarta');
        newSection.appendChild(imgCon);

        const txtCon = document.createElement('div');
        const conselho = document.createElement('p');
        conselho.textContent = "Conselho: "
        txtCon.classList.add('containerConselho');
        txtCon.appendChild(conselho);
        conselho.classList.add('conselho')
        
        const p = document.createElement('p');
        p.textContent = cartaSorteada.conselho
        txtCon.appendChild(p)
        p.classList.add('parag')
        newSection.appendChild(txtCon);
        
        const containerCristalErva = document.createElement('div');
        containerCristalErva.classList.add('containerCristalErva');
        newSection.appendChild(containerCristalErva)
        
        
        const cristal = document.createElement('div');
        const txtC = document.createElement('p');
        txtC.textContent = 'Cristal: ' + cartaSorteada.cristal;
        const iCristal = document.createElement('img');
        iCristal.src = cartaSorteada.imgCristal;
        containerCristalErva.appendChild(txtC);
        txtC.classList.add('txtC');
        containerCristalErva.appendChild(iCristal);
        iCristal.classList.add('iCristal');
        containerCristalErva.appendChild(cristal);

        const erva = document.createElement('div');
        const txtE = document.createElement('p');
        txtE.textContent = 'Erva: ' + cartaSorteada.erva;
        const iErva = document.createElement('img');
        iErva.src = cartaSorteada.imgErva;
        containerCristalErva.appendChild(txtE);
        txtE.classList.add('txtE');
        containerCristalErva.appendChild(iErva);
        iErva.classList.add('iErva');
        containerCristalErva.appendChild(erva);
        

        const buttonInicio = document.createElement('button');
        buttonInicio.classList.add('but');
        buttonInicio.classList.add('butI');
        const tagA = document.createElement('a');
        tagA.href = 'index.html';
        tagA.textContent = "Início";
        tagA.classList.add('tagA')
        buttonInicio.appendChild(tagA);
        divBut.appendChild(buttonInicio);


        const buttonTarot = document.createElement('button');
        buttonTarot.classList.add('but');
        buttonTarot.classList.add('butT');
        const tagT = document.createElement('a');
        tagT.href = 'cartas.html';
        tagT.textContent = 'Novo Sorteio'
        tagT.classList.add('tagT');
        buttonTarot.appendChild(tagT);
        divBut.appendChild(buttonTarot);

        newSection.style.display = 'relative';

    } else {
        alert('Por favor, embaralhe as cartas primeiro');
    }
}

emb.addEventListener('click', trocarIds);
sort.addEventListener('click', sortear);





