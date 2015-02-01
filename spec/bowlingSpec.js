describe ("Bowling", function(){

  var bowling;

  beforeEach(function(){

    bowling = new Bowling();
  
  });


  describe ("by default", function(){

    it("starts off at a score of 0", function(){
      expect(bowling.accumulativeScore)toEqual(0);
    });

    it("knows there are 10 pins to knock down", function(){
      expect(bowling.pinsLeft).toEqual(10)
    });

  });

  describe ("during the frame", function(){

    it("knows how many pins have been knocked down", function(){
      bowling.pinsHit(7)
      expect(bowling.pinsLeft).toEqual(3)
    });

    it("knows that the turn is over if 10 pins have been knocked down", function(){
      bowling.pinsHit(6)
      bowling.pinsHit(2)
      expect(bowling.isNextTurn()).toBe(true)
    });

  });

});