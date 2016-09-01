var Robot = (function(){
    var FIRST_LETTER_HEX = 0x41;
    var LAST_LETTER_HEX = 0x5A;
    var NUMBER_SIZE = 3;
    var LETTERS_SIZE = 2;
    var namesAlreadyUsed = [];

    function Robot(){
        this.name = createName();
    }
    function createName(){
        var name;
        while(name==undefined || namesAlreadyUsed.indexOf(name) !== -1){
            name = getRandomLetters(LETTERS_SIZE)+ getRandomNumber(NUMBER_SIZE);
        }
        namesAlreadyUsed.push(name);
        return name;
    }
    function getRandomNumber(numberOfDigits){
        var max = 0
        for(var i = 0; i < 3; i++){
            max += 9*Math.pow(10,i);
        }
        var randNumber = randBetween(0,max);
        var numberLength = randNumber.toString().length;
        if(numberLength !== numberOfDigits){
            var zerosToAdd = numberOfDigits - numberLength;
            for(var i =0; i < zerosToAdd; i++){
                randNumber = "0" + randNumber;
            }
        }
        return randNumber;
    }
    function randBetween(x,y){
        return Math.floor(Math.random()*(y-x) + x);
    }
    function getRandomLetters(lettersQuantity){
        var letters = ""
        for(var i=0; i<lettersQuantity;i++){
            letters += String.fromCharCode(randBetween(FIRST_LETTER_HEX, LAST_LETTER_HEX));
        }
        return letters;
    }
    Robot.prototype.reset = function(){
        this.name = createName();
    }
    return Robot;
})();

module.exports = Robot;
