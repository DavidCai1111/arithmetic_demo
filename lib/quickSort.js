var moment = require('moment');
var exchange = require('./arrUtil/exchange');

var quickSort = {};

//快速排序
quickSort.sort = function (arrToSort) {
	var arrToSort = arrToSort;
	var timeStart = moment();
	this.innerSort(arrToSort,0,(arrToSort.length - 1));
	console.log("快速排序：消耗了: " + (moment() - timeStart) + "ms");
	return arrToSort;
};

quickSort.partition = function(arr,l,h){
	var v = arr[l];
	var posLeft = l - 1;
	var posRight = h + 1;

	while(true){

		while(arr[++posLeft] < v) {
			if (posLeft === h){
				break;
			}
		}

		while(arr[--posRight] > v){
			if(posRight === l){
				break;
			}

		}

		if(posLeft >= posRight){
			break;
		}

		exchange(arr,posLeft,posRight);
	}

	exchange(arr,l,posLeft);

	return posLeft;
};

quickSort.innerSort = function(arr,l,h){
	if(l >= h){
		return;
	}
	var j = this.partition(arr,l,h);
	this.innerSort(arr,l,j-1);
	this.innerSort(arr,j+1,h);
};

module.exports = quickSort;