function solution(lines) {
    var answer = 0;
    const [a, b, c] = lines;
    
    let set = new Set(lines.flat());
        
    let arr = new Array(201).fill(0);
    
    for (let i = a[0]; i < a[1]; i++) {
        arr[i + 100] += 1;
    }
        
    for (let j = b[0]; j < b[1]; j++) {
        arr[j + 100] += 1;

    }
    
    for (let k = c[0]; k < c[1]; k++) {
        arr[k + 100] += 1;
    }
    
    for (let l = 0; l < 201; l++) {
        if (arr[l] > 1) {
            answer += 1;
        }
    }
        
    return answer;
}
// 0123456789
// 11111
// 000111111
// 0111111111