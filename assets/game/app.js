$(document).ready(function() {

    var questionBank = [

            {
                game: "Devil May Cry",
                question: "What are the names of the protagonist Dante's handguns?",
                answers: {
                    a: "Bert & Ernie",
                    b: "Crime & Punishment",
                    c: "Ebony & Ivory",
                    d: "Hall & Oates"
                },
                correctAnswer: ["c", "Ebony & Ivory"],
                gif: "assets/images/devil-may-cry-gif.gif"
            },
            {
                game: "Mega Man",
                question: "Which of the following bosses did not appear in Megaman 2 for the NES?",
                answers: {
                    a: "Metal Man",
                    b: "Flash Man",
                    c: "Wood Man",
                    d: "Cuts Man"
                },
                correctAnswer: ["d", "Cuts Man"],
                gif: "assets/images/cuts-man-gif.gif"
            },
            {
                game: "Residen Evil",
                question: "What is the name of the original virus that turned people into Zombies in Resident Evil?",
                answers: {
                    a: "T-Virus",
                    b: "Progenitor Virus",
                    c: "G-Virus",
                    d: "Demon's Blood"
                },
                correctAnswer: ["a", "T-Virus"],
                gif: "assets/images/resident-evil-gif.gif"
            },
            {
                game: "Marve Vs. Capcom",
                question: "Which of the following characters has never appeared in the Marvel Vs Capcom series?",
                answers: {
                    a: "Rolento",
                    b: "Cable",
                    c: "Blackheart",
                    d: "Nemesis"
                },
                correctAnswer: ["a", "Rolento"],
                gif: "assets/images/rolento-gif.gif"
            },
            {
                game: "Street Fighter",
                question: "In the japanese version of Street Fighter 2, what is M. Bison's name?",
                answers: {
                    a: "Balrog",
                    b: "Derek",
                    c: "F. Bison",
                    d: "Vega"
                },
                correctAnswer: ["d", "Vega"],
                gif: "assets/images/bison-gif.gif"
            }
        ],

        chunLaugh = new Audio("assets/audio/chunLiLaugh.wav"),
        sagatLaugh = new Audio("assets/audio/sagatLaugh.wav"),
        scream = new Audio("assets/audio/chunLiScream.wav"),
        cheer = new Audio("assets/audio/crowdCheer.wav"),
        honda = new Audio("assets/audio/eHondaHeadbuttSound.wav"),
        musicloss = new Audio("assets/audio/gameLossSound.wav"),
        groanLoss = new Audio("assets/audio/genericLossGroan.wav");

    //these variables will hold the plaace of our questions, answers, and current game reference
    var mainContainer = $("#main-game"),
        questionContainer = $("#question-span"),
        answerContainer = $("#answer-span"),
        gameContainer = $("#game-span"),

        //this variable will hold the time remaining 
        timeRemaining = 30,

        //this variable holds the current level
        currentLevel = 0,

        //these variables will hold the right, wrong, and unanswered variables
        rightAnswers = 0,
        wrongAnswers = 0,
        unanswered = 0;

    //this resets the question timer
    function questionTimerReset() {
        timeRemaining = 30;
        clearInterval(questionIntervalId);
    }

    //this manages the visuals of the timer
    function timerFunction() {
        timeRemaining--;
        $(".timer").html("<div class='timer'>Time remaining: " + timeRemaining + "</div>");
        if (timeRemaining < 0) {
            incorrectAnswerDisplayPage();
            unanswered++;
            currentLevel++;
            questionTimerReset();
        }
    }

    //this function resets the visual of the game output;
    //it hides the start game button and shows the game;
    //when you win it does the revese
    function gameStart() {
        $(".game-space").toggleClass("display-none");
        $(".start-button").toggleClass("display-none");
        currentLevel = 0;
        loadQuestion(currentLevel);
    }

    function restartGame() {
        rightAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        currentLevel = 0;
        loadQuestion(currentLevel);
    }

    //this test function will load the data from the questionBank to the page
    function loadQuestion(x) {
        if (x < questionBank.length) {
            gameContainer.html("<h2>" + questionBank[x].game + "</h2>")
            questionContainer.html("<h3>" + questionBank[x].question + "</h3>");
            answerContainer.html(
                "<div class='answer' value='a'>" + questionBank[x].answers.a + "</div>" +
                "<div class='answer' value='b'>" + questionBank[x].answers.b + "</div>" +
                "<div class='answer' value='c'>" + questionBank[x].answers.c + "</div>" +
                "<div class='answer' value='d'>" + questionBank[x].answers.d + "</div>" +
                "<div class='timer'>Time remaining: " + timeRemaining + "</div>"
            );

            //this variable will hold the setInterval
            questionIntervalId = setInterval(function() {
                timerFunction();
            }, 1000);

        } else {

            gameEndDisplayPage();
        }
    }

    //this line holds the code for displaying the answer page based on a correct answer
    function correctAnswerDisplayPage() {
        answerContainer.html("<h3>Correct! The answer was " + questionBank[currentLevel].correctAnswer[1] + "!</h3>" + "<img src=" + questionBank[currentLevel].gif + " height ='250'>");
        answerDisplayTimeoutId = setTimeout(function() {
            loadQuestion(currentLevel);
        }, 5000);
        honda.play();
    }
    //this line holds the code for displaying the answer page based on an incorrect answer or timeout
    function incorrectAnswerDisplayPage() {
        answerContainer.html("<h3> Sorry! The answer was " + questionBank[currentLevel].correctAnswer[1] + "!</h3>" + "<img src=" + questionBank[currentLevel].gif + " height ='250'>");
        answerDisplayTimeoutId = setTimeout(function() {
            loadQuestion(currentLevel);
        }, 5000);
        sagatLaugh.play();
    }

    function gameEndDisplayPage() {
        gameContainer.html("<h1> Thanks For Playing")
        questionContainer.html("<p>Here are your results:<p>" + "<p>You answered " + rightAnswers + " questions correctly!</p>" +
            "<p>You answered " + wrongAnswers + " incorrectly!</p>" +
            "<p>" + unanswered + " questions went unanswered!</p>");
        answerContainer.empty().append($("<button>").addClass("try-again btn btn-lg btn-primary").text("Try Again?"));
        endGameAudio();
    }

    function endGameAudio() {
        if (rightAnswers == 5) {
            cheer.play();
        } else {
            groanLoss.play();
        }
    }


    //The start button initiates the game
    $(".start-button").on("click", function() {
        gameStart();
    })

    //the restart button restarts the game
    $(document).on("click", ".try-again", function() {
        restartGame();
    })

    //this determines whether or not an answer is correct onclick;
    //this line compares the value of the correct answer property in the object representing the current level and the value of the div you click on
    $(document).on("click", ".answer", function() {
        var yourSelection = $(this).attr("value");

        if ((yourSelection == questionBank[currentLevel].correctAnswer[0]) && (currentLevel < questionBank.length)) {

            rightAnswers++;
            correctAnswerDisplayPage();
            questionTimerReset();
            currentLevel++;

        } else {

            wrongAnswers++;
            incorrectAnswerDisplayPage();
            questionTimerReset();
            currentLevel++;
        }
    })

})