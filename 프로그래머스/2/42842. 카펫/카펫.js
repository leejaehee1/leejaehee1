function solution(brown, yellow) {
    var answer = [];
    // 두수의 곱
    // b b b b b b b b
    // b y y y y y y b
    // b y y y y y y b
    // b y y y y y y b
    // b y y y y y y b
    // b b b b b b b b
    
    // bbbbbbbbbbbbbb
    // byyyyyyyyyyyyb
    // byyyyyyyyyyyyb
    // bbbbbbbbbbbbbb
    // console.log(`yellow : ${yellow}, brown : ${brown}`);
    
    // 공약수 쌍을 구하고, +1 짜리 테두리를 구했을때, brown 갯수가 맞으면, 가로를 더 크게 해서 return
    // 공약수 구하기
    // 1 부터 y/2 + 1 까지 for 돌리는데 y / i 해서 정수가 나오는 것의 i 값만 뽑는다. cd 배열에 담는다.
    for (let i = 1; i <= yellow; i++) {
        // console.log(`row ===> i : ${i}, yellow : ${yellow}`);
        if (yellow % i === 0) {
            // console.log(`yellow % i ===> ${yellow % i}`);
            // +1 테두리 갯수 구하기
            // cd 배열에서 하나씩 꺼내와서 for 돌리고 cd 배열의 cd[i], y/cd[i] 를 계산한다. 계산식은 cd[i] * 2 + y/cd[i] * 2 + 4
            const border = i * 2 + (yellow / i) * 2 + 4;
            // console.log(`border % i ===> ${border}`);
            
            // brown 갯수 비교하기
            // (cd[i] * 2 + y/cd[i] * 2 + 4) === brown
            if (border === brown) {
                // console.log(`border === brown % i ===> ${border === brown}`);
                // 가로를 더 큰 것으로 return 하기
                // [y/cd[i], cd[i]]
                // console.log(`yellow / i, i ===> ${yellow / i}, ${i}`);
                answer = [i + 2, (yellow / i) + 2];
            }
        }
    }
    // console.log(answer);
    return answer;
}