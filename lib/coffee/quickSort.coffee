moment = require 'moment'

quickSort = {}

quickSort.sort = (arrToSort) ->
  timeStart = moment()
  arrSorted = this.innerSort arrToSort
  console.log "快速排序V2：消耗了:#{(moment() - timeStart)}ms"
  arrSorted

quickSort.innerSort = (arrToSort) ->
  if arrToSort.length == 0
    return []
  if arrToSort.length == 1
    return arrToSort
  left = []
  right = []
  v = arrToSort[0]
  for i in [1..(arrToSort.length - 1)]
    if arrToSort[i] <= v
      left.push(arrToSort[i])
    else
      right.push(arrToSort[i])
  this.innerSort(left).concat(v,this.innerSort(right))

module.exports = quickSort