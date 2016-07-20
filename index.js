
module.exports = function openExternal (url) {
  var _r = require //fool browserify

  //electron@1
  try {return _r('electron').shell.openExternal(url) }
  catch (err) { }

  //electron@0
  try { return _r('shell').openExternal(url) }
  catch (err) { }

  //browser
  window.open(url, '_blank')
}

module.exports.isExternal = function isExternal (url, location) {
  //if it starts with a relative link, or the same domain, then it is not external.
  return !/#\.\//.test(url[0]) && url.indexOf(window.location.origin) !== 0
}


