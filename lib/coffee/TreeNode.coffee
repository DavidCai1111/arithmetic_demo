class TreeNode
  left = null
  right = null
  data = null;

  constructor:(@data,@left,@right) ->

module.exports = (data,left,right) ->
  new TreeNode(data,left,right)