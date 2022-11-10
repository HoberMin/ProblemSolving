function solution(a, b) {
    let sum =0;
    if(a<b){
        for(i=0; i<=Math.abs(a-b); i++){
            sum += a+i
        }
        return sum
    }
    if(a>b){
        for(i=0; i<=Math.abs(a-b); i++){
            sum += b+i
        }
        return sum
    }
    return a
}