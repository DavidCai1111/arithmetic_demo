var _ = require('lodash');
var Usecoffe = true;

if(Usecoffe){
	var selectionSort = require('./lib/coffee_dest/selectionSort');
	var insertionSort = require('./lib/coffee_dest/insertionSort');
	var shellSort = require('./lib/coffee_dest/shellSort');
	var mergeSort = require('./lib/coffee_dest/mergeSort');
}else{
	var selectionSort = require('./lib/selectionSort');
	var insertionSort = require('./lib/insertionSort');
	var shellSort = require('./lib/shellSort');
	var mergeSort = require('./lib/mergeSort');
}


var arrayToSort = [];

//生成的随机数数组的长度
var NUMBER_OF_THE_ARRAY_TO_SORT = 15000;
//生成的随机数的范围
var RANGE_OF_RANDOM_NUMBER = 9999;

for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
	arrayToSort.push(_.random(RANGE_OF_RANDOM_NUMBER));
}

//选择排序
selectionSort.sort(arrayToSort);
//直接插入排序
insertionSort.sort(arrayToSort);
//希尔排序(使用序列: 1/2(3^k - 1)
shellSort.sort(arrayToSort);
//原地归并排序
mergeSort.sort(arrayToSort);
