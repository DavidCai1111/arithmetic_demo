var moment = require("moment");
var randomArr = require("./lib/arrUtil/randomArr");
var arr = randomArr.init();
var Usecoffe = true;

//排序算法
if(Usecoffe){
	var selectionSort = require('./lib/coffee_dest/selectionSort');
	var insertionSort = require('./lib/coffee_dest/insertionSort');
	var shellSort = require('./lib/coffee_dest/shellSort');
	var mergeSort = require('./lib/coffee_dest/mergeSort');
	var quickSort = require('./lib/coffee_dest/quickSort');
}else{
	var selectionSort = require('./lib/selectionSort');
	var insertionSort = require('./lib/insertionSort');
	var shellSort = require('./lib/shellSort');
	var mergeSort = require('./lib/mergeSort');
	var quickSort = require('./lib/quickSort');
}

//数据结构
var getPriorityQueue = require('./lib/coffee_dest/PriorityQueue');
//二叉树
var getBinaytTree = require('./lib/coffee_dest/BinaryTree');

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