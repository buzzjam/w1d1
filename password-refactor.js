var args = process.argv;
var input = process.argv[2].toString();

function obfuscate(){
	var res = input.replace(/a/g, "4").replace(/e/g, "3").replace(/o/g, "0").replace(/l/, "1");
	return res;
}
console.log(obfuscate());


