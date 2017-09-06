$(document).ready(function() {

    var questionBank = [

        {
            game: "Devil May Cry",
            question: "What are the names of the protagonist Dante's handguns?",
            answers: {
                a: "Bert & Ernie",
                b: "Crime & Punishment",
                c: "Ebony & Ivory",
                d: "Ryu & Ken"
            },
            correctAnswer: "c"
        },
        {
            game: "Mega Man",
            question: "which of the following bosses did not appear in Megaman 2 for the NES?",
            answers: {
                a: "Metal Man",
                b: "Flash Man",
                c: "Wood Man",
                d: "Cuts Man"
            },
            correctAnswer: "d"
        },
        {
            game: "Residen Evil",
            question: "what is the name of the original virus that turned people into Zombies in Resident Evil?",
            answers: {
                a: "T-Virus",
                b: "Progenitor Virus",
                c: "G-Virus",
                d: "Demon's Blood"
            },
            correctAnswer: "a"
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
            correctAnswer: "a"
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
            correctAnswer: "d"
        }
    ];
    //these variables will hold the plaace of our questions, answers, and current game reference
    var mainContainer = $("#main-game"),
        questionContainer = $("#question-span"),
        answerContainer = $("#answer-span"),
        gameContainer = $("#game-span"),
        //this variable will hold the time remaining 
        timeRemaining = 30,
        //this variable will hold the setInterval
        intervalId,
        //this variable holds the current level
        currentLevel = 0;

    function intervalFunction() {
        setInterval(function() {
            alert("games!")
        }, 3000)
    };

    function timerFunction() {
    	timeRemaining--;
    	$(".timer").text(timeRemaining);
    }

    //this test function will load the data from the questionBank to the page
    function loadQuestion(x) {
        gameContainer.html("<h3>" + questionBank[x].game + "</h3>")
        questionContainer.html(questionBank[x].question);
        answerContainer.html(
            "<div class='answer' value='a'>" + questionBank[x].answers.a + "</div>" +
            "<div class='answer' value='b'>" + questionBank[x].answers.b + "</div>" +
            "<div class='answer' value='c'>" + questionBank[x].answers.c + "</div>" +
            "<div class='answer' value='d'>" + questionBank[x].answers.d + "</div>" +
            "<div class='timer'>" + timeRemaining + "</div>"
            );
        intervalId = setInterval(function(){

        	timerFunction();
        	console.log("ONE SECOND HAS PASSED SINCE!")
        	console.log(timeRemaining);
        }, 1000);
    }

    //console.log to refence the data object when the page loads
    console.log(questionBank);
    for (x in questionBank) {

        console.log(questionBank[x])
    }

    //load question on page load
    loadQuestion(currentLevel);
    // intervalFunction();

    //this determines whether or not an answer is correct onclick;
    //I compare the value of the created answer
    $(document).on("click", ".answer", function() {
        var yourSelection = $(this).attr("value");
        console.log(yourSelection);
        console.log("onclick is recognized");
        if (yourSelection == questionBank[currentLevel].correctAnswer) {
            currentLevel++;
            loadQuestion(currentLevel);
        } else {
            currentLevel = 0
            loadQuestion(currentLevel);

            //fun styling to show when you lose the game;
            //still in testing
            // mainContainer.html("<img class='loss-image' src='assets/images/guile-loss-image.png' width='250' height='250'>" + "<br>" + "<h1>Try again chief!</h1>" + "<h1>Click on Guile to restart the game!</h1>");
        }
    })

    if (timeRemaining < 0){
    	console.log('TIME IS UP!');
    	currentLevel = 0;
    	loadQuestion(currentLevel);
    }
    //click on this element when the game ends to call the loadQuestion function    
    // $(document).on("click",".loss-image", function() {
    // 	loadQuestion(currentLevel);
    // })

})