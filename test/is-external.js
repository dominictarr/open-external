var tape = require('tape')
var open = require('../')

var external = [
  "http://tex.stackexchange.com/questions/1979/good-keyboard-layouts-for-typing-latex/310958#310958",
  "http://ramoneando.com/posts/2015-dvorak-twister.html",
  "https://www.youtube.com/watch?v=KFwBH2fb2E0"

]

var locations = {
  file: {
    origin: 'file:///',
    protocol: 'file:',
    local: [
    "file:///home/dominic/c/web-bootloader/index.html#",
    "file:///home/dominic/c/web-bootloader/index.html#@Id5zOkx7CjhrEeGayg2YZt8NTVHFlHD/xiC0Emt1LEA=.ed25519",
    "file:///home/dominic/c/web-bootloader/index.html#%fuCz//IB9stKbE1u6SiAL7bBOZKiujjP57w4o8aIMac=.sha256",
    "file:///home/dominic/c/web-bootloader/index.html#%EZgkZMr2bOH9bGgps8PQOK79OCzmo4iQP/AIfN0xAdk=.sha256"
    ]
  },

  browser: {
    origin: "http://localhost:8000",
    protocol: 'http:',
    local: [
      "http://localhost:8000/#",
      "http://localhost:8000/#@Id5zOkx7CjhrEeGayg2YZt8NTVHFlHD/xiC0Emt1LEA=.ed25519",
      "http://localhost:8000/#%CcjEZn0KXYpxqoAmqILk7O/jaKwamSGN5V5jh6Qu3sA=.sha256"
    ]
  },

  electron: {
    origin: 'file:///',
    local: [
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#",
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#@EMovhfIrFk4NihAKnRNhrfRaqIhBv1Wj8pTxJNgvCCY=.ed25519",
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#%9Xgu5YuBHBNodS/9/qlHegOxaBXw/YioY+1uBdnUcwM=.sha256"
    ]
  },
  ff_file: {
    origin: 'null',
    protocol: 'file:',
    local: [
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#",
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#@EMovhfIrFk4NihAKnRNhrfRaqIhBv1Wj8pTxJNgvCCY=.ed25519",
      "file:///home/dominic/.nvm/versions/node/v6.2.0/lib/node_modules/electro/index.html?argv%3Delectro%26argv%3Dindex.js%26stdin%3Dtrue%26stderr%3Dtrue%26stdout%3Dtrue#%9Xgu5YuBHBNodS/9/qlHegOxaBXw/YioY+1uBdnUcwM=.sha256"
    ]
  }
}

for(var k in locations) {

  tape(k+' isExternal', function (t) {
    locations[k].local.forEach(function (href) {
      t.equal(open.isExternal(href, locations[k]), false)
    })
    external.forEach(function (href) {
      t.equal(open.isExternal(href, locations[k]), true)
    })

    t.end()
  })
}




