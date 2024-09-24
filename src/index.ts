//string
let myName:string = "Steve";
let message:string = `Hello, ${myName}`;

myName.toLocaleUpperCase()

//number
let count:number = 10;
let price: number = 9.99;
let temperature: number = -15;

let total: number = count * price;
let average: number = total /2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

//boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen){
    console.log("Hello we are open")
}

if(!isCompleted) {
    console.log("job not complete")
}

let isAvailable:boolean = isOpen && !isCompleted

//null
let user: string | null = null;

function login(userName: string) {
    user = userName;
}
function logout(){
    user = null;
}
login("Yejin")
logout()

//any
let someValue: any;

someValue.toString();
someValue.false;
someValue.toFixed();