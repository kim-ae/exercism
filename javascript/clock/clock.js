function at(hours, minutes){
    var Time = (function(){
        const CLOCK_HOURS = 24;
        const CLOCK_MINUTES = 60;

        //Private static methods
        function invertHour(hours){
            return CLOCK_HOURS + (Math.floor(hours/CLOCK_HOURS)*CLOCK_HOURS + hours);
        }
        function getClockHour(hours, minutes){
            //Refactor me pls :)
            if(hours<0){
                hours = invertHour(hours);
            }
            const fullHours = hours+extractHoursFromMinutes(minutes);
            return fullHours - Math.floor(fullHours/CLOCK_HOURS)*CLOCK_HOURS;
        }
        function extractHoursFromMinutes(minutes){
            return Math.floor(minutes/CLOCK_MINUTES);
        }
        function getClockMinutes(minutes){
            return (minutes < 0 ? CLOCK_MINUTES : 0) + minutes % CLOCK_MINUTES;
        }
        function toString(number){
            var numberStr = number.toString();
            if(numberStr.length !== 2){
                numberStr = "0" + numberStr;
            }
            return numberStr;
        }

        //Constructor
        function Time(hours, minutes){
            if(minutes == undefined){
                minutes = 0;
            }
            this._hours = getClockHour(hours, minutes) 
            this._minutes = getClockMinutes(minutes)
        };
        
        //Public methods
        Time.prototype.toString = function(){
            return toString(this._hours) + ":" + toString(this._minutes);
        }
        
        Time.prototype.equals = function(other){
            return (this._hours === other._hours) && (this._minutes === other._minutes);  
        }
        
        Time.prototype.plus = function(minutes){
            minutes = minutes + this._minutes; 
            this._hours = getClockHour(this._hours, minutes);
            this._minutes = getClockMinutes(minutes);
            return this;
        }

        Time.prototype.minus = function(minutes){
            return this.plus(minutes*-1);
        }
        return Time;
    })();
    return new Time(hours, minutes);
};

module.exports.at = at;
