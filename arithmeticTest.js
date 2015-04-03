(function() {
  var arr, config, getBinaytTree, getHashTable, getPriorityQueue, getUnorderedList, insertionSort, mergeSort, moment, quickSort, randomArr, selectionSort, shellSort;

  moment = require('moment');

  randomArr = require('./lib/coffee_dest/arrUtil/randomArr');

  arr = randomArr.init();

  selectionSort = require('./lib/coffee_dest/selectionSort');

  insertionSort = require('./lib/coffee_dest/insertionSort');

  shellSort = require('./lib/coffee_dest/shellSort');

  mergeSort = require('./lib/coffee_dest/mergeSort');

  quickSort = require('./lib/coffee_dest/quickSort');

  getPriorityQueue = require('./lib/coffee_dest/PriorityQueue');

  getBinaytTree = require('./lib/coffee_dest/BinaryTree');

  getUnorderedList = require('./lib/coffee_dest/UnorderedList');

  getHashTable = require('./lib/coffee_dest/HashTable');

  config = require('./config');

  console.log("输入为一个长度为" + config.NUMBER_OF_THE_ARRAY_TO_SORT + ",范围为" + config.RANGE_OF_RANDOM_NUMBER + "的数组");

  selectionSort.sort(randomArr.get(arr()));

  insertionSort.sort(randomArr.get(arr()));

  shellSort.sort(randomArr.get(arr()));

  mergeSort.sort(randomArr.get(arr()));

  quickSort.sort(randomArr.get(arr()));

  (function(len) {
    var ele, i, len1, priorityQueue, ref, timeStart;
    priorityQueue = getPriorityQueue(len);
    timeStart = moment();
    ref = randomArr.get(arr());
    for (i = 0, len1 = ref.length; i < len1; i++) {
      ele = ref[i];
      priorityQueue.insert(ele);
    }
    console.log("构建长度为" + len + "的优先队列消耗了" + (moment() - timeStart) + "ms，输入中最小的" + len + "个数为:");
    return console.log(priorityQueue.getQue());
  })(5);

  (function() {
    var binaryTree, ele, i, len1, ref, timeStart;
    binaryTree = getBinaytTree();
    timeStart = moment();
    ref = randomArr.get(arr());
    for (i = 0, len1 = ref.length; i < len1; i++) {
      ele = ref[i];
      binaryTree.insert(ele);
    }
    return console.log("构建二叉树消耗了" + (moment() - timeStart) + "ms，输入中最大的数为:" + (binaryTree.getMax()));
  })();

  (function(eleToFind) {
    var ele, i, len1, ref, result, timeStart, unorderedList;
    unorderedList = getUnorderedList();
    timeStart = moment();
    ref = randomArr.get(arr());
    for (i = 0, len1 = ref.length; i < len1; i++) {
      ele = ref[i];
      unorderedList.insert(ele);
    }
    console.log("构建无序表，使用了" + (moment() - timeStart) + "ms");
    result = unorderedList.get(eleToFind);
    if (result.ele !== null) {
      return console.log("使用无序表找到值为" + eleToFind + "的数，进行了" + (result.count - 1) + "次查找");
    } else {
      return console.log("使用无序表查找值为" + eleToFind + "的数，此数不存在于表中，进行了" + (result.count - 1) + "次查找");
    }
  })(5000);

  (function(eleToFind) {
    var ele, hashTable, i, len1, ref, result, timeStart;
    hashTable = getHashTable(337);
    timeStart = moment();
    ref = randomArr.get(arr());
    for (i = 0, len1 = ref.length; i < len1; i++) {
      ele = ref[i];
      hashTable.insert(ele);
    }
    console.log("构建哈希表，使用了" + (moment() - timeStart) + "ms");
    result = hashTable.get(eleToFind);
    if (result.ele !== null) {
      return console.log("使用哈希表找到值为" + eleToFind + "的数，进行了" + result.count + "次查找");
    } else {
      return console.log("使用哈希表查找值为" + eleToFind + "的数，此数不存在于表中，进行了" + result.count + "次查找");
    }
  })(5000);

}).call(this);
