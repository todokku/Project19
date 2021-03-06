'use strict'

const path = require('path')

module.exports = {
  enabled: true,

  pathToFile: path.join(__dirname, '..', '..', 'logs'),

  writeTimer: (1000 * 60) * 0.1
}
