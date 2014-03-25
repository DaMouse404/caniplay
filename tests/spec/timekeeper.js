define(['models/timekeeper', 'moment'], function(TimeKeeperModel, moment) {
    describe('TimeKeeper', function() {
      it("Should correctly stop you playing after midnight", function() {
        // Stub out the time updater ma bob
        TimeKeeperModel.prototype.updateTime = function() {
          this.currentTime = moment().add('days', 1);
        };

        var timeKeeper = new TimeKeeperModel();

        expect(timeKeeper.beforeMidnight()).to.equal(false);
      });
    });
});

