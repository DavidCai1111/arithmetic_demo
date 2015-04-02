class UnorderedList
  arrInSide = []

  insert:(ele) ->
    arrInSide.push(ele)

  get:(eleToFind) ->
    ele = null
    result = {}
    result.count = 0
    result.ele = null
    for ele in arrInSide
      result.count += 1
      if ele == eleToFind
        result.ele = eleToFind
        break
    result

module.exports = () ->
  new UnorderedList()