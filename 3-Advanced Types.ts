/*
챕터 4-3 고급 타입 (Advanced Types)
*/ 

//교차 타입 (Intersection Types) 

type A ={ name : string}
type B ={ age : number}

type Person = A & B;

const person : Person = {
    name: "John",
    age: 33
}

type UserBase = { id : number}
type WithName = { name : string}
type WithEmail = { email : string}
type WithAge = { age : number}

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
    id: 100,
    name: "Paul"
}

const user: User = {
    id: 123,
    name: "Lee",
    age: 30,
    email:"test@email.com"
}

//조건부 타입 (Conditional Types)

//type ConditionalType = T extends U ? X : Y;

type IsNumber<T> = T extends number ? "yes" : "no";

type Result1 = IsNumber<number> //"Yes"
type Result2 = IsNumber<string> //" No"



type JsonOrText<T extends "Json" | "text"> = T extends "Json" ? object :string;

type JsonResponse = JsonOrText<"Json">; //object
type TextResponse = JsonOrText<"text">; //string

// keyof  타입 연산자
type MyObject = {
    a: number;
    b: string;
    c: boolean;
}

//MyObject 키를 union 타입으로 추출
type Keys = keyof MyObject; // "a" | "b" | "c"

function getProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const obj = { x: 10, y: 20, z: 15};
const value = getProp(obj, "y"); //20 반환

//mapped type (매핑 타입)

// type Mapped<T> = {
//     [P in keyof T]: T[P]
// }

type OptionalType<T> ={
    [P in keyof T]?: T[P]
}

type ReadonlyType<T> ={
   readonly [P in keyof T]: T[P]
}

type UserType ={
    id:number;
    name:string;
    age:number;
    email:string;
}
//UserType 의 모든 속성을 선택적으로 변환
type OptionalUserType = OptionalType<UserType>;

//UserType 의 모든 속성을 읽기 전용으로 변환
type ReadonlyUserType = ReadonlyType<UserType>;