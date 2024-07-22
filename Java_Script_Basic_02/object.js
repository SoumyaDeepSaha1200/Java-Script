// Singleton
//Object Literals
//Object.create

const mySym = Symbol("key1")
const Jsuser={
    name: "Deep",
    "Full Name": "Soumya Deep Saha",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "deepadiotic@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} //{} this is object


console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["Full Name"])
console.log(Jsuser[mySym])

// myArray = ["hi", "bye"]


Jsuser.email="senishitagpt@.com"
// Object.freeze(Jsuser)
Jsuser.email="senishitamicrosoft@.com"

console.log(Jsuser)



// function in onject
Jsuser.greeting = function(){
    console.log("Hello Js user")
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`)
}
// console.log(Jsuser.greeting)
// console.log(Jsuser.greetingTwo)
console.log(Jsuser.greetingTwo())
console.log(Jsuser.greeting())



//Object With constractor
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id= "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Deep",
            lastname: "Saha"
        }
    }
}
console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}

const obj3={obj1, obj2}

console.log(obj3)
console.log(obj3.obj1)
console.log(obj3.obj2)

const obj4=Object.assign({},obj1, obj2)
console.log(obj4)



// De- Structureing 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Deep"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor)


// const navbar = ({compnay}) => {

// }
// navbar(company = "Hitesh")

// {
//     "name": "Deep",
//     "coursename": "js in hindi",
//     "price": "Price"
// }