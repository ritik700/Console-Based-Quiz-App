//use of iife
/**We use iife to achieve data privacy that no variable will be accessed
 * by outer world
 */
(function(){

//functional constructor
function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
        console.log(i, this.answer[i]);

    }
}

Question.prototype.checkAnswer = function(answ) {
    if (answ === this.correct) {
        console.log('Correct Answer');
    } else {
        console.log('wrong answer, try again!!!');
    }

}

var q1 = new Question('Will Modi win the next election??'
, ['yes', 'no'], 0);

var q2 = new Question('Is Amit Shah is corrupt??'
, ['yes', 'no'], 1);


var questions = [q1, q2];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();


var answer = parseInt(prompt('Please Select the correct answer.'));

questions[n].checkAnswer(answer);

})();










