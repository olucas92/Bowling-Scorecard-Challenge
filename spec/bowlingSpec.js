describe ("Bowling", function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });


  describe ("by default", function(){

    it("starts off at a score of 0", function(){
      expect(bowling.accumulativeScore).toEqual(0)
    });

    it("knows there are 10 pins to knock down", function(){
      expect(bowling.pinsLeft).toEqual(10)
    });

    it("knows that 0 balls have been bowled on initialize", function(){
      expect(bowling.ballsThrown).toEqual(0)
    });

  });

  describe ("during the frame", function(){

    it("knows how many pins have been knocked down", function(){
      bowling.pinsHit(7)
      expect(bowling.pinsLeft).toEqual(3)
    });

    // it("knows that the turn is over if 2 balls have been thrown", function(){
    //   bowling.ballsThrown(2)
    //   expect(bowling.isNextTurn()).toBe(true)
    // });

    it("knows that the turn is over if 2 balls have been thrown", function(){
      bowling.pinsHit(2)
      bowling.pinsHit(5)
      expect(bowling.isNextTurn()).toBe(true)
    });    

    it("knows that the turn is over if 10 pins have been hit", function(){
      bowling.pinsHit(10)
      expect(bowling.isNextTurn()).toBe(true)
    });

  });

  describe ("resetting after the frame", function(){

    it("should reset pins left to 10 after each frame", function(){
      bowling.pinsHit(10);
      bowling.nextTurn()
      expect(bowling.pinsLeft).toEqual(10)
    });
    
  });

  describe ("adding the accumulated scores", function(){

    it("should be able to add up scores", function(){
      bowling.pinsHit(5)
      bowling.pinsHit(3)
      bowling.addScore()
      // bowling.nextTurn()
      // bowling.pinsHit(8)
      // bowling.pinsHit(1)
      // bowling.addScore
      expect(bowling.accumulativeScore).toEqual(8)
    });

    it("should be able to add up scores over 2 frames", function(){
      bowling.pinsHit(6)
      bowling.pinsHit(3)
      bowling.addScore()
      bowling.nextTurn()
      bowling.pinsHit(2)
      bowling.pinsHit(5)
      bowling.addScore()
      expect(bowling.accumulativeScore).toEqual(16)
    });

    it("should be able to add scores over 3 frames", function(){
      bowling.pinsHit(10)
      bowling.addScore
      bowling.pinsHit(10)
      bowling.addScore
      bowling.pinsHit(10)
      bowling.addScore
      expect(bowling.accumulativeScore).toEqual(30)
    });

  });

});