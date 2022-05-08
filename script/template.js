function templateGameMenu() {
    return `
            <div class="gameMenu card-body">
                <h5 class="card-title textCenter">Wähle dein Quiz</h5>
                <button type="button" class="card w-50 p-3 quizBtn mb-2" id=""
                    onclick="startQuiz('Quiz_1')">Quiz 1</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2" id=""
                    onclick="startQuiz('Quiz_2')">Quiz 2</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2" id=""
                    onclick="">Quiz 3</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2" id=""
                    onclick="">Dein Quiz spielen</button>
                <h5 class="card-title textCenter">Oder erstelle dein eigenes Quiz</h5>
                <button type="button" class="card w-50 p-3 quizBtn" id=""
                    onclick="">Jetzt dein eigenes Quiz erstellen</button>
            </div>
    `
}

function templateQuiz(QuizNumber){
    return `
            <div class="progress">
                    <div class="progress-bar" id="progressBar" role="progressbar" style="width: 25%;">0%</div>
            </div>
            <div class="card-body" style="display: none;" id="quizEndscreen">
                <h5 class="card-title textCenter">Quiz beendet</h5>
                <div class="textCenter mt-2">
                    Du hast <b id="rightQuestions"></b> von <b id="allQuestions"></b> Fragen richtig beantwortet.
                </div>
                <div class="restartQuiz mt-2">
                    <button type="button" onclick="resetQuiz()" class="btn btn-success">Hauptmenu</button>
                </div>
            </div>
            <div class="card-body" id="quizCard">
                <h5 class="card-title textCenter mb-4" id="questionText"></h5>
                <div>
                    <div class="answerRowCard">
                        <button type="button" class="card mb-2 mx-1 w-50 p-3 answerBtn" id="answer_1" enable onclick="answer('answer_1')"></button>
                        <button type="button" class="card mb-2 mx-1 w-50 p-3 answerBtn" id="answer_2" enable onclick="answer('answer_2')"></button>
                    </div>
                    <div class="answerRowCard">
                        <button type="button" class="card mb-2 mx-1 w-50 p-3 answerBtn" id="answer_3" enable onclick="answer('answer_3')"></button>
                            <button type="button" class="card mb-2 mx-1 w-50 p-3 answerBtn" id="answer_4" enable onclick="answer('answer_4')"></button>
                    </div>
                </div>
                <div class="quizCardFooter mx-1 pt-2">
                    <p><b id="actualQuestion"></b> von <b id="lastQuestion"></b> Fragen</p>
                    <button type="button" id="nextQuestion" disabled onclick="nextQuestion('${QuizNumber}')" class="btn btn-success">Nächste Frage</button>
                </div>
            </div>
    `
}