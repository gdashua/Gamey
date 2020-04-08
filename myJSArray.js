var data = [{Principal:2500,Time:1.8}, {Principal:1000,Time:5}, {Principal:3000,Time:1}, {Principal:2000,Time:3}];
	var rate,i;

	//intresData array to be reset after calculating the intrest in the intrestCalculator method
	var interestData=[]; 

	//to enable the intrest value for each object to be returned later in the intrestCalculator function
	function intrest(x,y,z){
 	var I = (x*y*z)/100;
 	return I;
	}
	//parent interestCalulator function
	function interestCalculator(anArray){

		//this loops through the initial data array decides which value to use for rate
		for(i=0;i<data.length;i++){
		if ((anArray[i].Principal>2500||anArray[i].Principal===2500)&&(anArray[i].Time>1&&anArray[i].Time<3)) {
			rate = 3; 
			//calculates the interest function an stores it in 'intrs' variable and pushes interest, principal, rate and time value set to the intrestData array
			var intrs=intrest(anArray[i].Principal, anArray[i].Time, rate);
			interestData.push({Interest: intrs, Principal:anArray[i].Principal, Time: anArray[i].Time, Rate: rate});
		}
		else if ((anArray[i].Principal>2500||anArray[i].Principal===2500)&&(anArray[i].Time>3||anArray[i].Time===3)) {
			rate = 4;
			var intrs=intrest(anArray[i].Principal, anArray[i].Time, rate);
			interestData.push({Interest: intrs, Principal:anArray[i].Principal, Time: anArray[i].Time, Rate: rate});
		}

		else if ((anArray[i].Principal<2500)&&(anArray[i].Time<1||anArray[i].Time===1)) {
			rate = 2;
			intrs=intrest(anArray[i].Principal, anArray[i].Time, rate);
			interestData({Interest: intrs, Principal:anArray[i].Principal, Time: anArray[i].Time, Rate: rate});
		}
		else {
			rate = 1;
			intrs=intrest(anArray[i].Principal, anArray[i].Time, rate);
			interestData.push({Interest: intrs, Principal:anArray[i].Principal, Time: anArray[i].Time, Rate: rate}); 
		}
	}
	console.log(interestData);
  return interestData;
}
interestCalculator(data);