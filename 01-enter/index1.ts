// const str = 'text'
// console.log(str);
// const userName:string = 'Sanjar'
// userName = 5
// userName.charAt(2)
// userName = 'xohlagan

// const birthday:boolean = true
// let age:number = 23
// // // let age:number;
// // // age = 23
// const userName:string = "Sanjar"
// if (birthday) {
//     console.log(`mening ismim ${userName} men ${age}-yoshdaman`);
// }

// function logMsg(kun:boolean, yosh:number, ism:string):void {
//     if (kun) {
//         console.log(`mening ismim ${ism} men ${yosh}-yoshdaman`);
//     }
// }
// function logMsg(kun:boolean, yosh:number, ism:string):string {
//     if (kun) {
//         return `mening ismim ${ism} men ${yosh}-yoshdaman`
//     }else{
//         return 'Error'
//     }
// }
// const logMsg = (kun:boolean, yosh:number, ism:string):string => {
//     if (kun) {
//         return `mening ismim ${ism} men ${yosh}-yoshdaman`
//     }else{
//         return 'Error'
//     }
// }
// logMsg(birthday, age, userName)

// const user = {
//     birthday: true,
//     age: 23,
//     userName:"Sanjar"
// }
// const userJSON = JSON.stringify(user)
// const userStr = '{"birthday":true,"age":23,"userName":"Sanjar"}'
// const userObj:{
//     birthday:boolean,
//     age:number,
//     userName:string
// } = JSON.parse(userStr)

// const logMsg = (kun:boolean, yosh:number, ism:string):string => {
//     if (kun) {
//         return `mening ismim ${ism} men ${yosh}-yoshdaman`
//     }else{
//         return 'Error'
//     }
// }
// logMsg(birthday, age, userName)

// const   birthday:boolean = true, 
//         age:number = 23, 
//         userName:string = 'Sanjar'

// const errorMsg = (msg:string):never=>{
//      throw new Error(msg)
    //  while (true) {
        
    //  }
// }

// const logMsg = (kun:boolean, yosh:number, ism:string):string => {
//     if (kun) {
//         return `mening ismim ${ism} men ${yosh}-yoshdaman`
//     }else{
//         return errorMsg('Error')
//     }
// }
// logMsg(birthday, age, userName)


// amaliyot
// const fetchCurrency = (res:number):string=>{
//     console.log(`dollar narxi: ${res.toFixed(3)} summa`);
//     return `${res.toFixed(3)} summa`
    
// }
// const transferSUMtoUSD = (avialable:boolean,amount:number,cost:number):void=>{
//     if (avialable) {
//         let res =  amount * cost
//         fetchCurrency(res);
//     }else{
//         console.log("Not Working Now");
        
//     }
// }
// transferSUMtoUSD(true,1,11.390)





// // // // // // // // // // // // // // // // // // // // // // 



// let test1 = null
// let test2:any = null
// let test3:string = null
// let test4:number = null

// let test1 = undefined
// let test2:any = undefined
// let test3:string = undefined
// let test4:number = undefined

// function test() {
//     if (Math.random() > 0.5) {
//         return null
//     }else{
//         return '   test   '
//     }
// }
// const data = test()
// const trimData = data ? data.trim() : null


// symbol bigInt

// let id:symbol = Symbol("id")

// const data = {
//     [id]:1
// }
// console.log(data);

// let test1:bigint = 1n
// let test2:bigint = 3n
// console.log(test1 + test2);

// const user = {
//     birthday: true,
//     age: 23,
//     userName:"Sanjar"
// }
// const logMsg = (data:{birthday:boolean, age:number, userName:string}):string => {
//     if (data.birthday) {
//         return `mening ismim ${data.userName} men ${data.age}-yoshdaman`
//     }else{
//         return 'Error'
//     }
// }
// logMsg(user)

