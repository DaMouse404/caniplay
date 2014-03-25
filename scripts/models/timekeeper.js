define(['moment'], function(moment) {
  function TimeKeeper() {

  }

  TimeKeeper.prototype.updateTime = function() {
    this.currentTime = moment();
  };

  TimeKeeper.prototype.beforeMidnight = function() {
    this.updateTime();

    var midnight = moment().add('days',1).startOf('day');

    return this.currentTime.isBefore(midnight);
  };

  return TimeKeeper;
});
