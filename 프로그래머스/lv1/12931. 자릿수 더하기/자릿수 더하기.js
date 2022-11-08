function solution(n)
{
    const Narray = (n+"").split("")
    const answer = Narray.reduce((sum,cur) =>parseInt(sum)+parseInt(cur),0)
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return answer;
}