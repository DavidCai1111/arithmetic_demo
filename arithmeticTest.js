//计时用
var moment = require("moment");
//获取随机数的数组
var randomArr = require("./lib/arrUtil/randomArr");
var arr = randomArr.init();

//排序算法
var selectionSort = require('./lib/coffee_dest/selectionSort');
var insertionSort = require('./lib/coffee_dest/insertionSort');
var shellSort = require('./lib/coffee_dest/shellSort');
var mergeSort = require('./lib/coffee_dest/mergeSort');
var quickSort = require('./lib/coffee_dest/quickSort');
//优先队列
var getPriorityQueue = require('./lib/coffee_dest/PriorityQueue');
//二叉树
var getBinaytTree = require('./lib/coffee_dest/BinaryTree');
//无序表
var getUnorderedList = require('./lib/coffee_dest/UnorderedList');
//哈希表
var getHashTable = require('./lib/coffee_dest/HashTable');

//选择排序
selectionSort.sort(randomArr.get(arr()));
//直接插入排序
insertionSort.sort(randomArr.get(arr()));
//希尔排序(使用序列: 1/2(3^k - 1))
shellSort.sort(randomArr.get(arr()));
//原地归并排序
mergeSort.sort(randomArr.get(arr()));
//快速排序
quickSort.sort(randomArr.get(arr()));
//使用优先队列找出最小的五个数
(function(len){
	var priorityQueue = getPriorityQueue(len);
	var timeStart = moment();
	for(var i = 0 ; i < randomArr.get(arr()).length ; i++){
		priorityQueue.insert(randomArr.get(arr())[i]);
	}
	console.log("构建长度为" + len + "的优先队列消耗了" + (moment() - timeStart) + "ms，输入中最小的" + len +"个数为:");
	return console.log(priorityQueue.getQue());
}(5));
//使用二叉树找出最大的数
(function () {
	var binaryTree = getBinaytTree();
	var timeStart = moment();
	for(var i = 0 ; i < randomArr.get(arr()).length ; i++){
		binaryTree.insert(randomArr.get(arr())[i]);
	}

	console.log("构建二叉树消耗了" + (moment() - timeStart) + "ms，输入中最大的数为:" + binaryTree.getMax());

}());
//使用无序表
(function (eleToFind) {
	var unorderedList = getUnorderedList();
	var timeStart = moment();
	for(var i = 0 ; i < randomArr.get(arr()).length ; i++){
		unorderedList.insert(randomArr.get(arr())[i]);
	}
	console.log("构建无序表，使用了"+ (moment() - timeStart) + "ms");

	var result = unorderedList.get(eleToFind);
	if(result.ele !== null){
		console.log("使用无序表找到值为" + eleToFind + "的数，进行了" + result.count + "次查找");
	}else{
		console.log("使用无序表查找值为" + eleToFind + "的数，此数不存在于表中，进行了" + result.count + "次查找");
	}

}(5000));
//使用哈希表
(function (eleToFind) {
	var hashTable = getHashTable(337);
	var timeStart = moment();
	for(var i = 0 ; i < randomArr.get(arr()).length ; i++){
		hashTable.insert(randomArr.get(arr())[i]);
	}
	console.log("构建哈希表，使用了"+ (moment() - timeStart) + "ms");


	var result = hashTable.get(eleToFind);
	if(result.ele !== null){
		console.log("使用哈希表(以与337取余的结果为键)找到值为" + eleToFind + "的数，进行了" + result.count + "次查找");
	}else{
		console.log("使用哈希表(以与337取余的结果为键)查找值为" + eleToFind + "的数，此数不存在于表中，进行了" + result.count + "次查找");
	}

}(5000));