function solution(cacheSize, cities) {
    let cache = []
    let hitTime = 0
    
    if(cacheSize===0){
        return cities.length * 5
    }
    
    cities.forEach(item => {
        item = item.toUpperCase()
        if (cache.includes(item)){
                cache = cache.filter(element => element !== item)
                hitTime += 1
        }else{
            hitTime += 5
            if (cache.length >= cacheSize) { cache = cache.slice(1) }
        }
        cache.push(item)
    })
    return hitTime
}


