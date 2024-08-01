// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();
//yuno2, myName에서 name을 재선언 했기 때문에 우선적으로 저 값을 받는다.

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();
//2, if문으로 true일 때 x = 2라고 선언해주었기에 if문 안쪽의 변수를 우선적으로 받는다.

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();
//화살표 함수의 this는 항상 상위 스코프의 this를 가르키기 때문이다. 반면 일반 함수는 this는 함수가 호출된 위치에서의 객체를 가리킬 수 있기 때문이다.
