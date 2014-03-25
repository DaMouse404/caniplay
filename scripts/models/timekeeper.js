define(['moment'], function(moment) {
  function TimeKeeper() {

  }
  
  // Leeway = BUT MOM! X MORE MINUTES!
  TimeKeeper.prototype.updateTime = function(leeway) {
    leeway = leeway||0;
    this.currentTime = moment().subtract('minutes', leeway);
  };

  TimeKeeper.prototype.beforeMidnight = function(leeway) {
    this.updateTime(leeway);

    var midnight = moment().add('days',1).startOf('day');

    return this.currentTime.isBefore(midnight);
  };

  return TimeKeeper;
});
