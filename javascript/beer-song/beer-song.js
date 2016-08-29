var BeerSong = (function(){
    var FIRST_SENTENCE = '[__NUMBER__] bottles of beer on the wall, [__NUMBER__] bottles of beer.';
    var SECOND_SENTENCE = 'Take [__SUBJECT__] down and pass it around, [__NUMBER__] bottles of beer on the wall.';
    var SUBJECT_IT = 'it';
    var SUBJECT_ONE = 'one';
    var LAST_SENTENCE = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    var NO_MORE_BOTTLES = 'no more';
    var CRLF = '\n';
    function BeerSong(){}
    function buildFirstSentece(verseNumber){
        var song;
        song = verseNumber !== 1 ? FIRST_SENTENCE : FIRST_SENTENCE.replace(/bottles/g, 'bottle');
        song = song.replace(/\[__NUMBER__\]/g, verseNumber !== 0 ? verseNumber : NO_MORE_BOTTLES);
        if(verseNumber == 0)
            song = song[0].toUpperCase() + song.slice(1);
        return song;
    }
    function buildSecondSentence(verseNumber){
        var song;
        if(verseNumber !== 0){
            var isLastVerse = verseNumber - 1  === 1;
            song = SECOND_SENTENCE.replace('[__NUMBER__]', verseNumber !== 1 ? verseNumber - 1 : NO_MORE_BOTTLES);
            if(isLastVerse){
                song = song.replace('bottles', 'bottle');
            }
            song = song.replace('[__SUBJECT__]', verseNumber !== 1 ? SUBJECT_ONE : SUBJECT_IT);
        }else{
            song = LAST_SENTENCE;
        }
        return song;
    }

    BeerSong.prototype.sing = function(startVerse, endVerse){
        startVerse = startVerse != undefined ? startVerse : 99;
        endVerse = endVerse != undefined ? endVerse : 0;
        if(startVerse <= endVerse){
            throw new Error('start verse needs to be greater than end verse');
        }
        var song = "";
        for(var i = startVerse ; i>=endVerse ; i--){
            song += this.verse(i) + CRLF;
        }
        return song.replace(/\n$/, '');
    }
    BeerSong.prototype.verse = function(verseNumber){
        var song;
        song = buildFirstSentece(verseNumber);
        song += CRLF
        song += buildSecondSentence(verseNumber);
        song += CRLF
        return song;
    }
    return BeerSong;
})();

module.exports = BeerSong;
