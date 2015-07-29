var expect = require('chai').expect;
var path = require('path');
var parse = require(path.join(process.cwd(), '/lib/calURLParse'));

describe('calURLParse', function() {
  it('should handle the base /cal route', function () {
    expect(parse('/cal')).to.equal('../node-cal/app.js');
  });
  it('should handle a full year route', function () {
    expect(parse('/cal/2015')).to.equal('../node-cal/app.js 2015');
  });
  it('should handle a month first route', function () {
    expect(parse('/cal/7/2015')).to.equal('../node-cal/app.js 7 2015');
  });
  it('should handle a year first route', function () {
    expect(parse('/cal/2015/7')).to.equal('../node-cal/app.js 7 2015');
  });
  it('should handle invalid routes', function () {
    expect(parse('/cal/foo/bar')).to.equal('../node-cal/app.js');
  });
});
