function solution(my_string) {
    var answer = [];
    let l = my_string.length;
    for (let i = 0; i < l; i++) {
        answer[i] = my_string.substring(l - i - 1, l);
    }
    answer.sort();
    return answer;
}