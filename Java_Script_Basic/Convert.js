let score=33
let score1="55"

console.log(typeof score); //Both are currect for type casting
console.log(typeof(score)); //Both are currect for type casting
console.log(typeof score1)

let number=Number(score1); //type chasting 
console.log(typeof number)


let score2="Deep"
let booleanIslogedIn=Boolean(score2)
console.log(booleanIslogedIn)



let somenumber=33
let Stringof=String(somenumber)
console.log(Stringof)
// ************************** Operation **************************
let value=3
let negValue= -value
console.log(value)
console.log(negValue)
let str1="Hello"
let str2=" Hitesh"
let str3=str1+str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) 
console.log(1 + 2 + "2")







// Momoery is two type
//Stack (Premitive) and Heap (Non-Preminitve)
//Stack ->
let myYoutubeName = "Deep.com"
let anothername= myYoutubeName
anothername="Soumya Deep Saha"

console.log(myYoutubeName)
console.log(anothername)


//Heap
let userOne={
    email: "user@google.com",
    upi: "user@yel"
}

let userTwo=userOne
userTwo.email = "deepadiotic@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);