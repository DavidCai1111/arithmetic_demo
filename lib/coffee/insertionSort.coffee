moment = require "moment"
exchange = require '../arrUtil/exchange'

insertionSort = {}

insertionSort.sort = (arrToSort) ->

  timeStart = moment()
  arrSorted = [];

  for ele in arrToSort
    arrSorted.push ele
    for index in [(arrSorted.length - 1) .. 0]
      if arrSorted[index] < arrSorted[(index - 1)]
        tmp = arrSorted[(index - 1)]
        arrSorted[(index - 1)] = arrSorted[index]
        arrSorted[index] = tmp
        exchange arrSorted,index,(index - 1)
      else
        break

  console.log "直接插入排序：消耗了#{(moment() - timeStart)}ms"
  arrSorted

module.exports = insertionSort
