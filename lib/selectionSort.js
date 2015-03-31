var moment = require('moment');
var exchange = require('./arrUtil/exchange');

//选择排序
var selectionSort = {};

selectionSort.sort = function(arrToSort){
	var timeStart = moment();
	for(var i = 0 ; i < (arrToSort.length - 1) ; i++){
		for(var j = i+1 ; j < arrToSort.length ; j++){
			if(arrToSort[j] < arrToSort[i]){
				exchange(arrToSort,i,j);
			}
		}
	}
	console.log("选择排序：消耗了: " + (moment() - timeStart) + "ms");
	return arrToSort;
};

module.exports = selectionSort;