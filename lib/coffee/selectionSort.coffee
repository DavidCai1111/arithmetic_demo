moment = require "moment"

selectionSort = {};

selectionSort.sort = (arrToSort) ->
  timeStart = moment()

  for i in [0 .. (arrToSort.length - 1)]
    for j in [(i + 1) .. arrToSort.length]
      if arrToSort[i] > arrToSort[j]
        tmp = arrToSort[i]
        arrToSort[i] = arrToSort[j]
        arrToSort[j] = tmp

  console.log "选择排序消耗了: " + (moment() - timeStart) + "ms"
  arrToSort

module.exports = selectionSort