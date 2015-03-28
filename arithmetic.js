var moment =require('moment');
var selectionSort = require('./lib/selectionSort');
var insertionSort = require('./lib/insertionSort');
var _ = require('lodash');

var arrayToSort = [];

//生成的随机数数组的长度
var NUMBER_OF_THE_ARRAY_TO_SORT = 1000;

for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
	arrayToSort.push(_.random(9999));
}

selectionSort.sort(arrayToSort);
insertionSort.sort(arrayToSort);
