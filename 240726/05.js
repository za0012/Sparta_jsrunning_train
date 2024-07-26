1.
//배열 API map 활용
var arr = [10, 20, 30]
const newArr = arr.map((arr) => { return arr * 10 });
console.log(newArr)
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요


2.
//배열 API filter 활용
var arr = [10, 22, 33]
function fiveMultiplication(arr) {
    return arr % 5 === 0;
}
const apiFilter = arr.filter(fiveMultiplication);
console.log(apiFilter)
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

3.
const numbers = [5, 10, 15, 20, 25];
function moreFive(numbers) {
    return numbers > 15;
}
const apiFilter2 = numbers.filter(moreFive);
console.log(apiFilter2)
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]


4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
const apiFilter3 = arr.filter( arr => arr.length >= 4);
console.log(apiFilter3);
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요

Array.map

5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
const apiFilter4 = arr.filter( arr => arr.length%2 === 1);
console.log(apiFilter4);
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요

6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
arr.sort();
console.log(arr);
// 오름차순으로 정렬하여 출력해주세요

7.
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 }
];
const newStudent = student.map( student => student.age);
newStudent.sort();
console.log(newStudent);
// age를 이용하여 내림차순으로 정렬하고 출력해주세요

8.
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" }
];
const nnewStudent = student.map( student => student.name === null)
console.log(nnewStudent);
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
const apiFilter6 = arr.filter( arr => arr.length > 5);
console.log(apiFilter6);
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.

10.
var arr = ["banana", "kiwi", "mango"];
arr.splice(2, 0, 'watermelon');
console.log(arr);
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요

11.
var arr = [1, 5, -3, 10, 0, 8];
const apiFilter8 = arr.filter( arr => arr < 0);
console.log(apiFilter8);
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

12.
var arr = [1, 5, -3, 10, 0, 8];
const apiFilter9 = arr.filter( arr => arr < 0);
console.log()
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
