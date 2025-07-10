function solution(my_string) {
    var answer = [];
    // console.log(Number(my_string));
    for (let i = 0; i < my_string.length; i++) {
        
        if ("0" == my_string[i] || "1" == my_string[i] || "2" == my_string[i] || "3" == my_string[i] || "4" == my_string[i] || "5" == my_string[i] || "6" == my_string[i] || "7" == my_string[i] || "8" == my_string[i] || "9" == my_string[i]) {
            answer.push(Number(my_string[i]));
        }
    }
        
    return answer.sort(function(a, b)  {
      return a - b;
    });
}