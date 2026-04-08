const questions = [
    // --- BÁSICO (1-20) ---
    { q: "1. Como se diz 'Bom dia'?", options: ["Bonjour", "Merci", "Salut"], correct: "Bonjour" },
    { q: "2. O que significa 'Pomme'?", options: ["Pão", "Maçã", "Batata"], correct: "Maçã" },
    { q: "3. Qual a tradução de 'L'eau'?", options: ["O fogo", "O leite", "A água"], correct: "A água" },
    { q: "4. Como se diz 'Obrigado'?", options: ["S'il vous plaît", "Merci", "De rien"], correct: "Merci" },
    { q: "5. O que é 'Un chat'?", options: ["Um cachorro", "Um gato", "Um coelho"], correct: "Um gato" },
    { q: "6. 'Bonsoir' é usado para:", options: ["Dar bom dia", "Dar boa noite ao chegar", "Se despedir"], correct: "Dar boa noite ao chegar" },
    { q: "7. Qual o número 'Trois'?", options: ["2", "3", "4"], correct: "3" },
    { q: "8. O que significa 'Rouge'?", options: ["Azul", "Verde", "Vermelho"], correct: "Vermelho" },
    { q: "9. Como se diz 'Por favor'?", options: ["Merci", "S'il vous plaît", "Excusez-moi"], correct: "S'il vous plaît" },
    { q: "10. O que é 'Une voiture'?", options: ["Uma bicicleta", "Um carro", "Um avião"], correct: "Um carro" },
    { q: "11. Qual a cor 'Bleu'?", options: ["Branco", "Preto", "Azul"], correct: "Azul" },
    { q: "12. Como se diz 'Pai'?", options: ["Père", "Mère", "Frère"], correct: "Père" },
    { q: "13. O que significa 'Manger'?", options: ["Beber", "Dormir", "Comer"], correct: "Comer" },
    { q: "14. Como se diz 'Escola'?", options: ["Église", "École", "Hôpital"], correct: "École" },
    { q: "15. Qual o número 'Dix'?", options: ["5", "10", "20"], correct: "10" },
    { q: "16. O que é 'Un livre'?", options: ["Um caderno", "Um livro", "Uma caneta"], correct: "Um livro" },
    { q: "17. Como se diz 'Sim'?", options: ["Non", "Oui", "Peut-être"], correct: "Oui" },
    { q: "18. O que significa 'Pain'?", options: ["Vinho", "Queijo", "Pão"], correct: "Pão" },
    { q: "19. Qual a tradução de 'Soleil'?", options: ["Lua", "Sol", "Estrela"], correct: "Sol" },
    { q: "20. Como se diz 'Irmã'?", options: ["Sœur", "Frère", "Fille"], correct: "Sœur" },

    // --- INTERMEDIÁRIO (21-40) ---
    { q: "21. O que é 'Vert'?", options: ["Verde", "Amarelo", "Cinza"], correct: "Verde" },
    { q: "22. Como se diz 'Hoje'?", options: ["Demain", "Hier", "Aujourd'hui"], correct: "Aujourd'hui" },
    { q: "23. O que significa 'Petit'?", options: ["Grande", "Pequeno", "Largo"], correct: "Pequeno" },
    { q: "24. 'Lundi' é qual dia?", options: ["Sábado", "Domingo", "Segunda-feira"], correct: "Segunda-feira" },
    { q: "25. Como se diz 'Janela'?", options: ["Porte", "Fenêtre", "Mur"], correct: "Fenêtre" },
    { q: "26. O que é 'Le fromage'?", options: ["O presunto", "O queijo", "A manteiga"], correct: "O queijo" },
    { q: "27. Qual a tradução de 'Chien'?", options: ["Gato", "Pássaro", "Cachorro"], correct: "Cachorro" },
    { q: "28. Como se diz 'Adeus'?", options: ["Bonjour", "Au revoir", "À bientôt"], correct: "Au revoir" },
    { q: "29. O que significa 'Heureux'?", options: ["Triste", "Feliz", "Zangado"], correct: "Feliz" },
    { q: "30. Qual o número 'Huit'?", options: ["6", "7", "8"], correct: "8" },
    { q: "31. 'Maison' significa:", options: ["Prédio", "Casa", "Apartamento"], correct: "Casa" },
    { q: "32. Como se diz 'Coração'?", options: ["Main", "Pied", "Cœur"], correct: "Cœur" },
    { q: "33. 'Écouter' significa:", options: ["Falar", "Ouvir", "Escrever"], correct: "Ouvir" },
    { q: "34. O que é 'Un stylo'?", options: ["Lápis", "Caneta", "Borracha"], correct: "Caneta" },
    { q: "35. Como se diz 'Céu'?", options: ["Mer", "Terre", "Ciel"], correct: "Ciel" },
    { q: "36. Qual a cor 'Jaune'?", options: ["Laranja", "Amarelo", "Rosa"], correct: "Amarelo" },
    { q: "37. 'Petit-déjeuner' é:", options: ["Almoço", "Jantar", "Café da manhã"], correct: "Café da manhã" },
    { q: "38. Como se diz 'Irmão'?", options: ["Père", "Frère", "Oncle"], correct: "Frère" },
    { q: "39. O que é 'L'argent'?", options: ["O ouro", "A prata", "O dinheiro"], correct: "O dinheiro" },
    { q: "40. 'Travailler' significa:", options: ["Viajar", "Trabalhar", "Descansar"], correct: "Trabalhar" },

    // --- CONTINUAÇÃO ATÉ 100 (Exemplos de estrutura) ---
    { q: "41. Como se diz 'Mulher'?", options: ["Homme", "Femme", "Enfant"], correct: "Femme" },
    { q: "42. O que é 'Le lait'?", options: ["O leite", "O suco", "O café"], correct: "O leite" },
    { q: "43. Tradução de 'Heure':", options: ["Tempo", "Hora", "Ano"], correct: "Hora" },
    { q: "44. 'Noir' é que cor?", options: ["Branco", "Cinza", "Preto"], correct: "Preto" },
    { q: "45. Como se diz 'Obrigada' (feminino)?", options: ["Merci", "Merci beaucoup", "É o mesmo que masculino"], correct: "É o mesmo que masculino" },
    { q: "46. O que é 'Une pomme de terre'?", options: ["Maçã", "Batata", "Cenoura"], correct: "Batata" },
    { q: "47. 'Vendre' significa:", options: ["Comprar", "Vender", "Trocar"], correct: "Vender" },
    { q: "48. Como se diz 'Avião'?", options: ["Train", "Avion", "Bateau"], correct: "Avion" },
    { q: "49. 'L'été' é qual estação?", options: ["Inverno", "Primavera", "Verão"], correct: "Verão" },
    { q: "50. Qual o número 'Vingt'?", options: ["20", "30", "40"], correct: "20" },
    // Adicione as questões 51 a 100 seguindo este padrão:
    { q: "51. Como se diz 'Mão'?", options: ["Pied", "Main", "Tête"], correct: "Main" },
    { q: "52. 'Regarder' significa:", options: ["Olhar/Assistir", "Ouvir", "Sentir"], correct: "Olhar/Assistir" },
    { q: "53. O que é 'Un parapluie'?", options: ["Um sol", "Um guarda-chuva", "Uma bota"], correct: "Um guarda-chuva" },
    { q: "54. 'Froid' significa:", options: ["Quente", "Frio", "Morno"], correct: "Frio" },
    { q: "55. Como se diz 'Amanhã'?", options: ["Hier", "Maintenant", "Demain"], correct: "Demain" },
    { q: "56. 'Ville' significa:", options: ["Vila", "Cidade", "País"], correct: "Cidade" },
    { q: "57. 'Poisson' é:", options: ["Pássaro", "Peixe", "Veneno"], correct: "Peixe" },
    { q: "58. 'Chambre' é qual cômodo?", options: ["Cozinha", "Sala", "Quarto"], correct: "Quarto" },
    { q: "59. Como se diz 'Sempre'?", options: ["Jamais", "Souvent", "Toujours"], correct: "Toujours" },
    { q: "60. Qual o número 'Cinquante'?", options: ["50", "60", "70"], correct: "50" },
    { q: "61. 'Bière' significa:", options: ["Vinho", "Cerveja", "Água"], correct: "Cerveja" },
    { q: "62. 'Oiseau' é:", options: ["Peixe", "Pássaro", "Gato"], correct: "Pássaro" },
    { q: "63. Como se diz 'Amigo'?", options: ["Ennemi", "Ami", "Voisin"], correct: "Ami" },
    { q: "64. 'Mer' significa:", options: ["Mãe", "Mar", "Mesa"], correct: "Mar" },
    { q: "65. O que é 'Un cadeau'?", options: ["Um cartão", "Um presente", "Um cadeado"], correct: "Um presente" },
    { q: "66. 'Rapide' é:", options: ["Rápido", "Lento", "Forte"], correct: "Rápido" },
    { q: "67. 'Écrire' significa:", options: ["Ler", "Escrever", "Falar"], correct: "Escrever" },
    { q: "68. Como se diz 'Perto'?", options: ["Loin", "Près", "Haut"], correct: "Près" },
    { q: "69. 'Sucre' é:", options: ["Sal", "Açúcar", "Pimenta"], correct: "Açúcar" },
    { q: "70. Qual o número 'Cent'?", options: ["50", "100", "1000"], correct: "100" },
    { q: "71. 'Jardin' significa:", options: ["Jardim", "Garagem", "Sacada"], correct: "Jardim" },
    { q: "72. 'Acheter' significa:", options: ["Vender", "Pagar", "Comprar"], correct: "Comprar" },
    { q: "73. 'Matin' é:", options: ["Manhã", "Tarde", "Noite"], correct: "Manhã" },
    { q: "74. 'Lentement' significa:", options: ["Rapidamente", "Lentamente", "Fortemente"], correct: "Lentamente" },
    { q: "75. 'Bateau' é:", options: ["Carro", "Barco", "Trem"], correct: "Barco" },
    { q: "76. 'Vieux' significa:", options: ["Novo", "Velho", "Jovem"], correct: "Velho" },
    { q: "77. 'Lire' significa:", options: ["Ler", "Rir", "Ir"], correct: "Ler" },
    { q: "78. 'Cheveux' são:", options: ["Olhos", "Dentes", "Cabelos"], correct: "Cabelos" },
    { q: "79. 'Chanteur' é:", options: ["Dançarino", "Cantor", "Ator"], correct: "Cantor" },
    { q: "80. 'Quatre-vingts' é:", options: ["40", "80", "90"], correct: "80" },
    { q: "81. 'Femme' significa:", options: ["Esposa/Mulher", "Irmã", "Mãe"], correct: "Esposa/Mulher" },
    { q: "82. 'Cuisine' é:", options: ["Banheiro", "Cozinha", "Quarto"], correct: "Cozinha" },
    { q: "83. 'Courir' significa:", options: ["Caminhar", "Correr", "Saltar"], correct: "Correr" },
    { q: "84. 'Chapeau' é:", options: ["Sapato", "Chapéu", "Camisa"], correct: "Chapéu" },
    { q: "85. 'Lune' significa:", options: ["Sol", "Lua", "Terra"], correct: "Lua" },
    { q: "86. 'Parler' significa:", options: ["Falar", "Calar", "Pensar"], correct: "Falar" },
    { q: "87. 'Nouveau' é:", options: ["Antigo", "Novo", "Caro"], correct: "Novo" },
    { q: "88. 'Épaule' é:", options: ["Pescoço", "Ombro", "Braço"], correct: "Ombro" },
    { q: "89. 'Vin' significa:", options: ["Suco", "Vinho", "Água"], correct: "Vinho" },
    { q: "90. 'Soixante' é:", options: ["60", "70", "16"], correct: "60" },
    { q: "91. 'Ouvrir' significa:", options: ["Fechar", "Ouvir", "Abrir"], correct: "Abrir" },
    { q: "92. 'Fermer' significa:", options: ["Abrir", "Fechar", "Bater"], correct: "Fechar" },
    { q: "93. 'Avocat' pode ser uma fruta ou:", options: ["Médico", "Advogado", "Engenheiro"], correct: "Advogado" },
    { q: "94. 'Joli' significa:", options: ["Feio", "Bonito", "Grande"], correct: "Bonito" },
    { q: "95. 'Triste' em francês é:", options: ["Heureux", "Triste", "Fâché"], correct: "Triste" },
    { q: "96. 'Velo' é:", options: ["Moto", "Bicicleta", "Carro"], correct: "Bicicleta" },
    { q: "97. 'Pied' significa:", options: ["Mão", "Pé", "Cabeça"], correct: "Pé" },
    { q: "98. 'Hiver' é:", options: ["Verão", "Inverno", "Outono"], correct: "Inverno" },
    { q: "99. 'S'il vous plaît' é:", options: ["Obrigado", "Por favor", "De nada"], correct: "Por favor" },
    { q: "100. 'Félicitations' significa:", options: ["Obrigado", "Parabéns", "Oi"], correct: "Parabéns" }
];

