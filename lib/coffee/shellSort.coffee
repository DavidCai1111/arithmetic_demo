moment = require 'moment'
exchange = require '../arrUtil/exchange'

shellSort = {}

shellSort.sort = (arrToSort) ->
  timeStart = moment()
  N = arrToSort.length
  h = 1
  while h < N/3
    h = 3 * h + 1
  while h >= 1
    for i in [h..arrToSort.length]
      for j in [i..h] by h
        if arrToSort[j] < arrToSort[j-h]
          exchange arrToSort,j,(j-h)
    h = (h-1)/3

  console.log "希尔排序(使用序列: 1/2(3^k - 1) )：消耗了: " + (moment() - timeStart) + "ms"
  arrToSort


module.exports = shellSort