moment = require 'moment'

mergeSort = {}

mergeSort.sort = (arrToSort) ->
  timeStart = moment()
  posLeft = 0
  middle = Math.floor(arrToSort.length/2)
  posRight = middle + 1
  ArrTmp = []

  for i in [0..(arrToSort.length - 1)]
    ArrTmp[i] = arrToSort[i]

  for j in [0..(arrToSort.length - 1)]
    if posLeft > middle
      arrToSort[j] = ArrTmp[posRight]
      posRight += 1
    else if posRight > arrToSort.length
      arrToSort[j] = ArrTmp[posLeft]
      posLeft += 1
    else if ArrTmp[posLeft] < ArrTmp[posRight]
      arrToSort[j] = arrToSort[posLeft]
      posLeft += 1
    else
      arrToSort[j] = arrToSort[posRight]
      posRight += 1

  console.log "原地归并排序：消耗了#{(moment() - timeStart)}ms"
  arrToSort

module.exports = mergeSort