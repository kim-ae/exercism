function DnaTranscriber(){
    this.dnaToRnaMapper = {G: "C", C: "G", T: "A", A: "U"};
}

DnaTranscriber.prototype.toRna = function(dna){
    rna = ""
    for(var i = 0;i < dna.length ;i++){
        rna += this.dnaToRnaMapper[dna[i]];
    }
    return rna;
}

module.exports = DnaTranscriber;
