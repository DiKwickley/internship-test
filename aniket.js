//Solution submitted by Aniket Singh Rawat
//email: sprx077@gmail.com
//phone: 9106400236


var D = {

	'2019-01-1' : 100,
	'2019-01-4' : 115,
}

const sortOnKeys = (dict) => {
    var sorted = [];
    var sorted = Object.keys(D)
    sorted.sort();
    var tempDict = {};
    for(var i = 0; i < sorted.length; i++)
        tempDict[sorted[i]] = dict[sorted[i]];
    return tempDict;
}


//Solution Function Starts

const solution = (D) => {
	var allKeys =  Object.keys(D)
	for(x=1;x<allKeys.length;x+=1){
		var start = new Date(allKeys[x-1] );
		var end = new Date(allKeys[x]);
		var difference = (end.getTime() - start.getTime())/ (1000 * 3600 * 24)
		incrementValue = (D[allKeys[x]] - D[allKeys[x-1]])/difference;
		
		while(difference--){
			if(difference==0)
				break;
			var missingDate = new Date(start.getFullYear() , start.getMonth(), start.getDate() + difference )
			var n = missingDate.getMonth()+1
			var dateKey = missingDate.getFullYear() + '-' + (n > 9 ? "" + n: "0" + n) +'-' + missingDate.getDate();
			
			if(! (dateKey in D)){
				D[dateKey] = incrementValue*difference + D[allKeys[x-1]]
			} 	
		}
	}

	//Sorting the dict to be in order by date, this step can be removed
	D = sortOnKeys(D);

	return D;
}


console.log(solution(D))