// ... (Cole aqui toda aquela lista de 100 perguntas da resposta anterior) ...

let currentQuestion = 0;

function updateProgress() {
    const percent = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("stats").innerText = `Questão: ${currentQuestion + 1} / ${questions.length}`;
}

function loadQuestion() {
    const qData = questions[currentQuestion];
    const questionEl = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    updateProgress();
    questionEl.innerText = qData.q;
    optionsDiv.innerHTML = "";
    feedback.innerText = "";
    nextBtn.classList.add("hidden");
    nextBtn.classList.remove("error-state");

    qData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    const allButtons = document.querySelectorAll("#options button");

    // Desativa botões após escolher
    allButtons.forEach(b => b.disabled = true);

    if (selected === questions[currentQuestion].correct) {
        feedback.innerText = "Très bien! ✅";
        feedback.style.color = "green";
        nextBtn.innerText = "Próxima";
        nextBtn.onclick = () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showWin();
            }
        };
    } else {
        feedback.innerText = "Dommage! ❌ Voltando ao início...";
        feedback.style.color = "var(--f-red)";
        nextBtn.innerText = "Recomeçar do zero";
        nextBtn.classList.add("error-state");
        nextBtn.onclick = () => {
            currentQuestion = 0;
            loadQuestion();
        };
    }
    nextBtn.classList.remove("hidden");
}

function showWin() {
    document.getElementById("quiz").innerHTML = `
        <div style="font-size: 50px;">🏆</div>
        <h2>Félicitations!</h2>
        <p>Você completou o desafio das 100 palavras!</p>
    `;
    document.getElementById("next-btn").classList.add("hidden");
}

loadQuestion();

