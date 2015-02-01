describe ("Bowling", function(){

  var bowling;


  describe ("by default", function(){

    it("starts off at a score of 0", function(){
      expect(bowling.accumulativeScore)toEqual(0);
    });

    it("knows there are 10 pins to knock down", function(){
      expect(bowling.pinsLeft).toEqual(10)
    });

  });

});