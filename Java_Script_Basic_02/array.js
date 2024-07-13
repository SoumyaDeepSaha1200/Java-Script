// array 
const myArr = [0,1,2,3,4,5,true,"Deep"]
const myArr2 = [0,1,2,3,4,5,] 
//Java Script array resizeable
console.log(myArr2[0])
console.log(myArr2[1])
console.log(myArr2[2])
console.log(myArr2[3])

const myHeors = ["Iron Man","Captain America"]
const myArr3 = new Array(1, 2, 3, 4)

//Methods of array
//myArr2.push(6)
//myArr2.push(8)
//myArr2.push(9)
//myArr2.push(10)
//myArr2.pop() //Remove last value
console.log(myArr2)


//myArr2.unshift(9)
myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(9))
console.log(myArr2.includes(5))
console.log(myArr2.indexOf(5))
console.log(myArr2.indexOf(9))



const newarray= myArr2.join()

console.log(myArr2)
console.log(newarray)
console.log(typeof newarray)



//Slice, Splice
console.log("A", myArr2);
const myn1 = myArr2.slice(1, 3)
console.log(myn1)
console.log("B", myArr2);

const myn2=myArr2.splice(1, 3)
console.log(myn2)