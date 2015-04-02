_ = require 'lodash'
config = require '../../../config'

randomArr = {}

randomArr.init = () ->
  arr = []

  for i in [0..(config.NUMBER_OF_THE_ARRAY_TO_SORT)]
    arr.push(_.random(config.RANGE_OF_RANDOM_NUMBER))

  return () ->
    arr

randomArr.get = (arr) ->
  _arr =[]

  for i in [0..(arr.length - 1)]
    _arr.push(arr[i])

  _arr

module.exports = randomArr