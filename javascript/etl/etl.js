var ETL = (function(){
    function ETL(){}
    function merge(obj1, obj2){
        for(k in obj2){
            obj1[k] = obj2[k];
        }
        return obj1;
    }
    ETL.prototype.transform = function(old){
        var scores = Object.keys(old);
        var newBoard = {};
        for(score in old){
            var newPartialBoard = old[score].reduce(function(ret, key, index){
                ret[key.toLowerCase()] = parseInt(score);
                return ret;
            }, {});
            merge(newBoard, newPartialBoard);
        }
        return newBoard;
    }
    return ETL;
})();

module.exports = ETL;
