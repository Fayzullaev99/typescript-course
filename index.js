// DOM
var box = document.querySelector('.box');
var input = document.querySelector('input');
var text = document.querySelector('.text');
var link = document.querySelector('.link');
var links = document.querySelectorAll('a');
box.textContent = "BYE";
input.value = '44';
link.href = 'test.com';
// text.innerHTML = '000'
link.addEventListener('click', function (e) {
    e.preventDefault();
    text.innerHTML = '000';
});
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
function processsingData(data, option) {
    switch (typeof data) {
        case 'string':
            return "".concat(data, ", speed: ").concat(option);
            break;
        case 'number':
            return "".concat(data.toFixed(), ", speed: ").concat(option);
            break;
        default:
            return 'Not valid';
    }
}
var res1 = processsingData(1, 'fast');
var res2 = processsingData('1', 'slow');
var res3 = processsingData(10, 'slow');
