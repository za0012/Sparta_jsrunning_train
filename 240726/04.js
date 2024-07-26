
const student = {
    name: "yuno",
    age: "30",
    skill: ["javascript"],
    address: {
      city: "seoul"
    }
  };
  
  // 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
  const shallowCopy = student;
  
  // 깊은 복사를 수행하여 deepCopy를 만들어주세요.
  const deepCopy = JSON.parse(JSON.stringify(student));
  
  // 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
  console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?", ); 
  console.log(shallowCopy === student); 

  // 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", );
  console.log(shallowCopy === student); 

  // 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
  console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", ); 
  console.log(deepCopy === student); 

  // 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", );
    console.log(deepCopy === student); 
  //주소 비교를 잘 모르겠습니다...ㅜㅜ
   
  2.
  // 동일한 student로 진행합니다. 
  shallowCopy['skill'] = ('js');
  // 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
  
  deepCopy['city'] = ('busan');
  // 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
   
  // 결과 확인 
  console.log("5. 원본 객체(student):",student); 
  console.log("6. 얕은 복사된 객체(shallowCopy):",shallowCopy); 
  console.log("7. 깊은 복사된 객체(deepCopy):", deepCopy);
  

/*        1. 원본 객체(student)와 얕은 복사 객체가 같을까요?
          true
          2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?
          true
          3. 원본 객체(student)와 깊은 복사 객체가 같을까요?
          false
          4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?
          false
          5. 원본 객체(student): { name: 'yuno', age: '30', skill: 'js', address: { city: 'seoul' } }
          6. 얕은 복사된 객체(shallowCopy): { name: 'yuno', age: '30', skill: 'js', address: { city: 'seoul' } }
          7. 깊은 복사된 객체(deepCopy): {
            name: 'yuno',
            age: '30',
            skill: [ 'javascript' ],
            address: { city: 'seoul' },
            city: 'busan'
          }
  */