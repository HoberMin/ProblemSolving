function solution(word) {
    let start = ['A']
    let count = 1
    while(true){
        
        if (start.join("") === word){
            return count
        }
        
        if(start.length === 0) {
            return
        }
        
        if (start.length < 5){
            start.push('A')
        }
        
        else if (start[start.length-1] === 'U'){
            start = uPop(start)
        }
        
        else if (['A', 'E', 'I', 'O'].includes(start[start.length-1])){
            start = changeArr(start)
        }
        count += 1
    }
}

const uPop = (arr) => {
    const u = arr.pop()
    
    if (arr[arr.length-1] === 'U') {
        return uPop(arr)
    }else {
        return changeArr(arr)
    }
    
}

const changeArr = (arr) => {
    const changeObj = {A:'E', E:'I', I:'O', O:'U'}
    const arrPop = arr.pop()
    arr.push(changeObj[arrPop])
    return arr
    
}
