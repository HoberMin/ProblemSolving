function solution(strings, n) {
    strings.sort((a,b) => a[n] !== b[n] ? a[n].localeCompare(b[n]) : a.localeCompare(b))
    return strings
}