function solution(s){
    if (s.length % 2 !== 0) return 0;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++){
        stack.push(s[i]);
        if (stack.slice(-2, -1)[0] === s[i]){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length ? 0 : 1
}