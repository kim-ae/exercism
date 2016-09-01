var FoodChain = (function(){
  var FIRST_LINE = "I know an old lady who swallowed a [__BEING__].";
  var SWALLOWED_LINE = "She swallowed the [__HUNTER__] to catch the [__PRAY__].";
  var LAST_LINE = "I don't know why she swallowed the fly. Perhaps she'll die.";
  var CRLF = "\n";
  var VERSE_ANIMAL_VECTOR = [{
      name: "fly",
      specificVerse: ""
    },{
      name: "spider",
      specificVerse: "It wriggled and jiggled and tickled inside her."
    },{
      name: "bird",
      specificVerse: "How absurd to swallow a bird!"
    },{
      name: "cat",
      specificVerse: "Imagine that, to swallow a cat!"
    },{
      name: "dog",
      specificVerse: "What a hog, to swallow a dog!"
    },{
      name: "goat",
      specificVerse: "Just opened her throat and swallowed a goat!"
    },{
      name: "cow",
      specificVerse: "I don't know how she swallowed a cow!"
    },{
      name: "horse",
      specificVerse: "She's dead, of course!"
    }];
  var maxVerseNumber = 8;
  function FoodChain(){};

  function buildSwallowedLine(hunter, pray){
    var pray = pray.name + (pray.name === "spider" ? " " + pray.specificVerse.replace("It", "that")
                                                                              .replace(".","") : "");
    return SWALLOWED_LINE.replace("[__HUNTER__]", hunter.name).replace("[__PRAY__]", pray);
  }
  var comparator = {
    "ASC": function(index, end){
      return index <= end;
    },
    "DESC": function(index, end){
      return index >=end;
    }
  };
  var indexModifier = {
    "ASC": function(index){
      return index+1;
    },
    "DESC": function(index){
      return index-1;
    }
  };
  function range(begin, end, orientation){
    if(orientation == undefined){
      orientation = "ASC";
    }
    var array = []
    for(var i = begin;comparator[orientation](i, end); i = indexModifier[orientation](i)){
      array.push(i);
    }
    return array;
  }

  FoodChain.prototype.verse = function(verseNumber){
    var index = verseNumber - 1;
    var verse = FIRST_LINE.replace("[__BEING__]", VERSE_ANIMAL_VECTOR[index].name) + CRLF;
    if(verseNumber !== 1 && verseNumber !== 8){
      verse += VERSE_ANIMAL_VECTOR[index].specificVerse + CRLF;
      verse += range(index,1, "DESC").reduce(function(sum, value){
        return sum + buildSwallowedLine(VERSE_ANIMAL_VECTOR[value], VERSE_ANIMAL_VECTOR[value-1]) + CRLF;
      }, "")
    }
    return verse + (verseNumber === 8 ? VERSE_ANIMAL_VECTOR[index].specificVerse + CRLF : LAST_LINE + CRLF)
  };
  FoodChain.prototype.verses = function(firstVerseNumber, lastVerseNumber){
    var that = this;
    return range(firstVerseNumber,lastVerseNumber).reduce(function(sum, value){
      return sum + that.verse(value) + CRLF;
    }, "");
  }
  return FoodChain;
})();

module.exports = FoodChain;
