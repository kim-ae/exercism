var Anagram = (function(){
    function orderLetters(word){
        return word.toLowerCase().split('').sort().join('');
    }
    function Anagram(input){
        this._word = input;
    };
    function initilizeInput(inputs){
        var wordsList;
        if(inputs[0].constructor === Array){
            wordsList = inputs[0];
        }else{
            wordsList = inputs;
        }
        return wordsList
    }
    function isAnagram(word, wordToTest){
        var lowerCaseWord = word.toLowerCase();
        var lowerCaseWordToTest = wordToTest.toLowerCase();
        var orderedLetters = orderLetters(word);
        return !(lowerCaseWord === lowerCaseWordToTest) && orderedLetters === orderLetters(wordToTest);
    }
    Anagram.prototype.matches = function(){
        wordsList = initilizeInput(arguments);
        var matchesList = [];
        for(var i=0; i<wordsList.length; i++){
            if(isAnagram(this._word,wordsList[i])){
                matchesList.push(wordsList[i]);
            }
        }
        return matchesList;
    };
    return Anagram;
})();

module.exports = Anagram;
