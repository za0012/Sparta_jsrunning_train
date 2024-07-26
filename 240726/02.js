//2번
1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);

2.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1;// obj1을 얕은 복사하는 코드로 작성해주세요
obj2.d = 4;
//추가하는 방법 : 객체명.속성명 = 속성값
/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
console.log(obj1, obj2);
/* 해당값 obj1, obj2의 값을 출력해주세요 */
//얕은 복사를 했기 때문에 obj2에 값을 추가했을 때 obj1에도 영향이 감
  
