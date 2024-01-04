document.addEventListener('click', function(evt) {
    const newDiv = document.getElementById('container')

    if(newDiv) {
        newDiv.innerHTML = '';
        newDiv.style.display = 'none';
        
        if ( evt.target.id === 'section1') {
            newDiv.style.display = 'block'
            const section = document.createElement('section');
            const p = document.createElement('p');
            p.textContent = "Nesse site de tarot e numerologia, os visitantes terão acesso a leituras de tarot personalizadas e calculadoras de numerologia para descobrir insights sobre suas vidas e destinos. Forneceremos uma seção de conselho geral para o seu dia, com recomendações de ervas e cristais que podem ser usados para potencializar o conselho e outra seção para você conhecer um pouco mais de si mesmo através da numerologia."
            section.appendChild(p);
            newDiv.appendChild(section);
        } else if (evt.target.id === 'section2') {
            newDiv.style.display = 'block'
            const section = document.createElement('section');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const tagA = document.createElement('a');
            p.textContent = "O tarot é um sistema de adivinhação e autoconhecimento que utiliza um baralho especial de cartas chamado tarô, composto por 78 cartas, divididas em Arcanos Maiores e Arcanos Menores. Cada carta do tarot possui um simbolismo e significado únicos, e a interpretação delas pode fornecer insights sobre questões pessoais, orientação espiritual e previsões futuras. O tarot é frequentemente usado como uma ferramenta de reflexão e autoconhecimento, permitindo que as pessoas explorem aspectos de sua vida, emoções e desafios. É importante observar que o tarot não é uma prática científica, mas sim uma forma de exploração simbólica e espiritual. Lembre-se sempre: Os conselhos são apenas conselhos, não uma sentença, é apenas uma tendência de acordo com a sua energia, você sempre terá o se livre-árbitrio para seguir ou não o conselho"
            tagA.href = "cartas.html";
            tagA.textContent = "Ir para a página";
            tagA.classList.add("tagA");
            section.appendChild(p);
            section.appendChild(button)
            newDiv.appendChild(section);
            button.appendChild(tagA)
        } else if (evt.target.id === 'section3') {
            newDiv.style.display = 'block'
            const section = document.createElement('section');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const tagA = document.createElement('a');
            p.textContent = "A numerologia é um sistema místico que atribui significados e influências a números e padrões numéricos, com o objetivo de revelar informações sobre a personalidade, destino e caminho de vida de uma pessoa. A prática envolve a análise dos números associados ao nome e à data de nascimento do indivíduo, bem como a redução desses números a um dígito ou número mestre. Cada número é associado a traços de personalidade, características e tendências, e a combinação de números revela interpretações específicas. A numerologia é frequentemente usada para ganhar autoconhecimento, tomar decisões, planejar o futuro e explorar as conexões entre os números e os eventos da vida. É uma crença esotérica que não possui base científica, mas é valorizada por muitas pessoas que a veem como uma ferramenta para compreender e melhorar a vida pessoal e espiritual.";
            tagA.href = "num.html";
            tagA.textContent = "Ir para a página";
            tagA.classList.add("tagA");
            section.appendChild(p);
            section.appendChild(button);
            newDiv.appendChild(section);
            button.appendChild(tagA);
            }  
    }   
});











