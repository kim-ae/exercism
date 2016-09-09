var Acronyms = (function(){
    function Acronyms(){}
    Acronyms.parse = function(sentence){
        const words = splitSentence(sentence);
        return words.reduce(function(previous, current){
            return previous + current[0].toUpperCase();
        }, "")
    }
    function splitSentence(sentence){
        var words = [];
        var word = "";
        for(var i = 0; i < sentence.length ; i++){
            var character = sentence[i];
            var previousChar = sentence[i-1];
            var isFirstChar = i===0;
            var isFirstWordChar = word === "";
            var isStillSameWord =  !/[\-\ A-Z]/.test(character) || (/[A-Z]/.test(previousChar))
            if(!isFirstChar && !isFirstWordChar && !isStillSameWord){
                words.push(word);
                word="";
            }
            word += character.replace(/([^A-Za-z])/,"");
        }
        words.push(word);
        return words;
    }
    return Acronyms;
})();

module.exports = Acronyms