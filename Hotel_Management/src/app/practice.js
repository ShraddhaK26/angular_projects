const array=[1,2,3,4,5];
const Newarray=array.reverse();
console.log(Newarray);

let num=[1,2,3,4,5,6,7,8,9,10];
let num1=num.filter(Number => Number % 2 ==0);
console.log(num1);

const fruit1 =["apple","banana","carrot","gvava","cherry"];
const fruit2=fruit1.filter(fruit => fruit.includes("r"));
console.log(fruit2);

let str = "saare jaha se achha";
let str2=str.split(" ").reverse().join(" ");
console.log(str2);

var arr=[1,2,3,4,5,6,7];
arr.length =0;

var a = 12;
if (a%1 === 0){
    console.log("integer");
}
else{
    console.log("not integer");
}

var b=[1,2,3,4,5];
 var c = b.concat(b);
 console.log(c);

 function alphabeticalorder (str) {
  return  str.split("").reverse().join("");
 }
 console.log(alphabeticalorder("shraddha"));

 let fruit11 = "apple";
 let fruit12 = fruit11.toLocaleUpperCase();
 console.log(fruit12);

 let fruit110 = "apple is best fruit";
 let fruit120 = fruit110.toLocaleUpperCase();
 console.log(fruit120);

// function capital(str) {
//     return str.split(" ").toLocaleUpperCase().join("")
    
// }
// console.log(capital("i love my dad"));

var a ="harsh";
var b =a.charAt(0).toUpperCase() + a. substring(1);
console.log(b);

// function occ(str) {
// var occ2 = {};
// str.split("").forEach(function (elem){
//     if(occ2.hasOwnProperty(elem)===false)
//     occ2[elem]=1;
// }
// else {
//     occ2[elem]++
// }
// })
// }
// occ("applee")

var arr = [1,2,3,4,5];
var sum =0;
arr.forEach((Element)=>{
sum = sum + Element
}
)
console.log(sum);




var string1=[1,"cat",2,"god",3,"ghj",4,"fff",5];
var sum=0;
string1.forEach((ele)=>{
    if(typeof ele ==='number')
    sum = sum+ele;
}
)
console.log(sum);