// const logMsg = ({birthday, age, userName}:{birthday:boolean, age:number, userName:string}):string => {
//     if (birthday) {
//         return `mening ismim ${userName} men ${age}-yoshdaman`
//     }else{
//         return 'Error'
//     }
// }
// logMsg(user)

// const strArr:string[] = ["a",'b','c']
// const numArr:number[] = [1,2,3]
// const boolArr:boolean[] = [true,false]
// const strStrArr:string[][] = [['a','b','c'],['a','b','c']]
// const numNumArr:number[][] = [[1,2,3],[1,2,3]]

// const check = strArr.filter((el:string)=>el !== 'a').map((el:string):string=>`${el} = ok`)
// console.log(check);

// TUPLES

// const user = {
//     birthday: true,
//     age: 23,
//     userName:"Sanjar"
// }
// const userArr = [true,23,"Sanjar"]
// userArr[0] = 'rost'
// console.log(userArr);

// const userTuples:[boolean,number,string] = [true,23,"Sanjar"]
// userTuples[0] = 'rost'
// userTuples.push('rost')
// console.log(userTuples);

// const userTuples:[boolean,number,...string[]] = [true,23,"Sanjar","Sarvar","Ali"]
// const userTuples:[...boolean,number,...string[]] = [true,23,"Sanjar","Sarvar","Ali"]


// UNION

// const msg:string | number = 5
// const msgs:string[] | number[] = [5]

// function test(msg:string | number):void {
//     // console.log(msg.toLowerCase());
//     console.log(msg);
// }
// test('test')

// NARROWING

// function test(msg:string | number | boolean):void {
//     if (typeof msg === 'string') {
//         console.log(msg.toLowerCase());
//     } else if (typeof msg === 'number') {
//         console.log(msg.toString());
//     }
//     console.log(msg);
// }
// test('test')

// function test(msg:string[] | number | boolean):void {
//     if (Array.isArray(msg)) {
//         console.log(msg.toString());
//     } else if (typeof msg === 'number') {
//         console.log(msg.toString());
//     }
//     console.log(msg);
// }
// test(['test','test','test'])
// test(2)
// function test(user:{email:string} | {phone:number}):void {
//     if ('email' in user) {
//         console.log(user.email);
//     } else {
//         console.log(user.phone);
//     }
// }
// test({phone:345345})
// function test(x:string | Date):void {
//     if (x instanceof Date) {
//         console.log(x.getDate());
//     } else {
//         console.log(x.trim());
//     }
// }
// test('2023.03.23')

// LITERAL TYPES

// let msg:"Hello" = 'Hello'
// let port3000:number = 3000
// let port3001:number = 3001
// function serve(protocol:'http' | 'https', port:3000 | 3001):'Server started' {
//     if (port === port3000 || port === port3001) {
//         console.log(`Server started on ${protocol}://server:${port}`);
//     } else {
//         console.error("server error");
//     }
    
//     return 'Server started'
// }
// serve('https',3001)

// function anime(
//     animeId:string | number, 
//     animeName:string, 
//     animeTime:string | number, 
//     animeFunc:"ease" | "ease-in" | "ease" = "ease",
//     animeCount:"infinite" | number
// ) {
//     const el = document.querySelector(`3${id}`) as HTMLElement;
//     el.style.animation = ``
// }
// anime('id','test',3000,'ease-in',3) 

// TYPE ALIASES

// type animeFunc = "ease" | "ease-in" | "ease"
// type animeId = string | number


// const serverConfig:{protocol:'http' | 'https', port:3000 | 3001} = {
//     protocol:'https', 
//     port:3001
// }

// const serve:(protocol:'http' | 'https', port:3000 | 3001) => string = (
//     protocol:'http' | 'https', port:3000 | 3001):'Server started'=> {

//     console.log(`Server started on ${protocol}://server:${port}`);
    
//     return 'Server started'
// }
// serve(serverConfig.protocol,serverConfig.port)