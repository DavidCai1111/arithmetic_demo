var randomArr = require("./lib/arrUtil/randomArr");
var arr = randomArr.init();
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
