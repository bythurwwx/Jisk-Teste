const questions = [
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
    { q: "20. Como se diz 'Irmã'?", options: ["Sœur", "Frère", "Fille"], correct: "Sœur" }
];

let currentQuestion = 0;
let userErrors = [];

function updateDisplay() {
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

    updateDisplay();
    questionEl.innerText = qData.q;
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
    const qData = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    const allButtons = document.querySelectorAll("#options button");

    allButtons.forEach(b => b.disabled = true);

    if (selected === qData.correct) {
        feedback.innerText = "Très bien! ✅";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Dommage! ❌ A correta era: ${qData.correct}`;
        feedback.style.color = "#ed2939";
        userErrors.push({
            pergunta: qData.q,
            suaResposta: selected,
            correta: qData.correct
        });
    }

    nextBtn.classList.remove("hidden");
    nextBtn.onclick = () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showSummary();
        }
    };
}

function showSummary() {
    const quizDiv = document.getElementById("quiz");
    const totalHits = questions.length - userErrors.length;
    
    let reportHTML = `
        <div style="text-align: left; max-height: 400px; overflow-y: auto; padding: 10px;">
            <h2 style="text-align: center;">Resultado Final 🏆</h2>
            <p style="text-align: center; font-weight: bold;">Acertos: ${totalHits} / ${questions.length}</p>
            <hr>
            <h3>Resumo de Erros:</h3>
    `;

    if (userErrors.length === 0) {
        reportHTML += `<p style="color: green;">Parabéns! Você não cometeu nenhum erro! 🇫🇷</p>`;
    } else {
        userErrors.forEach((err) => {
            reportHTML += `
                <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                    <strong>${err.pergunta}</strong><br>
                    <span style="color: red;">Sua resposta: ${err.suaResposta}</span><br>
                    <span style="color: green;">Resposta correta: ${err.correta}</span>
                </div>
            `;
        });
    }

    reportHTML += `</div><button onclick="location.reload()" style="width: 100%; margin-top: 20px; background: #002395; color: white; padding: 15px; border-radius: 10px; border: none; cursor: pointer; font-weight: bold;">Tentar Novamente</button>`;
    
    quizDiv.innerHTML = reportHTML;
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("stats").innerText = "Fim de Jogo";
}

loadQuestion();
