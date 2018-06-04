var args = process.argv;
var input = process.argv[2].toString();

function obfuscate(){
	var x = input.split("");
	for (var i = 0; i < x.length; i++) {
		if(x[i] === "a"){
			x[i] = "4"
		}		
		if(x[i] === "e"){
			x[i] = "3"
		}		
		if(x[i] === "o"){
			x[i] = "0"
		}		
		if(x[i] === "l"){
			x[i] = "1"
		}
	}
	  x = x.join("");
  return x;
}
console.log(obfuscate());


