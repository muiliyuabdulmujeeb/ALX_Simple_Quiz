function checkAnswer() {
    const correctAnswer = '4';
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");
    if (!selectedRadio) {
        feedback.textContent = "No option selected";
        return;
    }

    const userAnswer = selectedRadio.value;
    if (correctAnswer == userAnswer) {
        feedback.textContent = "Correct! well done";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);