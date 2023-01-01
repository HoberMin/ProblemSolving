function solution(brown, yellow) {
    for(let i = 1; i<=yellow; i++){
        if(yellow%i!==0) continue;
        if((i+2)*(yellow/i+2) === brown+yellow) return [yellow/i+2 , i+2]
    }
    
}
