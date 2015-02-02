var Bowling = function(){
  this.accumulativeScore = 0
  this.pinsLeft = 10
  this.pinsHit = 0
  this.ballsThrown = 0

};

Bowling.prototype.pinsHit = function(number){
  this.pinsLeft = this.pinsLeft - number;
  this.ballsThrown += 1; 
};
