// Exception  세가지 단계로 나뉜다
// try -> catch -> finally

// 1. try: 에러 발생할 수 있는 부분 시도
// 2. catch: 에러 발생시 잡을 수 있다.
// 3. finally: 에러 발생 여부에 관계 없이 이용

function readFile(fileName: string): string {
    if(fileName === "not exist!") {
        throw new Error(`file not exist! ${fileName}`);
    }

    return 'file contents';
}

function closeFile(fileName: string) {
    // 
}

const fileName = "not exist!";
try {
    console.log(readFile(fileName));
} catch(error) {
    console.log(`catched ${error}`);
} finally {
    closeFile(fileName);
    console.log(`finally!`);
}
