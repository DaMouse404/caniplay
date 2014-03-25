define(['moment'], function(moment) {
  function TimeKeeper() {
    this.startTime = moment();
  }
  
  // Leeway = BUT MOM! X MORE MINUTES!
  TimeKeeper.prototype.updateTime = function(leeway) {
    leeway = leeway||0;
    this.currentTime = moment().subtract('minutes', leeway);
  };

  TimeKeeper.prototype.beforeMidnight = function(leeway) {
    this.updateTime(leeway);

    var midnight = this.startTime.add('days',1).startOf('day');

    return this.currentTime.isBefore(midnight);
  };

  return TimeKeeper;
});
