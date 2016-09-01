var School = (function(){
    function School(){
        this._roster = {}
    }
    School.prototype.roster = function(){
        return this._roster;
    };
    School.prototype.add = function(name, grade){
        if(this._roster[grade] == undefined){
            this._roster[grade] = [];
        }
        this._roster[grade].push(name);
        this._roster[grade].sort();
    }
    School.prototype.grade = function(grade){
        return grade in this._roster ? this._roster[grade] : [];
    }
    return School;
})();

module.exports = School;
