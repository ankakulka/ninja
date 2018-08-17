var quiz = [
["What is Superman's real name?","Clarke Kent"],
["What is Wonderwoman's real name?","Dianna Prince"],
["What is Batman's real name?","Bruce Wayne"]
];
var score = 0; // initialize score
var answerDisplay = document.getElementById("answer");
var currentScore = document.getElementById("score");
var finalScore = document.getElementById("finalScore");

function play(quiz) {

    quiz.forEach(function(question, name){

   var a = prompt(question[0]);
    
   if (a === question[1]) {
       //display user answer in p with id "answer"
      
      answerDisplay.innerHTML = "You're right";
      //currentScore.innerHTML = score++;
   }
    else {
         answerDisplay.innerHTML = "You're wrong";
         //currentScore.innerHTML = score++;
    }
})
    
finalScore.innerHTML = "Your final score is " + score;

}

play(quiz);
