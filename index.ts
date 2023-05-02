
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
function processsingData<T,S>(data:T,option:S):string {
    switch (typeof data) {
        case 'string':
            return `${data}, speed: ${option}`
            break;
        case 'number':
            return `${data.toFixed()}, speed: ${option}`
            break;
    
        default:
            return 'Not valid'
    }
}

let res1 = processsingData(1,'fast')
let res2 = processsingData('1','slow')
let res3 = processsingData<number,string>(10,'slow')
