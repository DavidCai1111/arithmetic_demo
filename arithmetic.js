var _ = require('lodash');
var Usecoffe = true;

if(Usecoffe){
	var selectionSort = require('./lib/coffee_dest/selectionSort');
	var insertionSort = require('./lib/coffee_dest/insertionSort');
	var shellSort = require('./lib/coffee_dest/shellSort');

}else{
	var selectionSort = require('./lib/selectionSort');
	var insertionSort = require('./lib/insertionSort');
	var shellSort = require('./lib/shellSort');
}


var arrayToSort = [];

//生成的随机数数组的长度
var NUMBER_OF_THE_ARRAY_TO_SORT = 50000;
//生成的随机数的范围
var RANGE_OF_RANDOM_NUMBER = 9999;

for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
	arrayToSort.push(_.random(RANGE_OF_RANDOM_NUMBER));
}

selectionSort.sort(arrayToSort);
insertionSort.sort(arrayToSort);
shellSort.sort(arrayToSort);

