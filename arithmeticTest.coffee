#计时用
moment = require 'moment'
#获取随机数组
randomArr = require './lib/coffee_dest/arrUtil/randomArr'
arr = randomArr.init()
#排序算法
selectionSort = require './lib/coffee_dest/selectionSort'
insertionSort = require './lib/coffee_dest/insertionSort'
shellSort = require './lib/coffee_dest/shellSort'
mergeSort = require './lib/coffee_dest/mergeSort'
quickSort = require './lib/coffee_dest/quickSort'
#优先队列
getPriorityQueue = require './lib/coffee_dest/PriorityQueue'
#二叉树
getBinaytTree = require './lib/coffee_dest/BinaryTree'
#无序表
getUnorderedList = require './lib/coffee_dest/UnorderedList'
#哈希表
getHashTable = require './lib/coffee_dest/HashTable'
#配置
config = require './config'

console.log "输入为一个长度为#{config.NUMBER_OF_THE_ARRAY_TO_SORT},范围为#{config.RANGE_OF_RANDOM_NUMBER}的数组"

#选择排序
selectionSort.sort randomArr.get arr()
#直接插入排序
insertionSort.sort randomArr.get arr()
#希尔排序(使用序列: 1/2(3^k - 1))
shellSort.sort randomArr.get arr()
#原地归并排序
mergeSort.sort randomArr.get arr()
#快速排序
quickSort.sort randomArr.get arr()

#使用优先队列找出最小的五个数
((len) ->
  priorityQueue = getPriorityQueue len
  timeStart = moment()

  for ele in randomArr.get(arr())
    priorityQueue.insert ele

  console.log "构建长度为#{len}的优先队列消耗了#{(moment() - timeStart)}ms，输入中最小的#{len}个数为:"
  console.log priorityQueue.getQue()
)(5)

#使用二叉树找出最大的数
(() ->
  binaryTree = getBinaytTree()
  timeStart = moment()

  for ele in randomArr.get(arr())
    binaryTree.insert(ele)

  console.log "构建二叉树消耗了#{(moment() - timeStart)}ms，输入中最大的数为:#{binaryTree.getMax()}"
)()

#使用无序表
((eleToFind) ->
  unorderedList = getUnorderedList()
  timeStart = moment()

  for ele in randomArr.get(arr())
    unorderedList.insert(ele)

  console.log("构建无序表，使用了#{(moment() - timeStart)}ms");

  result = unorderedList.get(eleToFind)

  if result.ele != null
    console.log("使用无序表找到值为#{eleToFind}的数，进行了#{result.count - 1}次查找");
  else
    console.log("使用无序表查找值为#{eleToFind}的数，此数不存在于表中，进行了#{result.count - 1}次查找");
)(5000)

#使用哈希表
((eleToFind) ->
  hashTable = getHashTable(337)
  timeStart = moment()

  for ele in randomArr.get(arr())
    hashTable.insert(ele)

  console.log("构建哈希表，使用了#{(moment() - timeStart)}ms");

  result = hashTable.get(eleToFind)

  if result.ele != null
    console.log("使用哈希表找到值为#{eleToFind}的数，进行了#{result.count}次查找");
  else
    console.log("使用哈希表查找值为#{eleToFind}的数，此数不存在于表中，进行了#{result.count}次查找");
)(5000)
