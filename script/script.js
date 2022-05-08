let selectedQuiz;
let currentQuestion = 0;
let rightAnswer = 0;
let audioSuccess = new Audio('sounds/success.mp3');
let audioFail = new Audio('sounds/fail.mp3');

function enableBtn(btnID){
    document.getElementById(btnID).disabled = false;
}

function disabledBtn(btnID){
    document.getElementById(btnID).disabled = true;
}

function init() {
    showStartScreen();
}

function showQuestion(QuizNumber) {
    selectedQuiz = filterQuiz(QuizNumber);
    let QuizPosition = selectedQuiz[(currentQuestion)];
    updateProgressbar();
    document.getElementById('lastQuestion').innerHTML = selectedQuiz.length;
    if (currentQuestion >= selectedQuiz.length) {
        showEndscreen();
    } else {
        showNewQuestion(QuizPosition);
    }
}

function updateProgressbar() {
    let percent = Math.round((currentQuestion / selectedQuiz.length) * 100);
    document.getElementById('progressBar').style = `width: ${percent}%;`;
    document.getElementById('progressBar').innerHTML = `${percent} %`;
}

function showEndscreen() {
    document.getElementById('quizEndscreen').style = "";
    document.getElementById('quizCard').style = "display:none";
    document.getElementById('allQuestions').innerHTML = selectedQuiz.length;
    document.getElementById('rightQuestions').innerHTML = rightAnswer;
    document.getElementById('quizEndscreenImg').src = "img/Trophy.png";
    document.getElementById('quizEndscreenImg').classList.add('mx-2', 'my-2');
}

function showNewQuestion(QuizPosition) {
    
    document.getElementById('actualQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = QuizPosition['question'];
    document.getElementById('answer_1').innerHTML = QuizPosition['answer_1'];
    document.getElementById('answer_2').innerHTML = QuizPosition['answer_2'];
    document.getElementById('answer_3').innerHTML = QuizPosition['answer_3'];
    document.getElementById('answer_4').innerHTML = QuizPosition['answer_4'];
}

function answer(selectedAnswer) {
    let Quiz = selectedQuiz[(currentQuestion)];
    let selectedAnswerNumber = selectedAnswer.slice(-1);
    let ID_RightAnswer = `answer_${Quiz['right_answer']}`;
    lockAnswerBtn();
    if (Quiz['right_answer'] == selectedAnswerNumber) {
        successAnswer(selectedAnswer);
    } else {
        failAnswer(selectedAnswer,ID_RightAnswer);
    }
    enableBtn('nextQuestion');
}

function successAnswer(selectedAnswer) {
    document.getElementById(selectedAnswer).classList.add('bg-success');
    rightAnswer++;
    audioSuccess.play();
}

function failAnswer(selectedAnswer,ID_RightAnswer) {
    document.getElementById(selectedAnswer).classList.add('bg-danger');
    document.getElementById(ID_RightAnswer).classList.add('bg-success');
    audioFail.play();
}

function nextQuestion(QuizNumber) {
    currentQuestion++;
    disabledBtn('nextQuestion');
    unlockAnswerBtn();
    resetAnswerBtn();
    showQuestion(QuizNumber);
}

function resetAnswerBtn() {
    for (let index = 1; index < 5; index++) {
        document.getElementById(`answer_${index}`).classList.remove('bg-danger');
        document.getElementById(`answer_${index}`).classList.remove('bg-success');
    }
}

function resetQuiz() {
    currentQuestion = 0;
    rightAnswer = 0;
    document.getElementById('quizEndscreenImg').src = "img/backgroundCard.png";
    document.getElementById('quizEndscreen').style = "display:none";
    document.getElementById('quizCard').style = "";
    document.getElementById('progressBar').style = `width: 0%;`;
    document.getElementById('progressBar').innerHTML = `0 %`;
    init();
}

function lockAnswerBtn(){
    for (let index = 1; index < 5; index++) {
        disabledBtn(`answer_${index}`);
    }  
}

function unlockAnswerBtn(){
    for (let index = 1; index < 5; index++) {
        enableBtn(`answer_${index}`);
    }                                              
}



function showStartScreen(){
    document.getElementById('content').innerHTML = "";
    document.getElementById('content').innerHTML = templateGameMenu();
}

function startQuiz(QuizNumber){
    document.getElementById('content').innerHTML = "";
    document.getElementById('content').innerHTML = templateQuiz(QuizNumber);
    showQuestion(QuizNumber);
}

function filterQuiz(filterQuiz){
    return quizContent.filter(quiz => quiz.quiz_name == filterQuiz);
} 