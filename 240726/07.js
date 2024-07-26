1.
const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] },

];

const score = students.map((student) => {
    return {
        name: student.name,
        average: (student.scores[0] + student.scores[1]) / 2,
    }
}).filter(score => score.average > 80).map((student => student.name));

console.log(score);
// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

2.
const numbers = [5, 10, 15, 20, 25];
const under30 = numbers.map((numbers) => { return numbers * 2 }).filter(under30 => under30 <= 30);
console.log(under30);
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
