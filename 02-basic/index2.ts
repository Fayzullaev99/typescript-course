// // type Config = {protocol:'http' | 'https', port:3000 | 3001}
// interface Config {
//     protocol:'http' | 'https', 
//     port:3000 | 3001,
//     log:(msg:string)=>void
// }
// // type Role = {
// //     role:string
// // }
// interface Role {
//     role:string
// }
// interface ConfigWithRole extends Config, Role{}
// const serverConfig:ConfigWithRole = {
//     protocol:'https', 
//     port:3001,
//     role:"admin",
//     log:(msg:string):void => console.log(msg)

// }
// const backupConfig:Config = {
//     protocol:'https', 
//     port:3001,
//     log:(msg:string):void => console.log(msg)
// }

// type ServeType = (protocol:'http' | 'https', port:3000 | 3001, log:Function) => string
// const serve:ServeType = (
//     protocol:'http' | 'https', port:3000 | 3001, log:Function):'Server started'=> {
//     log(`Server started on ${protocol}://server:${port}`);

//     return 'Server started'
// }
// serve(serverConfig.protocol,serverConfig.port, serverConfig.log)


// interface Styles {
//     [key:string]:string
// }

// const styles:Styles = {
//     position: 'absolute'
// }





// non-null non-undefined

// interface User{
//     login:string,
//     password:string,
//     age:number,
//     readonly addr?:string,
//     parents?:{
//         mother?:string,
//         father?:string
//     }
// }

// const user:User ={
//     login:"first",
//     password:'qwerty',
//     age:23,
// }

// const dbName = '12345'

// function sendUserData(obj:User,db?:string) {
//     console.log(obj.parents!.father?.toLowerCase(),db?.toLowerCase());

// }



// readonly



// const basicTest: number[] = [12,324,456,]
//  basicTest[0] = 10
//  basicTest.push(12)

// const basicTest: readonly [number,...string[]] = [12,'asd','fsdfs']
//  basicTest[0] = 10
//  basicTest.pu

// const userFreeze:Readonly<User> ={
//     login:"first",
//     password:'qwerty',
//     age:23,
// }

// userFreeze.age = 234

// const basicTest: ReadonlyArray<number | string> = [12,'asd','sdfgsd']


// ENUM 

// const TOP = "Top"
// const RIGHT = "Right"
// const BOTTOM = "Bottom"
// const LEFT = "Left"

// enum Directions {
//     TOP = 'top',
//     RIGHT = 'right',
//     BOTTOM = 'bottom',
//     LEFT = 'left'
// }
// enum TimingFunc {
//     EASE = 'ease',
//     LINEAR = 'linear',
//     EASE_IN = 'ease-in ',
// }
// enum TimingFuncN {
//     EASE = 'ease',
//     LINEAR = 2,
//     EASE_IN = `${EASE}-in`,
//     EASE_IN2 = LINEAR * 2,
// }

// function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
//     if (dir === Directions.RIGHT) {
//         console.log(tFunc);
//     }
// }
// frame('id', Directions.RIGHT, TimingFunc.LINEAR)

//   unknown

// try {
//     if (1) {
//         throw new Error("ERROR")
//     }
// } catch (e) {
//     if (e instanceof Error) {
//         console.log(e.message);
//     }else{
//         console.log(e);
//     }

// }




// const dataFromControl = {
//     water: 200,
//     el: 450
// }

// function checkReading(data: typeof dataFromControl):boolean {
//     const dataFromUser = {
//         water: 200,
//         el: 450
//     }
//     if (data.water === dataFromUser.water && data.el === dataFromUser.el) {
//         return true
//     } else {
//         return false
//     }
// }

// const PI = 3.14
// let PIClone: typeof PI


// const fetchData = (url:string, method:"GET" | "POST"):void=>{
//     console.log("Fetched");
    
// }

// const reqOptions ={
//     url:"someurl",
//     method:"GET"
// }
// const reqOptions ={
//     url:"someurl",
//     method:"GET" as "GET"
// }
// const reqOptions ={
//     url:"someurl",
//     method:"GET"
// } as const
// const method = "GET"
// fetchData('qqq','GET')
// fetchData(reqOptions.url,reqOptions.method)
// fetchData(reqOptions.url,<"GET">reqOptions.method)
// fetchData(reqOptions.url,reqOptions.method as "GET")
// fetchData(reqOptions.url,method)


// NEVER

// function printMsg(msg:string[] | number | boolean):void {
//     if (Array.isArray(msg)) {
//         msg.map((el)=>console.log(el))
//     }else if (isNumber(msg)) {
//         console.log(msg);
//     } else {
//         console.log(msg);
//     }
//     console.log(msg);
// }
// printMsg(4)

// const box = document.querySelector('.box');
// box?.addEventListener('click', ()=> {})

// function isNumber(n:string[] | number | boolean):boolean {
//     return typeof n === 'number'
// }

// function isNumber(n:string[] | number | boolean):n is number {
//     return typeof n === 'number'
// }
// function isNumber(n:unknown):n is number {
//     return typeof n === 'number'
// }

// interface Car {
//     engine:string,
//     wheels:number
// }
// interface Ship {
//     engine:string,
//     sail:number
// }

// function repairVehicle(vehicle:Car | Ship) {
//     if (isCar(vehicle)) {
//         console.log(vehicle.wheels);
//     }else{
//         console.log(vehicle.sail);
//     }
    
// }

// function isCar(car:Car | Ship):car is Car {
//     return "wheels" in car
// }




// interface Car {
//     name:"car"
//     engine:string,
//     wheels:number
// }
// interface Ship {
//     name:"ship"
//     engine:string,
//     sail:number
// }
// interface Airplane {
//     name:"airplane"
//     engine:string,
//     wings:number
// }
// interface SuperAirplane {
//     name:"super"
//     engine:string,
//     wings:number
// }
// interface ComplexVehicle{
//     name: "car" | 'ship' | 'airplane' | 'super'
//     engine:string,
//     wings?:number
//     wheels?:number
//     sail?:number
// }
// // type Vehicle = Car | Ship | Airplane | SuperAirplane
// // function check(vehicle:Car | Ship | Airplane | SuperAirplane) {
// // function check(vehicle:Vehicle) {
// function check(vehicle:ComplexVehicle) {
//     switch (vehicle.name) {
//         case 'car':
//             // console.log(vehicle.wheels! * 2);
//             console.log(vehicle.wheels);
//             break;
//         case 'ship':
//             console.log(vehicle.sail);
//             break;
//         case 'airplane':
//             console.log(vehicle.wings);
//             break;
//         case 'super':
//             console.log(vehicle.wings);
//             break;
//         default:
//         // const smth:never = vehicle
//             console.log('ooops');
//             break;
//     }
// }



// interface Square{
//     side:number;
//     area:number;
// }
// interface Rect{
//     a:number;
//     b:number;
//     area:number;
// }
// function calculateArea(side:number): Square
// function calculateArea(a:number,b:number): Rect
// function calculateArea(a:number,b?:number): Square | Rect {
//     if (b) {
//         const rect:Rect = {
//             a,b,
//             area:a*b
//         }
//         return rect
//     }else{
//         const square:Square = {
//             side:a,
//             area:a*a
//         }
//         return square
//     }
// }
// calculateArea(1)
// calculateArea(1,5)




