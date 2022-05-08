function init() {
    document.getElementById('lastQuestion').innerHTML = quizContent.length;
    showQuestion();
}

function showQuestion() {
    let Quiz = quizContent[(currentQuestion)];

    if (currentQuestion >= quizContent.length) {
        document.getElementById('quizEndscreen').style="";
        document.getElementById('quizCard').style="display:none";
        document.getElementById('allQuestions').innerHTML = quizContent.length;
        document.getElementById('rightQuestions').innerHTML = rightAnswer;
        document.getElementById('quizEndscreenImg').src = "img/Trophy.png";
        document.getElementById('quizEndscreenImg').classList.add('mx-2','mt-2');

    } else {
        document.getElementById('actualQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = Quiz['question'];
        document.getElementById('answer_1').innerHTML = Quiz['answer_1'];
        document.getElementById('answer_2').innerHTML = Quiz['answer_2'];
        document.getElementById('answer_3').innerHTML = Quiz['answer_3'];
        document.getElementById('answer_4').innerHTML = Quiz['answer_4'];
    }
}
function answer(selectedAnswer) {
    let Quiz = quizContent[(currentQuestion)];
    let selectedAnswerNumber = selectedAnswer.slice(-1);
    let ID_RightAnswer = `answer_${Quiz['right_answer']}`;
    if (Quiz['right_answer'] == selectedAnswerNumber) {
        document.getElementById(selectedAnswer).classList.add('bg-success')
        rightAnswer ++;
    } else {
        document.getElementById(selectedAnswer).classList.add('bg-danger')
        document.getElementById(ID_RightAnswer).classList.add('bg-success')
    }
    document.getElementById('nextQuestion').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextQuestion').disabled = true;
    resetAnswerBtn();
    showQuestion();
}

function resetAnswerBtn() {
    document.getElementById(`answer_1`).classList.remove('bg-danger')
    document.getElementById(`answer_1`).classList.remove('bg-success')
    document.getElementById(`answer_2`).classList.remove('bg-danger')
    document.getElementById(`answer_2`).classList.remove('bg-success')
    document.getElementById(`answer_3`).classList.remove('bg-danger')
    document.getElementById(`answer_3`).classList.remove('bg-success')
    document.getElementById(`answer_4`).classList.remove('bg-danger')
    document.getElementById(`answer_4`).classList.remove('bg-success')
}