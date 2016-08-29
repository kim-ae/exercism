//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var Bob = (function() {
    var Bob = function() {};
    var GENERIC_ANSWER = 'Whatever.'
    var YELL_ASNWER = 'Whoa, chill out!'
    var QUESTION_ANSWER = 'Sure.'
    var EMPTY_ANSWER = 'Fine. Be that way!'
    function isEmpty(input){
        return input === '' || /^\s+$/.test(input);
    }
    function isYelling(input){
        return input.split('').reduce(function(total, char){ return total && (char === char.toUpperCase())}, true);
    }
    function haveLetters(input){
        return /[a-z]/i.test(input)
    }
    function isQuestion(input){
        return /\?$/.test(input)
    }
    Bob.prototype.hey = function(input) {
        var answer;
        if(isEmpty(input)){
            answer = EMPTY_ANSWER;
        }else if (isYelling(input) && haveLetters(input)){
            answer = YELL_ASNWER;
        }else if(isQuestion(input)){
            answer = QUESTION_ANSWER;
        }else {
            answer = GENERIC_ANSWER;
        }
        return answer;
    };
    return Bob;
})()
module.exports = Bob;
