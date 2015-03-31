moment = require 'moment'
exchange = require '../arrUtil/exchange'

quickSort = {}

#快速排序
quickSort.sort = (arrToSort) ->
  arrToSort = arrToSort
  timeStart = moment()
  this.innerSort arrToSort,0,(arrToSort.length - 1)
  console.log "快速排序：消耗了:#{(moment() - timeStart)}ms"
  arrToSort

quickSort.innerSort = (arr,l,h) ->
  if l >= h
    return
  j = quickSort.partition arr,l,h
  this.innerSort arr,l,(j-1)
  this.innerSort arr,(j+1),h
  null

quickSort.partition = (arr,l,h) ->
  v = arr[l]
  posLeft = l - 1
  posRight = h + 1

  while true
    while arr[++posLeft] < v
      if posLeft == h
        break
    while arr[--posRight] > v
      if posRight == l
        break
    if posLeft >= posRight
      break
    exchange arr,posLeft,posRight

  exchange arr,l,posLeft
  posLeft

module.exports = quickSort

