const user = {
    username: "Deep",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , Welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)



// function Chai(){
//     let username = "Deep"
//     console.log(this.username);
// }
// Chai()



const chai = function(){
    let username = "Deep"
    // console.log(this.username)
    console.log(this)
}
// chai()


//************************* Pure arrow function */

const addTwo = (num1, num2)=>  (num1 + num2)
const addtoo = (num1, num2)=>  ({username: "Deep"})
const addThree = (num1, num2)=>   
{
    return num1 + num2
}

console.log(addTwo(3, 4))
console.log(addtoo(3, 4))
console.log(addThree(3, 4))



// const myArray = [2, 5, 6, 7, 8]

// myArray.forEach()