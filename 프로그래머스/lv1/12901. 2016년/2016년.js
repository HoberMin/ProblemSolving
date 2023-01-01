function solution(a, b) {
    const sentense = `2016/0${a}/${b}`
    const day = new Date(sentense).getDay()
    const answer = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return answer[day]
}