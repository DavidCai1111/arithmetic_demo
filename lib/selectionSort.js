var moment = require('moment');

//选择排序
var selectionSort = {};

selectionSort.sort = function(arrToSort){
	var timeStart = moment();
	for(var i = 0 ; i < (arrToSort.length - 1) ; i++){
		for(var j = i+1 ; j < arrToSort.length ; j++){
			if(arrToSort[j] < arrToSort[i]){
				var tmp =arrToSort[j];
				arrToSort[j] = arrToSort[i];
				arrToSort[i] = tmp;
			}
		}
	}
	console.log("选择排序：消耗了: " + (moment() - timeStart) + "ms");
	return arrToSort;
};

module.exports = selectionSort;