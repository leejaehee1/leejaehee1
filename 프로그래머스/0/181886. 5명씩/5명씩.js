function solution(names) {
    var answer = [];
    // 0, 4, 9, 14, 19 ...
    // until names.lenght less than
    
    for (let i = 0; i < names.length; i++) {
        if (i % 5 === 0) {
            answer.push(names[i]);
        }
    }
    
    return answer;
}