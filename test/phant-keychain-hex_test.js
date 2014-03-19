'use strict';

var phantKeychainHex = require('../lib/phant-keychain-hex.js');

exports.phantKeychainHex = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    test.ok(phantKeychainHex, 'should be ok');
    test.done();
  }
};
