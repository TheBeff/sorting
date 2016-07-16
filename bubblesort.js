var swap = function(array, i){
	var temp = array[i];
	array[i] = array[i+1];
	array[i+1] = temp;
};

var compare = function(array, i){
	return array[i] > array[i+1];
};

var bubbleSort = function(array){

	for(var j = 0; j < array.length; j++){ 
		for(var i = 0; i < array.length-j; i++){
			if(compare(array, i)){
				swap(array, i);
			}
		}
	}

	return array;

};