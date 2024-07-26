
//해당 문제를 forEach로 변경하여 풀어주세요
1.
let arr = [10, 20, 30];
arr.forEach((array) => { console.log(array * 10) });
// 해당 로직을 작성하세요  

// 결과 값: [100, 200, 300] 출력해주세요 

2.
let arr2 = [10, 22, 33];
let answer = [];
arr2.forEach((num) => {
    if(num % 5 === 0) {
        answer.push(num);
    };
});
console.log(answer);
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]
