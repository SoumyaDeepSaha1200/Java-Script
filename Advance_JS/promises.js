// fetch('https://something.com').then().catch().finally()
const promiseOne = new Promise(function (resolve, reject) {
    //Do an asycn task
    //DB Calls, cryptography, newwork 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})


// second promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("ASYNC TASK 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


// third
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "Chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})




// forth 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Deep", password: "123" })
        }
        else {
            reject('ERROR Somthing went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The is either resolved or rejected"))





// five
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Java Script", password: "123" })
        }
        else {
            reject('ERROR JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response)
    }catch (error){
        console.log(error);
    }
    // const response = await promiseFive
    // console.log(response)
}
consumePromiseFive()



async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = response.json()
   console.log(data)
}