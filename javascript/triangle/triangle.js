var Triangle = (function(){
    var EQUILATERAL = 'equilateral';
    var ISOSCELES ='isosceles';
    var SCALENE = 'scalene';

    function Triangle(side1, side2, side3){
        this._triangle = [side1, side2, side3];
    }
    function validate(triangle){
        if(triangle.reduce(function(ret,value){return ret || (value <= 0)},false)){
            throw new Error("Err");
        }
        var largestSide = Math.max.apply(null, triangle);
        var sum = triangle.reduce(function(ret, value){return ret + value},0) - largestSide;
        if(largestSide > sum){
            throw new Error("Err");
        }
    }
    Array.prototype.allSidesSame = function() {
        for(var i = 1; i < this.length; i++){
            if(this[i] !== this[0])
                return false;
        }
        return true;
    }

    Array.prototype.atLeastOneEqualSide = function() {
        for(var i = 0; i < this.length; i++){
            if(this[i] === this[i+1])
                return true;
        }
        return this[0] === this[this.length-1];
    }

    Triangle.prototype.kind = function(){
        validate(this._triangle);
        if(this._triangle.allSidesSame()){
            return EQUILATERAL;
        }else if(this._triangle.atLeastOneEqualSide()){
            return ISOSCELES;
        }
        return SCALENE;
    }
    return Triangle;
})();

module.exports = Triangle;
