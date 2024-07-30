function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 6000, 6초 / 하나씩 실행해서.....
}

async function runTasksParallel() {
    console.time('Parallel');
    try {
        // 병렬로 promise들을 한 번에 처리하는 코드
        const results = await Promise.all([task1(), task2(), task3()]);
        //awit는 astnc에서 사용할 수 있는데, 가만히 보니 병렬로 처리해야해서 이렇게 햇다
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error('Error:', error);
    }
    console.timeEnd('Parallel');
    // 예상되는 대략적인 시간과 그 이유 3000 3초 / 요청을 한 번에 해서 가장 시간이 긴 함수만 기다렸다가 한 번에 들어와서
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());