const addEvent = require('../addEvent.js');

test('the date 2000-01-01 and the time 00:00 should give us 2000-01-01T16:00:00', () => {
  expect(addEvent.formatTimes('2000-01-01','16:00')).toBe('2000-01-01T16:00:00');
});

test('the date 2099-12-31 and the time 23:59 should give us 2099-12-31T23:59:00', () => {
  expect(addEvent.formatTimes('2099-12-31', '23:59')).toBe('2099-12-31T23:59:00');
});

test('the date 2019-04-14 and the time 17:00 should give us 2019-04-14T17:00:00', () => {
  expect(addEvent.formatTimes('2019-04-14', '17:00')).toBe('2019-04-14T17:00:00');
});

test('the date 2019-02-28 and the time 09:30 should give us 2019-02-28T09:30:00', () => {
  expect(addEvent.formatTimes('2019-02-28','09:30')).toBe('2019-02-28T09:30:00');
});