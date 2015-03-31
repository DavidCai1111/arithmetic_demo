var moment = require('moment');
var exchange = require('./arrUtil/exchange');

var shellSort = {};

//希尔排序(使用序列: 1/2(3^k - 1)
shellSort.sort = function(arrToSort){
	var timeStart = moment();

	var N = arrToSort.length;
	var h = 1;

	while(h < N/3){
		h = 3 * h + 1;
	}

	while(h >= 1){
		for(var i = h ; i < N ; i ++){
			for(var j = i ; j >= h ; j-=h){
				if(arrToSort[j] < arrToSort[j-h]){
					exchange(arrToSort,(j-h),j);
				}
			}
		}
		h = (h - 1)/3;
	}

	console.log("希尔排序(使用序列: 1/2(3^k - 1) )：消耗了: " + (moment() - timeStart) + "ms");
	return arrToSort;
};

module.exports = shellSort;