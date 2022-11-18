function solution(s) {
    let ZeroCount=0;
    let answer = s
    let i = 0;
    while(answer !== "1"){
        ZeroCount += answer.split("1").join("").length
        answer = answer.split("0").join("").length.toString(2) //2진수
        i+=1
    }
        return [i,ZeroCount]
}
