const chai = require('chai'); // 1
const assert = chai.assert;

const alarmClock = require('../timer1');



describe('alarmClock', function() {
  it('No numbers are provided -> it should return false and end', function() {
    const spinner = null;
    const timer = alarmClock(spinner);

    assert.isNull(timer);
  });
  it('Numbers are provided -> it should return true', function() {
    const spinner = [1,2,3,4];

    const timer = alarmClock(spinner);

    assert.isTrue(timer);
  });
  it('Negative numbers are provided -> ignore & run', function() {
    const spinner = [1,0,-1,-2,3,4];

    const timer = alarmClock(spinner);

    assert.isTrue(timer);
  });
  it('Non numbers are provided -> ignore & run', function() {
    const spinner = [1,2,"3", "4"];

    const timer = alarmClock(spinner);

    assert.isTrue(timer);
  });
});

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.