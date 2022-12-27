function solution(strings, n) {
    return strings.sort((a,b)=>{
        if(a[n].charCodeAt()>b[n].charCodeAt()) return 1
        if(a[n].charCodeAt()<b[n].charCodeAt()) return -1
        return a>b? 1 : -1
    })
    }