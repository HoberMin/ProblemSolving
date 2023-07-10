function solution(n, m) {
    let gcd = 0
    for(i=n; i>=1; i--){
        if (n%i===0 && m%i===0){ 
            gcd=i 
            break
        }
    }
    return [gcd,n*m/gcd]
}