const questions = [
    { q: "Como se diz 'Bom dia'?", options: ["Bonjour", "Merci", "Salut"], correct: "Bonjour" },
    { q: "O que significa 'Pomme'?", options: ["Pão", "Maçã", "Batata"], correct: "Maçã" },
    { q: "Qual a tradução de 'L'eau'?", options: ["O fogo", "O leite", "A água"], correct: "A água" },
    { q: "Como se diz 'Obrigado'?", options: ["S'il vous plaît", "Merci", "De rien"], correct: "Merci" },
    { q: "O que é 'Un chat'?", options: ["Um cachorro", "Um gato", "Um coelho"], correct: "Um gato" },
    { q: "Como se diz 'Boa noite' (ao chegar)?", options: ["Bonsoir", "Bonne nuit", "Salut"], correct: "Bonsoir" },
    { q: "Qual o número 'Trois'?", options: ["2", "3", "4"], correct: "3" },
    { q: "O que significa 'Rouge'?", options: ["Azul", "Verde", "Vermelho"], correct: "Vermelho" },
    { q: "Como se diz 'Por favor'?", options: ["Merci", "S'il vous plaît", "Excusez-moi"], correct: "S'il vous plaît" },
    { q: "O que é 'Une voiture'?", options: ["Uma bicicleta", "Um carro", "Um avião"], correct: "Um carro" },
    { q: "Qual a cor 'Bleu'?", options: ["Branco", "Preto", "Azul"], correct: "Azul" },
    { q: "Como se diz 'Pai'?", options: ["Père", "Mère", "Frère"], correct: "Père" },
    { q: "O que significa 'Manger'?", options: ["Beber", "Dormir", "Comer"], correct: "Comer" },
    { q: "Como se diz 'Escola'?", options: ["Église", "École", "Hôpital"], correct: "École" },
    { q: "Qual o número 'Dix'?", options: ["5", "10", "20"], correct: "10" },
    { q: "O que é 'Un livre'?", options: ["Um caderno", "Um livro", "Uma caneta"], correct: "Um livro" },
    { q: "Como se diz 'Sim'?", options: ["Non", "Oui", "Peut-être"], correct: "Oui" },
    { q: "O que significa 'Pain'?", options: ["Vinho", "Queijo", "Pão"], correct: "Pão" },
    { q: "Qual a tradução de 'Soleil'?", options: ["Lua", "Sol", "Estrela"], correct: "Sol" },
    { q: "Como se diz 'Irmã'?", options: ["Sœur", "Frère", "Fille"], correct: "Sœur" },
    { q: "O que é 'Vert'?", options: ["Verde", "Amarelo", "Cinza"], correct: "Verde" },
    { q: "Como se diz 'Hoje'?", options: ["Demain", "Hier", "Aujourd'hui"], correct: "Aujourd'hui" },
    { q: "O que significa 'Petit'?", options: ["Grande", "Pequeno", "Largo"], correct: "Pequeno" },
    { q: "Qual o dia da semana 'Lundi'?", options: ["Sábado", "Domingo", "Segunda-feira"], correct: "Segunda-feira" },
    { q: "Como se diz 'Janela'?", options: ["Porte", "Fenêtre", "Mur"], correct: "Fenêtre" },
    { q: "O que é 'Le fromage'?", options: ["O presunto", "O queijo", "A manteiga"], correct: "O queijo" },
    { q: "Qual a tradução de 'Chien'?", options: ["Gato", "Pássaro", "Cachorro"], correct: "Cachorro" },
    { q: "Como se diz 'Adeus'?", options: ["Bonjour", "Au revoir", "À bientôt"], correct: "Au revoir" },
    { q: "O que significa 'Heureux'?", options: ["Triste", "Feliz", "Zangado"], correct: "Feliz" },
    { q: "Qual o número 'Huit'?", options: ["6", "7", "8"], correct: "8" }
];

let currentQuestion = 0;

function loadQuestion() {
    const qData = questions[currentQuestion];
    const questionEl = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    questionEl.innerText = `Questão ${currentQuestion + 1}/30: ${qData.q}`;
    optionsDiv.innerHTML = "";
    feedback.innerText = "";
    nextBtn.classList.add("hidden");

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

    if (selected === questions[currentQuestion].correct) {
        feedback.innerText = "Correct! ✅";
        feedback.style.color = "green";
        nextBtn.innerText = "Próxima Pergunta";
        nextBtn.classList.remove("hidden");
    } else {
        feedback.innerText = "Errado! ❌ Voltando ao início...";
        feedback.style.color = "red";
        nextBtn.innerText = "Reiniciar Jogo";
        nextBtn.classList.remove("hidden");
        // Se errar, ao clicar no botão ele reinicia
        nextBtn.onclick = () => {
            currentQuestion = 0;
            loadQuestion();
        };
    }
}

document.getElementById("next-btn").onclick = function() {
    // Esta função só é chamada se o botão "Próxima Pergunta" aparecer (acerto)
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "<h2>Félicitations! 🎉 Você completou as 30 questões sem errar!</h2>";
    }
};

loadQuestion();
