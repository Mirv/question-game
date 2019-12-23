
(function(){
  
  var Question = function(questionText, answers, actualAnswer) {
    this.questionText = questionText;
    this.answers = answers;
    this.actualAnswer = actualAnswer;
  }
  
  var favoriteColor = new Question("What is your favorite color?", ["Blue", "no piiiiiink", "who cares?"], 1);
  var firstQ = new Question("How big?", ["real big", "blah", "wrong"], 0);
  var input;
  var score = 0;
  var questions = [favoriteColor, firstQ];
  
  // Loop each question
  do {
    // find random question number
    var questionNumber = Math.floor(Math.random() * questions.length);
    // set reference to question inside questions array for readability
    var question = questions[questionNumber];
      // Show question
      console.log(question.questionText);
      // Show answers
      for(var index = 0; index <= questions.length; index++){
        console.log(index + ' - ' + question.answers[index]);
      }
      // Prompt to get answer
      input = prompt("Your answer to the console question?");
    
      // Parse answer correct/wrong
      if(question.actualAnswer == input){
        console.log("Correct!");
        score += 1;
      } else {
        console.log("InCorrect");
        score -= 1;
      }  
  } 
  while (input.toLowerCase() != "exit");
})();
  // console.log(questions);