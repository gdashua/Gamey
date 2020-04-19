var firstArr = [];//container for numbers from 1-n inclusive
	var divTwoArr = [];//container for numbers divisible by 2
	var divThreeArr = [];//container for numbers divisible by 2
	var divFiveArr = [];//container for numbers divisible by 2
	var notDivArr = [];//container for numbers not divisible by 2,3 or 5

	function isAmemberOfTwo(x){
return divTwoArr.indexOf(x)>-1;}//function to check divisibility by two
function isAmemberOfThree(x){
return divThreeArr.indexOf(x)>-1;}//function to check divisibilty by three
function isAmemberOfFive(x){
return divFiveArr.indexOf(x)>-1;}//function to check divisibilty by five

	function initiateMainArr(n){
	for(var i=1;i<=n;i++){
		firstArr.push(i);
	}
}
// this function sorts the array of numbers base on the numbers they are divisible by
function initiateAllArr(){
	for(var i=0;i<firstArr.length;i++){

	if (firstArr[i]%2==0){
		divTwoArr.push(firstArr[i]);
		if(firstArr[i]%3==0){
		divThreeArr.push(firstArr[i]);
		if(firstArr[i]%5==0){
		divFiveArr.push(firstArr[i]);}
	}
	else if(firstArr[i]%5==0)
		divFiveArr.push(firstArr[i]);
	}
	else if(firstArr[i]%3==0){
		divThreeArr.push(firstArr[i]);
		if(firstArr[i]%5==0){
			divFiveArr.push(firstArr[i]);
		}
	}
	else if(firstArr[i]%5==0)
		divFiveArr.push(firstArr[i]);
	else
		notDivArr.push(firstArr[i]);
}
}
//this function replaces each number with the appropiate string base on the number(s) it is divisible with
function replaceNumWithStr(){
//converts each of the series of nunbers to string to enable replacement with the same data type
	for(var j=0; j<firstArr.length;j++){
		toString(firstArr[i]);
	}
	for(var i=0; i<firstArr.length;i++){

//checks values that should be replaced with yu-gi-oh
if(isAmemberOfTwo(firstArr[i])&&(isAmemberOfThree(firstArr[i]))&&(isAmemberOfFive(firstArr[i]))){firstArr[i]="yu-gi-oh";}
//checks values that should be replaced with yu
else if(isAmemberOfTwo(firstArr[i])&&(!isAmemberOfThree(firstArr[i]))&&(!isAmemberOfFive(firstArr[i]))){firstArr[i]="yu";}
//checks values that should be replaced with gi
else if(!isAmemberOfTwo(firstArr[i])&&(isAmemberOfThree(firstArr[i]))&&(!isAmemberOfFive(firstArr[i]))){firstArr[i]="gi";}
//checks values that should be replaced with oh
else if(!isAmemberOfTwo(firstArr[i])&&(!isAmemberOfThree(firstArr[i]))&&(isAmemberOfFive(firstArr[i]))){firstArr[i]="oh";}
//checks values that should be replaced with yu-gi
else if(isAmemberOfTwo(firstArr[i])&&(isAmemberOfThree(firstArr[i]))&&(!isAmemberOfFive(firstArr[i]))){firstArr[i]="yu-gi";}
//checks values that should be replaced with yu-oh
else if(isAmemberOfTwo(firstArr[i])&&(!isAmemberOfThree(firstArr[i]))&&(isAmemberOfFive(firstArr[i]))){firstArr[i]="yu-oh";}
//checks values that should be replaced with gi-oh
else if(!isAmemberOfTwo(firstArr[i])&&(isAmemberOfThree(firstArr[i]))&&(isAmemberOfFive(firstArr[i]))){firstArr[i]="gi-oh";}


		else{
			firstArr[i]=(firstArr[i])/1;//this ensures values that values that are not divisible by any of the three numbers remain unchanged
		}
}}
initiateMainArr(100);//initiates Array on numbers from 1-100
initiateAllArr();//calls method to sort the numbers between 1-100 inclusive
replaceNumWithStr();
console.log(firstArr);