/*
챕터 4-5 상수 단언 (Const Assertion)
*/

//객체
// const book = {
//     title: "TypeScript Guide",
//     author: "Lim Tae young"
// } as const

// book.title = "another title"; //error

// //배열
// const nums =[1,2,3,4,5] as const;
// nums.push(6); //error

const config = {
    server: "http://localhost",
    port: 8080,
    version: 2
} as const;
config.server = "https://google.com"; //error

// 주문 시스템의 상태 정보
export const statusCodeMap = {
    101: "ordered",
    102: "pending",
    103: "completed"
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handelStatus(statusCode: statusCodeKeys){
    const message = statusCodeMap[statusCode];

    //UI 업데이트 또는 로직 처리
}
