const API_URL = 'https://open.api.com/v1/data';
const WRONG_URL = 'https://open.api.com/v1/wrong';

function getData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (API_URL === url) {
                resolve('성공');
            } else {
                reject('실패');
            }
        }, 300);
    });
}
// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요

async function callGetData() {
    try {
        const result = await getData(API_URL);
        console.log(result);
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

callGetData();

async function callGetData2() {
    try {
        const result = await getData(WRONG_URL);
        console.log(result);
    } catch (error) {
        console.error('에러 발생:', error);
    }
}
callGetData2();

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.

// getData 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
// then과 catch를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.
