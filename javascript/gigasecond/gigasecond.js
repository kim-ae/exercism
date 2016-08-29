var Gigasecond = (function(){
    var date
    var TERAMILISSECONDS = 1e12
    function Gigasecond(inputDate){
        date = inputDate;
    }
    Gigasecond.prototype.date = function(){
        return new Date(date.valueOf() + TERAMILISSECONDS);
    }
    return Gigasecond;
})();

module.exports = Gigasecond;
