/*
챕터 4-2 타입 Narrowing (타입 좁히기)
*/

// typeof
type Id = number | string;

let id: Id = 1;

if(typeof id === 'string') {
    //문자열 ID 경우 로직 처리
}

function getId(id: Id) {
    if(typeof id === 'number'){
        return id;
    }

    return Number(id);
}

getId(1);
getId("1");


// 동일성 좁히기 (equality narrowing)

type Option = "on" | "off";

function power(option: Option) {
    if(option === "off") {
        console.log("전원 끄기");
    } else {
        console.log("전원 켜기");
    }
}

power("on");
power("off");


// in키워드 사용

type iOS = { iMessage: ()=> void;}
type android = { message: ()=> void;}

function senMassage(os:iOS | android) {
    if("iMessage" in os) {
        os.iMessage(); //iOS로 좁혀진다
    }else{
        os.message(); //android로 케이스
    }
}

senMassage({iMessage: () => {console.log("sending iMessage")}}); //iOS 타입
senMassage({message: () => {console.log("sending Message")}}); //android 타입

// instanceof narrowing

class ApiReponse {
    data: any;
}
class ErrorReponse {
    message: string;
}

async function handleApiReponse(response: any){

    if(response instanceof ApiReponse) {
        //데이터 처리
    } else if(response instanceof ErrorReponse) {
        //에러 처리
    }

}

const apiReponse = new ApiReponse();
const errorReponse = new ErrorReponse();

handleApiReponse(apiReponse);
handleApiReponse(errorReponse);

//타입 가드 (type predicates)

function isErrorReponse(response: ApiReponse | ErrorReponse): response is ErrorReponse {
    return (response as ErrorReponse).message !== undefined;
}

const response = {message:"error"};

if(isErrorReponse(response)){
    //에러 케이스
    console.log(response.message);
    
}

//식별 가능한 유니언 타입 (Discriminated Unions)

type SuccessReponse = {
    type: "success",
    data: any
};

type ErrorReponseType = {
    type: "error",
    message: string
}

type ApiResponseType = SuccessReponse | ErrorReponseType;

function handleReponse(response: ApiResponseType){
    if(response.type === "success")  {
        console.log('data:', response.data);
    } else {
        console.log(response.message)
    }
}