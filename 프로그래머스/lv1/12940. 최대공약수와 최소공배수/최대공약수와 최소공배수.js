function solution(n, m) {
    const GCD = gcd(n,m)
    return [GCD,n*m/GCD]
}
function gcd(n,m){
    if(m===0)return n
    return gcd(m,n%m)
}