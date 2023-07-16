function solution(strings, n) {
    strings.sort(function(a, b) {
  if (a[n] !== b[n]) {
    return a[n].localeCompare(b[n]);
  } else {
    return a.localeCompare(b);
  }
})
    return strings
}