/*
 * phant-keychain-hex
 * https://github.com/sparkfun/phant-keychain-hex
 *
 * Copyright (c) 2014 SparkFun Electronics
 * Licensed under the GPL v3 license.
 */

'use strict';

/**** Module dependencies ****/
var HashIds = require('hashids');

/**** Keychain prototype ****/
var app = Keychain.prototype;

/**** Expose PhantStorageMongodb ****/
exports = module.exports = Keychain;

/**** Initialize a new Keychain ****/
function Keychain(config) {

  if (! (this instanceof Keychain)) {
    return new Keychain(config);
  }

  config = config || {};

  if ('privateSalt' in config) { this.privateSalt = config.privateSalt; }
  if ('publicSalt'  in config) { this.publicSalt  = config.publicSalt;  }

}

app.privateSalt = 'Please change the private salt';
app.publicSalt = 'Please change the public salt';

/**
 * publicKey
 *
 * grab public hashed version
 * of the feed id.
 */
app.publicKey = function(id) {

  var hashid = new HashIds(this.publicSalt, 6);

  return hashid.encryptHex(id);

};

/**
 * privateKey
 *
 * grab the private key for the feed
 * using the feed id.
 */
app.privateKey = function(id) {

  var hashid = new HashIds(this.privateSalt, 6);

  return hashid.encryptHex(id);

};

/**
 * getIdFromPublicKey
 *
 * decrypt the feed id using the
 * public key.
 */
app.getIdFromPublicKey = function(key) {

  var hashid = new HashIds(this.publicSalt, 8);

  return hashid.decryptHex(key);

};

/**
 * getIdFromPrivateKey
 *
 * decrypt the feed id using the
 * private key.
 */
app.getIdFromPrivateKey = function(key) {

  var hashid = new HashIds(this.privateSalt, 8);

  return hashid.decryptHex(key);

};
