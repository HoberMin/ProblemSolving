function solution(n)
{
    return [...(n+'')].reduce((sum,cur) =>sum+parseInt(cur),0)
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
}