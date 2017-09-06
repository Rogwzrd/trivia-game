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
var questionContainer = $("#question-span"),
    answerContainer = $("#answer-span"),
    gameContainer = $("#game-span");

function loadQuestion() {

    questionContainer.html("new content");
    answerContainer.html("please work");
}

$(document).ready(function() {

    console.log(questionBank);
    for (x in questionBank) {

        console.log(questionBank[x])

    }
    loadQuestion();

})