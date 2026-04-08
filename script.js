const questions = [
    { q: "Como se diz 'Bom dia'?", options: ["Bonjour", "Merci", "Salut"], correct: "Bonjour" },
    { q: "O que significa 'Pomme'?", options: ["Pão", "Maçã", "Batata"], correct: "Maçã" },
    { q: "Qual a tradução de 'L'eau'?", options: ["O fogo", "O leite", "A água"], correct: "A água" }
];

let currentQuestion = 0;

function loadQuestion() {
    const qData = questions[currentQuestion];
    document.getElementById("question").innerText = qData.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").classList.add("hidden");

    qData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.innerText = "Correct! ✅";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Errado! ❌";
        feedback.style.color = "red";
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "<h2>Fim de jogo! Félicitations! 🎉</h2>";
    }
};

loadQuestion();
