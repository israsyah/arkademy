//Soal 4
var str = "N4UF41D1_28";
var chars = [];
if (str!=""){
for (var i = 0; i < str.length; i++) {
  
  if(/^\d+$/.test(str.charAt(i))){
    chars.push(str.charAt(i));
    							}
}
}else{
  console.log("No Number Found In Parameter!");
}

chars = chars.sort().join("");
console.log(chars)