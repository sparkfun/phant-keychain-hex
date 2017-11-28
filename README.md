### Phant is No Longer in Operation

Unfortunately Phant, our data-streaming service, is no longer in service
and has been discontinued. The system has reached capacity and, like a less-adventurous Cassini,
has plunged conclusively into a fiery and permanent retirement. There are several 
other maker-friendly, data-streaming services and/or IoT platforms available 
as alternatives. The three we recommend are Blynk, ThingSpeak, and Cayenne. 
You can read our [blog post on the topic](https://www.sparkfun.com/news/2413)
for an overview and helpful links for each platform.

All secondary SparkFun repositories related to Phant have been [archived](https://github.com/blog/2460-archiving-repositories)
and pulled in as a subtree in the main [Phant GitHub repository](https://github.com/sparkfun/phant/tree/master/archived_PhantRepos).

---

# phant-keychain-hex [![Build Status](https://secure.travis-ci.org/sparkfun/phant-keychain-hex.png?branch=master)](http://travis-ci.org/sparkfun/phant-keychain-hex)

hex id hash creation and validation module for phant

## Getting Started
Install the module with: `npm install phant-keychain-hex`

```javascript
var Keychain = require('phant-keychain-hex'),
    keys = Keychain({
      publicSalt: 'YOUR PUBLIC SALT',
      privateSalt: 'YOUR PRIVATE SALT',
      deleteSalt: 'YOUR DELETE SALT'
    });

// generate public, private, and delete keys
var id = '123abcdef321',
    pub = keys.publicKey(id), // ewY0EO7B45
    prv = keys.privateKey(id), // kPxgpEK91G
    del = keys.deleteKey(id); // PEr29DXa6N

// validation
console.log(keys.validatePrivateKey(pub, prv)); // true
console.log(keys.validateDeleteKey(pub, del)); // true

// getting the id from a hash
console.log(keys.getIdFromPublicKey(pub)); // 123abcdef321
console.log(keys.getIdFromPrivateKey(prv)); // 123abcdef321
console.log(keys.getIdFromDeleteKey(del)); // 123abcdef321
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 SparkFun Electronics. Licensed under the GPL v3 license.
