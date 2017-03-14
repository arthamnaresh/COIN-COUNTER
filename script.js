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
	calculateDenominations(denominations);
}

function calculateDenominations(denominations){
	var value = document.getElementById("text").value;
	var quo;
	var rem;
	for(i=0;i<denominations.length;i++){
		if(value >= denominations[i].value) {
			quo = Math.floor(value / denominations[i].value);
			value = value % denominations[i].value;
			if(quo != 0){
				var denomination = denominations[i].denomination;
				var indexpos = denomination.lastIndexOf('-');
				var index = denomination.substring(indexpos+1);
				document.getElementById("count"+index).innerHTML = quo;
				document.getElementById("inner-"+index).style.display = "block";
			}
		}
	}
}