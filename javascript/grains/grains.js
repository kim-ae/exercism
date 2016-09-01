var BigInt = require('./big-integer');
var Grains = (function(){
    var grainCache = [];
    (function(){
        var chessboard = []
        for(var i = 0 ; i< 64 ; i++){
            chessboard.push(i);
        }
        grainCache = chessboard.map(function(value){
            return BigInt(2).pow(value);
        })
    })()
    function Grains(){}

    Grains.prototype.square = function(squareNumber){
        return grainCache[squareNumber - 1].toString();
    };

    Grains.prototype.total = function(){
        return grainCache.reduce(function(ret, value, index){
            return ret.add(value);
        },BigInt(0)).toString();
    }

    return Grains;
})();

module.exports = Grains;
