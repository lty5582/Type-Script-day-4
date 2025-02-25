/*
챕터 4-1 DOM
*/

// JS 에서 제공되는 모든 DOM API 를 그대로 사용
// 타입 정의 파일 제공 `lid.dom.d.ts`

//HTMLElement div, a, p, head,

const link1 = document.getElementById('myLink') as HTMLAnchorElement
const link2 = document.querySelector('#myLink') as HTMLAnchorElement

// if(link1 instanceof HTMLAnchorElement) {
//     link1.href = "http://www.google.ca"
// }
link1.href = "http://www.google.ca"

// if(link2) {
//     link2.href = ''
// }

link2.href = ''

const img = document.createElement('img')
img.src = ""
 
const anchor = document.createElement("a");

anchor.href = ""

const div = document.querySelector('div')

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.click()
})

//event
//<div id=myDiv></div>

const myDiv = document.getElementById("myDiv")

myDiv?.addEventListener('click',(e: Event)=>{

    //Mouse Event
    if(e instanceof MouseEvent) {
        //로직 구현
    const x = e.clientX;
    const y = e.clientY;
    }

    //Keyboard Event
    if(e instanceof KeyboardEvent) {
        console.log(e.code)
    }


})