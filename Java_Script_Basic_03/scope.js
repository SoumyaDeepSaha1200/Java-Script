// var c = 20000
let a = 300 // Global Scope
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a)
    //Block Scope
    // var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "Deep"
    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
// one()
// console.log(website)
if (true) {
    const username = "Deep"
    if (username === "Deep") {
        const website = " Youtube "
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//++++++++++++++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1;
}



const addTwo = function (num) {
    return num + 2
}
addTwo(5)