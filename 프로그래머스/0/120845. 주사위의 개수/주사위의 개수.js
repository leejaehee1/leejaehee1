function solution(box, n) {
    var answer = 0;
    console.log(box);
    const [ a, b, c ] = box;
    answer = Math.floor(a / n) * Math.floor(b / n) * Math.floor(c / n)
    return answer;
}