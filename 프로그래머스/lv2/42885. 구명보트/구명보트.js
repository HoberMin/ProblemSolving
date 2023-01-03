function solution(people, limit) {
    let answer = 0;
    const sortedPeople = people.sort((a,b)=>a-b);
    let lower = 0;
    let higher = people.length - 1;
    while ( lower <= higher ) {
        if ( sortedPeople[lower] + sortedPeople[higher] <= limit ) {
            lower++; // 최저몸무게를 가진 사람은 동행을 했으니 그 다음으로 넘김
        }
        higher--; // 최대무게를 가진사람과 동행 할 사람이 없으니 보트에 탑승
        answer += 1; //보트 수 추가
     }
    return answer;
}