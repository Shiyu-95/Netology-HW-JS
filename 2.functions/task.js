function getArrayParams(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let min = arr[0];
    let max = arr[0];
    let avg;
    let counter = 0;

    for (let i of arr) {
        if (i < min) {
            min = i;
        } else if (i > max) {
            max = i;
        }
        counter += i;
    }
    avg = +(counter / arr.length).toFixed(2);
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((acc, current) => acc + current);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            sumEvenElement += i;
        } else {
            sumOddElement += i;
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            sumEvenElement += i;
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = func(...arrOfArr[0]);
    for (let i of arrOfArr) {
        const result = func(...i);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
