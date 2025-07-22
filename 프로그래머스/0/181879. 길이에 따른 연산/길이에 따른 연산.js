function solution(num_list) {
    var answer = 0;
    
    if (num_list.length > 10) {
        num_list.map((num) => answer += num);
    } else {
        answer = 1;
        num_list.map((num) => answer *= num);
    }
    
    return answer;
}