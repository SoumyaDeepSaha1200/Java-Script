function sayName()
{
    console.log("Deep")
    console.log("Virat")
    console.log("Rohit")
    console.log("Dhoni")
    console.log("Kasuik")
    console.log("kaka")
}
// sayName()
// 

// function addTwoNumber(num1, num2) //(Known as parameters)
// {
//     console.log(num1+num2)
// }
function addTwoNumber(num1, num2) //(Known as parameters)
{
    // let result = num1+num2
    // console.log("Deep")
    return num1+num2
}

// addTwoNumber(45,5) //Arguments

const result=addTwoNumber(45, 5)
console.log("Result is ",result)


function loginUserMessage(username)
{
    if(username === undefined)
    {   
        console.log("Enter username")
        return 
    }
    return `${username} just logged in`
}


// const check=loginUserMessage("Deep")
const check=loginUserMessage()
console.log(check)



function cal(...num1) //...for infinity entry
{
    return num1
}

console.log(cal(200, 400, 500,45,98,999,788))

const user ={
    username: "Hitesh",
    price: 199
}
function handObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handObject(user)
handObject({
    username: "sam",
    price: 399
})

const myNewArray=[200,400,100,600] 


function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))