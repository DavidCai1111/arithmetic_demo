module.exports = (arr,i,j) ->
  tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp