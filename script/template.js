function templateGameMenu(titleQuiz) {
    return `
            <div class="gameMenu card-body">
                <h5 class="card-title textCenter">Wähle dein Quiz</h5>
                <button type="button" class="card w-50 p-3 quizBtn mb-2"
                    onclick="startQuiz('Quiz_1')">Quiz 1</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2"
                    onclick="startQuiz('Quiz_2')">Quiz 2</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2"
                    onclick="startQuiz('Quiz_3')">Quiz 3</button>
                <button type="button" class="card w-50 p-3 quizBtn mb-2" id="yourQuizName"
                    onclick="startQuiz('${titleQuiz}')">Dein Quiz spielen</button>
                <h5 class="card-title textCenter">Oder erstelle dein eigenes Quiz</h5>
                <button type="button" class="card w-50 p-3 quizBtn" id=""
                    onclick="createYourQuiz()">Jetzt dein eigenes Quiz erstellen</button>
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

function templateCreateYourQuiz(){
    return`
    <div class="card-body">
    <h5 class="card-title textCenter ">Erstelle Schritt für Schritt dein Eigenes Quiz</h5>
    <h5 class="card-title textCenter mb-4">Für deine Familie und Freunde<br></h5>
    <p class="textCenter">Gebe bitte einen Quiz Namen ein und bestätige mit weiter.</p>
    <form onsubmit="saveTtitleQuiz()" class="yourQuizBtn">
        <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon1">Dein Quiz Name</span>
            <input type="text" minlength="3" required class="form-control" id="inputQuizName">
        </div>
        <button type="submit" class="btn btn-success">Weiter</button>
    </form>
</div>
    `
}

function templateCreateYourQuestion(){
    return `
    <div class="card-body">
    <h5 class="card-title textCenter ">Erstelle Schritt für Schritt dein Eigenes Quiz</h5>
    <h5 class="card-title textCenter mb-4">Für deine Familie und Freunde<br></h5>
    <p class="textCenter">Gebe bitte eine Frage und 4 Antwortmöglichkeiten ein und bestätige mit "Weiter".<br>
    Zum beenden den Button "Fertig" betätigen.</p>
    <form onsubmit="saveYourQuestion()" class="yourQuizBtn">
        <div class="input-group mb-3 mediaInputAmount mediawidth100">
            <span class="input-group-text inputfieldQuizInfo" id="basic-addon1">Deine Frage</span>
            <input type="text" minlength="10" required class="form-control mediaAmountInput" id="inputQuizQuestion" placeholder="Die Frage hier eingeben">
        </div>
        <div class="input-group mb-1 mediaInputAmount mediawidth100">
            <span class="input-group-text inputfieldQuizInfo" id="basic-addon1">Antwort 1</span>
            <input type="text" minlength="1" required class="form-control mediaAmountInput" id="inputQuizAnswer_1" placeholder="Die 1. Antwortmöglichkeit hier eingeben">
        </div>
        <div class="input-group mb-1 mediaInputAmount mediawidth100">
            <span class="input-group-text inputfieldQuizInfo" id="basic-addon1">Antwort 2</span>
            <input type="text" minlength="1" required class="form-control mediaAmountInput" id="inputQuizAnswer_2" placeholder="Die 2. Antwortmöglichkeit hier eingeben">
        </div>
        <div class="input-group mb-1 mediaInputAmount mediawidth100">
            <span class="input-group-text inputfieldQuizInfo" id="basic-addon1">Antwort 3</span>
            <input type="text" minlength="1" required class="form-control mediaAmountInput" id="inputQuizAnswer_3" placeholder="Die 3. Antwortmöglichkeit hier eingebenn">
        </div>
        <div class="input-group mb-3 mediaInputAmount mediawidth100">
            <span class="input-group-text inputfieldQuizInfo" id="basic-addon1">Antwort 4</span>
            <input type="text" minlength="1" required class="form-control mediaAmountInput" id="inputQuizAnswer_4" placeholder="Die 4. Antwortmöglichkeit hier eingeben">
        </div>
        <div class="input-group mb-3 mediaInputAmount mediawidth100">
            <span class="input-group-text" id="basic-addon1">Die Lösung ist Antwort Nummer</span>
            <input type="number" min="1" max="4" value="1" required class="form-control mediaAmountInput" id="inputQuizSolution">
        </div>
        
        <button type="submit" class="btn btn-success yourQuizBtnEnter mb-1">Weiter(Speichern)</button>
    </form>
    <div class="yourQuizBtn">
        <button type="button" onclick="init()" class="btn btn-secondary yourQuizBtnEnter">Fertig</button>
    </div>
</div>
    `
}