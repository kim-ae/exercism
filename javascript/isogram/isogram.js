var Isogram = (function(){
    var isIsogram;
    var lettersCache;
    function Isogram(input){
        lettersCache = []
        letters = getLetters(input)
        for(var i=0; i<letters.length; i++){
            letter = letters[i].toLowerCase();
            isDuplicated = lettersCache.indexOf(letter)!==-1;
            if(lettersCache.indexOf(letters[i])!==-1){
                break;
            }
            lettersCache.push(letter);
        }
        isIsogram = !isDuplicated;
    };
    function getLetters(input){
        return input.replace(/[^a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1E02-\u1EF3]/g, '').split('');
    }
    Isogram.prototype.isIsogram = function(){
        return isIsogram;
    };
    return Isogram;
})();

module.exports = Isogram;
