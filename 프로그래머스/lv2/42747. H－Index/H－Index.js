function solution(citations) {
    citations.sort((a,b)=>b-a)
    let count =0
    for(i=1; i<=citations.length; i++){
        if(citations[i-1] >= i && citations[i-1] > citations.length-i){
            count += 1
            continue;
        }
        break;
    }
    return count
    
}
/*
6,5,4,1,0 
i = 1 , 인용횟수 6
i = 2 , 인용횟수 5
i = 3 , 인용횟수 4
i = 4 , 인용횟수 1 // break;

*/
