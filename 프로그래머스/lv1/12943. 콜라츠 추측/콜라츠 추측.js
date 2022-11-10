function solution(num) {
    let cnt = 0;
    let number = num
    
    while(number !== 1 && cnt<500){
        number%2===0 ? number=number/2 : number=number*3 +1
        cnt +=1
    }
    return cnt===500 ? -1 : cnt
}