//1번

let uninitialized;
console.log(uninitialized); // undifined 
//값을 할당하지 않았으므로 undifined가 나온다.


const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//typeerror가 났는데, 이는 재선언을 해서 나온 것이기 때문에 const다


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19
//배열의 3, 즉 4번째에 있는 것을 호출

let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false
//앞에 mySchedule에 값이 없으므로 자동으로 false, 부정부정은 null에 대해 자동으로 false를 반환한다.

//2번
const junhyun = {
    name: "유현지",
    age: 21,
    mbti: "ISTP",
};

console.log(junhyun.name);
console.log(junhyun.age);
console.log(junhyun.mbti);
//위는 객체이고 객체의 속성을 호출하기 위해선 객체명.KEY이렇게 호출하면 된다.

//3번
function sniffling(num) {
    if (num % 2 === 0) {
        console.log("짝수")
    }
    else {
        console.log("홀수")
    }
}

console.log(sniffling(10)); // 결과값 "짝수";
console.log(sniffling(7)); // 결과값 "홀수";
//짝수 홀수인지 알아만 보면 되기 때문에 만약 수를 2를 나눴을 때 나머지가 0이면 짝수이고 아니면 홀수이기 때문에 이런 함수가 나왔다.

//4번
function calculator(num1, sign, num2) {
    switch (sign) {
        case "+":
            console.log(num1 + num2)
            break;

        case "-":
            console.log(num1 - num2)
            break;

        case "*":
            console.log(num1 * num2)
            break;

        case "/":
            console.log(num1 / num2)
            break;
    }

}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
//부호를 받아서 사칙연산 중 어디인지 확인하고 case문으로 계산하는 과정을 가졌다.

//5번
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function scoreCorrection(scores) {
    for(i=0; i<scores.length; i++){
        scores[i]+=3;
    }
}

scoreCorrection(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
//배열에서 점수만 3씩 올라면 되므로, for문으로 반복문 실행
//