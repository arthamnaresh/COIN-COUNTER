//Below function executes on click of CALCULATE button.
function calculate(){
	var json = [{
		"denomination": "denomination-1",
		"value": parseInt(document.getElementById("denomination-1").value)
	},{
		"denomination": "denomination-2",
		"value": parseInt(document.getElementById("denomination-2").value)
	},{
		"denomination": "denomination-3",
		"value": parseInt(document.getElementById("denomination-3").value)
	},{
		"denomination": "denomination-4",
		"value": parseInt(document.getElementById("denomination-4").value)
	}];
	var denominations = sorting(json);
	clearDenominations(denominations);
	calculateDenominations(denominations);
}

//Below function sorts the json object in Descending order to make easy to calculate the number of denominations.
function sorting(json){
	return json.sort(function(a,b){
		return b.value - a.value;
	});
}

//Below function resets the denominations object before calculating new denominations.
function clearDenominations(denominations) {
	for(var i=1;i<=denominations.length;i++){
		document.getElementById("inner-"+i).style.display = "none";
	}
}

//Below function calculates the number of each denomiation of coins required to sum up to the entered value. 
function calculateDenominations(denominations){
	var value = document.getElementById("text").value;
	var quo;
	var rem;
	for(i=0;i<denominations.length;i++){
		if(value >= denominations[i].value) {
			quo = Math.floor(value / denominations[i].value);
			value = value % denominations[i].value;
			if(quo != 0){
				displayDenominations(quo, denominations[i].denomination);
			}
		}
	}
}

//Below function displays the number of each denomination.
function displayDenominations(val, den) {
	var value = val;
	var denomination = den;
	var indexpos = denomination.lastIndexOf('-');
	var index = denomination.substring(indexpos+1);
	document.getElementById("count"+index).innerHTML = value;
	document.getElementById("inner-"+index).style.display = "block";
}