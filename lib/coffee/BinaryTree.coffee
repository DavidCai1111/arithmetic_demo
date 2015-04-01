createNode = require './TreeNode'

class BinaryTree
  root = null;

  insert : (data) ->
    nodeToInsert = createNode(data,null,null)
    if root == null
      root = nodeToInsert
    else
      current = root
      parent
      while true
        parent = current
        if nodeToInsert.data < current.data
          current = current.left
          if current == null
            parent.left = nodeToInsert
            break
        else if nodeToInsert.data > current.data
          current = current.right
          if current == null
            parent.right = nodeToInsert
            break
        else
          break

  getMax : () ->
    current = root
    maxVal
    while true
      if current.right != null
        current = current.right
      else
        maxVal = current.data
        break
    maxVal

module.exports = () ->
  new BinaryTree()








