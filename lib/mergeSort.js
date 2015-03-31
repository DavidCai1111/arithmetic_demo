var moment = require('moment');

//原地归并排序
var mergeSort = {};

mergeSort.sort = function (arrToSort) {
	var timeStart = moment();
	var posLeft = 0;
	var middle = Math.floor(arrToSort.length/2);
	var posRight = middle + 1;

	var tmpArr = [];

	for(var i = 0 ; i < arrToSort.length ; i++){
		tmpArr[i] = arrToSort[i];
	}

	for(var j = 0 ; j < arrToSort.length ; j++){
		if(posLeft > middle){
			arrToSort[j] = tmpArr[posRight];
			posRight += 1;
		}else if(posRight > arrToSort.length){
			arrToSort[j] = tmpArr[posLeft];
			posLeft += 1;
		}else if(tmpArr[posLeft] < tmpArr[posRight]){
			arrToSort[j] = tmpArr[posLeft];
			posLeft += 1;
		}else{
			arrToSort[j] = tmpArr[posRight];
		}
	}

	console.log("原地归并排序：消耗了: " + (moment() - timeStart) + "ms");
	return arrToSort;
};

module.exports = mergeSort;