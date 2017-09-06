var questionBank = [{

    levelOne: {
        game: "Devil May Cry",
        question: "What are the names of the protagonist Dante's handguns?",
        answers: [{
            answerOne: "Bert & Ernie",
            answerTwo: "Crime & Punishment",
            answerThree: "Ebony & Ivory",
            answerFour: "Ryu & Ken"
        }]
    },

    levelTwo: {
        game: "Mega Man",
        question: "which of the following bosses did not appear in Megaman 2 for the NES?",
        answers: [{
            answerOne: "Metal Man",
            answerTwo: "Flash Man",
            answerThree: "Wood Man",
            answerFour: "Cuts Man"
        }]
    },

    levelThree: {
        game: "Residen Evil",
        question: "what is the name of the original virus that turned people into Zombies in Resident Evil?",
        answers: [{
            answerOne: "T-Virus",
            answerTwo: "Progenitor Virus",
            answerThree: "G-Virus",
            answerFour: "Demon's Blood"
        }]
    },

    levelFour: {
        game: "Marve Vs. Capcom",
        question: "Which of the following characters has never appeared in the Marvel Vs Capcom series?",
        answers: [{
            answerOne: "Rolento",
            answerTwo: "Cable",
            answerThree: "Blackheart",
            answerFour: "Nemesis"
        }]
    },

    levelFive: {
        game: "Street Fighter",
        question: "Which of the following characters appeared in the game Power Stone?",
        answers: [{
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: ""
        }]
    }
}];

// questionSpace = $(".question-span"),
// answerOneSpace = $(".answer-one-span"),
// answerTwoSpace = $(".answer-two-span"),
// answerThreeSpace = $(".answer-three-span"),
// answerFourSpace = $(".answer-four-span");


// function loadQuestion(a) {

//     $(".question-span").html(questionBank[a].question);
//     $(".answer-one-span").html(questionBank[a].answers[a]);
//     $(".answer-two-span").html(questionBank[a].answers[a]);
//     $(".answer-three-span").html(questionBank[a].answers[a]);
//     $(".answer-four-span").html(questionBank[a].answers[a]);
// };

$(document).ready(function() {

    // loadQuestion(0);

    console.log(questionBank)

})