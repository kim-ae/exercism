var Hamming = (function() {
  function Hamming() {}
  function validate(dna1, dna2){
      if(dna1.length !== dna2.length) throw new Error('DNA strands must be of equal length.');
  }

  Hamming.prototype.compute = function(dna1, dna2) {
      validate(dna1,dna2);
      var size = dna1.length;
      var diff = 0;
      for(var i = 0; i < size; i++){
          diff += dna1[i] === dna2[i] ? 0 : 1;
      }
      return diff;
  };

  return Hamming;
})();
module.exports = Hamming;
