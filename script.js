function firstNonRepeatedChar(str) {
 // Write your code here
let map=new Map();
	for(let t of str){
		if(map.has(t)){
			map.set(t,map.get(t)+1)
		}
		else{
			map.set(t,1)
		}
	}
	for(let char of map){
		if(char[1]==1){
			return char[0]
		}
		else{
			return null;
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
