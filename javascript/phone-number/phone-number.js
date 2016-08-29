var PhoneNumber = (function(){
    var PLACEHOLDER = "0000000000";
    function isValid(input){
        return input.length === 10;
    };
    function getNumber(input){
        return isValid(input) ? input : PLACEHOLDER;
    };
    function clean(input){
        var cleanNumber = input.replace(/[^0-9]+/g, '');
        if(cleanNumber.length === 11 && cleanNumber[0] === "1"){
            cleanNumber = cleanNumber.slice(1);
        }
        return cleanNumber;
    };
    function PhoneNumber(input){
        this._number = getNumber(clean(input));
        this._areaCode = /^[0-9]{3}/.exec(this._number)[0];
    };
    PhoneNumber.prototype.number = function(){
        return this._number;
    };
    PhoneNumber.prototype.areaCode = function(){
        return this._areaCode;
    };
    PhoneNumber.prototype.toString = function(){
        numberParts = /^(\d{3})(\d{3})(.*)/.exec(this._number);
        return "(" + numberParts[1] + ") " + numberParts[2] + "-" + numberParts[3];
    };
    return PhoneNumber;
})();

module.exports = PhoneNumber;
