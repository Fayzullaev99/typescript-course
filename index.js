// DOM
// const box = document.querySelector('.box') as HTMLElement;
// const input = document.querySelector('input') as HTMLInputElement;
// const text = document.querySelector('.text') as HTMLParagraphElement;
// const link = document.querySelector('.link') as HTMLLinkElement
// const links = document.querySelectorAll('a')
// box.textContent = "BYE"
// input.value = '44'
// link.href = 'test.com'
// // text.innerHTML = '000'
// link.addEventListener('click', (e:MouseEvent)=>{
//     e.preventDefault()
//     text.innerHTML = '000'
// })
// GENERICS
// function processsingData<T>(data:T):T {
//     return data
// }
// let res1 = processsingData(1)
// let res2 = processsingData('1')
// let res3 = processsingData<number>(10)
// interface PrintUK{
//     design:string
// }
// interface PrintUZ{
//     design:string
// }
// interface Print<T>{
//     design:T
// }
// const somePrint:Print<string>={
//     design:'10'
// }
// function processsingData<T, S>(data: T, option: S): string {
//     switch (typeof data) {
//         case 'string':
//             return `${data}, speed: ${option}`
//             break;
//         case 'number':
//             return `${data.toFixed()}, speed: ${option}`
//             break;
//         default:
//             return 'Not valid'
//     }
// }
// let res1 = processsingData(1, 'fast')
// let res2 = processsingData('1', 'slow')
// let res3 = processsingData<number, string>(10, 'slow')
// type Smth<T> = T
// type User<T> = {
//     login:T,
//     age:number
// }
// const num:Smth<number> = 5
// const user:User<string> = {
// const user:User<'str'> = {
//     login:"str",
//     age:23
// }
// interface ParentofUser {mother:string,father:string}
// interface User<ParentData>{
//     login:string
//     age:number
//     parents:ParentData
// }
// const user:User<{mother:string,father:string}> = {
//     login:"str",
//     age:23,
//     parents:{
//         father:"Dad",
//         mother:"Mum"
//     }
// }
// const user2:User<string> = {
//     login:"str",
//     age:23,
//     parents:''
// }
// type OrNull<T> = T | null
// type OneOrMany<T> = T | T[]
// const data:OneOrMany<number[]> = [5]
// generics in class
// class User<T,S>{
//     name:T
//     age:S
//     constructor(name:T,age:S){
//         this.name = name
//         this.age = age
//     }
//     sayMyFullName<T>(surname:T):string {
//         if (typeof surname !== 'string') {
//             return `I have only name: ${this.name}`
//         }else{
//             return `${this.name} ${surname}`
//         }
//     }
// }
// const ali = new User("Ali",23)
// console.log(ali.sayMyFullName("Tursunov"));
// const sarvar = new User<string,number >("Sarvar",24)
// console.log(sarvar);
// class AdminUser extends User<string, number>{
//     rules:T
// }
// const arr:Array<number> = [12,3,43,45]
// const ar2:number[] = [12,3,43,45]
// const arrRO:ReadonlyArray<string> = ['sdfsd']
// interface IState {
//     data:{
//         name:string
//     }
//     tag?:string
// }
// function action(state:Readonly<IState>) {
//     state.data.name = 'abc'
// }
// const state:Partial<IState> ={
//     data:{
//         name:"Ali"
//     }
// }
// const strictState:Required<IState> ={
//     data:{
//         name:"Ali"
//     },
//     tag:"sdf"
// }
// KEYOF
// interface ICompany {
//     name:string,
//     debts:number
// }
// type CompanyKeys = keyof ICompany
// const keys:CompanyKeys = 'name'
// function printDebts<T,K extends keyof T, S extends keyof T>(company:T,name:K,debts:S) {
//     console.log(`Company ${company[name]}, debts: ${company[debts]}`);
// }
// const hh:ICompany = {
//     name:"HH",
//     debts:50000
// }
// printDebts(hh,'name','debts')
// interface ICompany {
//     name:string,
//     debts:number
//     department:Department
//     management:{
//         owner:string
//     }
// }
// interface Department {
//     [key:string]:string
// }
// type CompanyKeys = keyof ICompany
// // const debts = "debts"
// // let debts:"debts" = "debts"
// // let debts = "debts" as 'debts'
// // type CompanyTypes =  ICompany[typeof debts]
// type CompanyTypes =  ICompany['debts']
// type CompanyOwnerType =  ICompany['management']['owner']
// type CompanyDepartmentType =  ICompany['department']
// type Test = ICompany[keyof ICompany]
// const hh:ICompany = {
//     name:"HH",
//     debts:50000,
//     department:{
//         sales:"sales",
//         developer:"dev"
//     },
//     management:{
//         owner:"Sanjar"
//     }
// }
// const str:string = 'Hello'
// type Example = 'string' extends 'Hello' ? string : number
// type FromUser<T extends string | number> = T extends string ? IDataUser : IDataBase
// interface User<T extends 'created' | Date>{
//     created:T extends 'created' ? 'created' : Date
// }
// const user:User<'created'> = {
//     created:'created'
// }
// interface IDataUser{
//     weight:string
// }
// interface IDataBase{
//     calories:number
// }
// // function calcCalories(numOrStr:string): IDataUser
// // function calcCalories(numOrStr:number): IDataBase
// function calcCalories<T extends string | number>(numOrStr:T):T extends string ? IDataUser : IDataBase {
//     if (typeof numOrStr === 'string') {
//         const obj:IDataUser = {
//             weight:numOrStr
//         }
//         return obj as FromUser<T>
//     } else {
//         const obj:IDataBase = {
//             calories:numOrStr
//         }
//         return obj as FromUser<T>
//     }
// }
// type Currencies = {
//     usa:"usd"
//     china:"cny"
//     ukraine?:"uah"
//     readonly kz:"tenge"
// }
// type CreateCustomCurr<T> = {
//    -readonly [P in keyof T]-?:string
// }
// // type CreateCustomCurr<T> = {
// //    +readonly [P in keyof T]+?:string
// // }
// // type CreateCustomCurr<T> = {
// //    readonly [P in keyof T]?:string
// // }
// // type CreateCustomCurr<T> = {
// //    readonly [P in keyof T]:string
// // }
// // type CreateCustomCurr<T> = {
// //     [P in keyof T]:string
// // }
// type ROnlyCurr = Readonly<Currencies>
// type CustomCurrencies = CreateCustomCurr<Currencies>
// // type CustomCurrencies = {
// //     usa:string
// //     china:string
// //     ukraine:string
// //     kz:string
// // }
// type Keys = 'name' | 'age' | 'role'
// type User = {
//     [K in Keys]:string
// }
// const ali:User = {
//     name:"Ali",
//     age:"23",
//     role:"admin"
// }
// type MyAnimation = 'fade' | 'swipe'
// type MyDirection = 'in' | 'out'
// // type MyNewAnimation = `${MyAnimation}${MyDirection}`
// type MyNewAnimation = `${MyAnimation}${Capitalize<MyDirection>}`
//  UTILITY TYPES
// function calc(a:number,b:number):number {
//     return a * b
// }
// type CalcReType = ReturnType<typeof calc>
// let anotherRes: CalcReType = 5
// // type CalcReP = Parameters<typeof calc>
// type CalcReP = Parameters<typeof calc>[0]
// type PT1 = Parameters<(a:number) => number>
// type PT2 = Parameters<<T>(arg:T) => T>
// class Exapmle{
//     constructor(a:number){}
// }
// type T0 = ConstructorParameters<typeof Exapmle>
var jsonTest = '{"name":"Test","data":"Dsa"}';
var objFromJson = JSON.parse(jsonTest);
var toDoList = [];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then((json:ToDo) => {
//         if ('id' in json) {
//             toDoList.push(json)
//         }
//         console.log(toDoList);
//     })
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ('id' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    console.log(toDoList);
});
