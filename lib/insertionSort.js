var moment = require('moment');

//直接插入排序
var insertionSort = {};

insertionSort.sort = function(arrToSort){
	var timeStart = moment();
	var arrSorted = [];
	for(var i = 0 ; i < arrToSort.length ; i++){
		arrSorted.push(arrToSort[i]);
		for(var j = (arrSorted.length - 1) ; j > 0 ; j--){
			if(arrSorted[j] < arrSorted[j -1]){
				var tmp = arrSorted[j];
				arrSorted[j - 1] = arrSorted[j -1];
				arrSorted[j - 1] = tmp;
			}else{
				break;
			}
		}
	}
	console.log("直接插入排序：消耗了: " + (moment() - timeStart) + "ms");
	return arrSorted;
};

module.exports = insertionSort;