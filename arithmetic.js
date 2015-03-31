var _ = require('lodash');
var Usecoffe = true;

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

var arrayToSort = [];

//生成的随机数数组的长度
var NUMBER_OF_THE_ARRAY_TO_SORT = 10;
//生成的随机数的范围
var RANGE_OF_RANDOM_NUMBER = 20;

for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
	arrayToSort.push(_.random(RANGE_OF_RANDOM_NUMBER));
}

var arrayToSort = [];

//生成的随机数数组的长度
var NUMBER_OF_THE_ARRAY_TO_SORT = 10;
//生成的随机数的范围
var RANGE_OF_RANDOM_NUMBER = 20;

for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
		arrayToSort.push(_.random(RANGE_OF_RANDOM_NUMBER));
	}

//选择排序
selectionSort.sort(arrayToSort);
//直接插入排序
insertionSort.sort(arrayToSort);
//希尔排序(使用序列: 1/2(3^k - 1))
shellSort.sort(arrayToSort);
//原地归并排序
mergeSort.sort(arrayToSort);
//快速排序
quickSort.sort(arrayToSort);
