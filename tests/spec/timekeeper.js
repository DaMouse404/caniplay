define(['models/timekeeper', 'moment'], function(TimeKeeperModel, moment) {
    describe('TimeKeeper', function() {
      it("Should correctly stop you playing after midnight", function() {
        // Stub out the time updater ma bob
        var timeKeeper = new TimeKeeperModel();
        timeKeeper.updateTime = function() {
          this.currentTime = moment().add('days', 1);
        };

        expect(timeKeeper.beforeMidnight()).to.equal(false);
      });

      it("Should correctly allow leeway in the time keeping", function() {
        var fiveMinsAgo = moment().subtract('minutes', 5);
        var timeKeeper = new TimeKeeperModel();

        // 5 more minutes mom!
        timeKeeper.updateTime(5);

        expect(fiveMinsAgo.isSame(timeKeeper.currentTime, 'minute')).to.equal(true);
      });
    });
});

