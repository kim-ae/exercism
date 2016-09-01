var SpaceAge = (function(){
    var EARTH_PERIOD = 31557600;
    var MERCURY_PERIOD = EARTH_PERIOD*0.2408467;
    var VENUS_PERIOD = EARTH_PERIOD*0.61519726;
    var MARS_PERIOD = EARTH_PERIOD*1.8808158;
    var JUPTER_PERIOD = EARTH_PERIOD*11.862615;
    var SATURN_PERIOD = EARTH_PERIOD*29.447498;
    var URANUS_PERIOD = EARTH_PERIOD*84.016846;
    var NEPTUNE_PERIOD = EARTH_PERIOD*164.79132;
    var PRECISION = 100;

    function SpaceAge(seconds){
        this.seconds = seconds;
    }
    function round(input){
        return Math.round(input*100)/100;
    }

    SpaceAge.prototype.onEarth = function(){
        return round(this.seconds/EARTH_PERIOD);
    }
    SpaceAge.prototype.onMercury = function(){
        return round(this.seconds/MERCURY_PERIOD);
    }
    SpaceAge.prototype.onVenus = function(){
        return round(this.seconds/VENUS_PERIOD);
    }
    SpaceAge.prototype.onMars = function(){
        return round(this.seconds/MARS_PERIOD);
    }
    SpaceAge.prototype.onJupiter = function(){
        return round(this.seconds/JUPTER_PERIOD);
    }
    SpaceAge.prototype.onSaturn = function(){
        return round(this.seconds/SATURN_PERIOD);
    }
    SpaceAge.prototype.onUranus = function(){
        return round(this.seconds/URANUS_PERIOD);
    }
    SpaceAge.prototype.onNeptune = function(){
        return round(this.seconds/NEPTUNE_PERIOD);
    }

    return SpaceAge;
})();

module.exports = SpaceAge;
