function at(hours, minutes){
    var Time = (function(){
        const CLOCK_HOURS = 24;
        const CLOCK_MINUTES = 60;
        function Time(hours, minutes){
            if(minutes == undefined){
                minutes = 0;
            }
            if(hours<0){
                hours = CLOCK_HOURS + (Math.floor(hours/CLOCK_HOURS)*CLOCK_HOURS + hours);
            }
            const fullHours = hours+Math.floor(minutes/CLOCK_MINUTES);
            this._hours = fullHours - Math.floor(fullHours/CLOCK_HOURS)*CLOCK_HOURS ;
            this._minutes = minutes % CLOCK_MINUTES;
        };
        function toString(number){
            var numberStr = number.toString();
            if(numberStr.length !== 2){
                numberStr = "0" + numberStr;
            }
            return numberStr;
        }
        Time.prototype.toString = function(){
            return toString(this._hours) + ":" + toString(this._minutes);
        }
        Time.prototype.equals = function(other){
            return (this._hours === other._hours) && (this._minutes === other._minutes);  
        }
        return Time;
    })();
    return new Time(hours, minutes);
};

module.exports.at = at;
