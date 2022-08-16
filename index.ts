console.log("Hello typescript")


let firstName: string = "khali";
let age: number = 49
let active: boolean = true


// let names: string[] = {1, 2, 3, 4} // gives us an error
let names: string[] = ["bobby", "jennifer", "lilly"]

enum studentTypes {
    pending,
    active,
    almostdone,
    graduated,
    tas,
    teachers,
}

const mystatus = studentTypes.graduated

// switch (Number(mystatus)) {
//     case Number(studentTypes.active):
//         console.log("student is graduated")
//         break;
//         case Number 
//         default
// }

// let code: string | number = 11
// code = "aall"

// code = false // error. not a strin or number

// console.log(`my entry code is: ${code}`)

// console.log(mystatus)
// if (mystatus == studentTypes.graduated)
// console.log(`the student is graduated`)

// console.log(names)
// console.log(`my firstname is ${firstName}`)


function sum (arr: number[]){
    return arr.length
    // return arr.reduce((total: number, num: number) => total + num)
}
let numbers: number[] = [1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem: any = { name: "Khali" }

complexItem = { name: "Khali" }

complexItem = { title: "Professor"}
complexItem = "It's a string"
complexItem = 22

// 

interface human {
name: string,
age: number,
height: number,
bloodType: string,
}

const me : human = {
    name: "bobby",
    age: 49,
    bloodType: "AAAAY",
    height: 6 * 12
}

enum bloodType {
    aPositive,
    bPositive,
    oPositive,
}