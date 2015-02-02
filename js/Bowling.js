var Bowling = function(){
  this.accumulativeScore = 0
  this.pinsLeft = 10
  this.ballsThrown = 0
  this.startingPins = 10

};

Bowling.prototype.pinsHit = function(number){
  this.pinsLeft = this.pinsLeft - number;
  this.ballsThrown += 1; 
};

Bowling.prototype.isNextTurn = function() {
  if(this.pinsLeft === 0){
    return true
  }
  else if(this.ballsThrown === 2){
    return true
  }
  else {
    return false
  };
};

Bowling.prototype.strike = function(){
  this.pinsHit = 10
};
