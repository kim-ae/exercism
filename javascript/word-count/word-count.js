var Words = (function(){
    function Words(){}
    function getWords(sentence){
        return sentence.replace(/^[\n\t\s]+/, '')
                       .replace(/[\n\t\s]+$/, '')
                       .replace('\n', ' ')
                       .replace('\t', ' ')
                       .split(/\s+/);
    }
    Words.prototype.count = function(sentence){
        var wordMap = {}
        getWords(sentence).forEach(function(word){
            word = word.toLowerCase();
            if(!(/^\d+$/.test(wordMap[word]))){
                wordMap[word] = 0;
            }
            wordMap[word]++;
        })
        return wordMap;
    };
    return Words;
})();

module.exports = Words;
