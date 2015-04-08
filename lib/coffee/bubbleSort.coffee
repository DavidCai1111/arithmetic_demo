moment = require 'moment'
exchange = require './arrUtil/exchange'

bubbleSort = {}

bubbleSort.sort = (arrToSort) ->

  timeStart = moment()

  for i in [(arrToSort.length - 2)..2]
    for j in [0..(i - 1)]
      if arrToSort[j] > arrToSort[j+1]
        exchange(arrToSort,j,j+1)

  console.log "冒泡排序：消耗了#{(moment() - timeStart)}ms"
  arrToSort

module.exports = bubbleSort

