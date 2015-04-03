class HashTable
  arrInSide = []
  primeNum = null

  constructor:(@primeNum) ->

  insert:(ele) ->
    hashCode = (ele%(@primeNum))
    if arrInSide[hashCode] == undefined
      arrInSide[hashCode] = []
      arrInSide[hashCode].push(ele)
    else
      arrInSide[hashCode].push(ele)

  get:(eleToFind) ->
    hashCode = (eleToFind%(@primeNum))
    result = {}
    result.count = 0
    result.ele = null
    ele = null
    if arrInSide[hashCode] == undefined
      result.count += 1
      result
    else
      for ele in arrInSide[hashCode]
        result.count += 1
        if ele == eleToFind
          result.ele = eleToFind
          break
    result


module.exports = (primeNum) ->
    new HashTable(primeNum)
