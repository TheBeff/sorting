var split = function(wholeArray){

	var halfLength = Math.floor(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0, halfLength)
	var secondHalf = wholeArray.slice(halfLength);

	return [firstHalf, secondHalf];
};

var merge = function(arr1, arr2){
	var merged = [];
	
	while(arr1.length && arr2.length){
		if( arr1[0] <= arr2[0] ){
			merged.push(arr1.shift())
		} else merged.push(arr2.shift());
	}

	if (!arr1.length){
		merged = merged.concat(arr2);
	} else merged = merged.concat(arr1);

	return merged;
};

var mergeSort = function(array){
	if(array.length <= 1) return array;
	var left = split(array)[0];
	var right = split(array)[1];
	return merge(mergeSort(left), mergeSort(right));
};