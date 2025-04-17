const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "High Tech Modern Language", correct: false }
      ]
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
      ]
    },
    {
      question: "Which of the following is a JavaScript framework?",
      answers: [
        { text: "React.js", correct: true },
        { text: "Laravel", correct: false },
        { text: "Django", correct: false },
        { text: "Spring Boot", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const finalScore = document.getElementById("final-score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hide");
    document.getElementById("question-container").classList.remove("hide");
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
  }
  
  function selectAnswer(button, correct) {
    if (correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
    }
  
    Array.from(answerButtons.children).forEach(btn => {
      btn.disabled = true;
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    document.getElementById("question-container").classList.add("hide");
    scoreContainer.classList.remove("hide");
    finalScore.innerText = `${score} / ${questions.length}`;
  }
  
  startQuiz();
  