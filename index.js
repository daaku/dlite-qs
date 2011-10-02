var _ = require('underscore')

exports.encode = function(data) {
  return _.reduce(data, function(pairs, val, key) {
      if (val !== null && typeof val != 'undefined') {
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
      }
      return pairs
    }, [])
    .sort()
    .join('&')
}

exports.decode = function(qs) {
  return _.reduce(qs.split('&'), function(data, part) {
    var pair = part.split('=', 2)
    if (pair && pair[0])
      data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
    return data
  }, {})
}
