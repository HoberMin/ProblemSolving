function solution(genres, plays) {
    const genresSum = {}
    genres.forEach((e,i) => {
        if(!genresSum[e]) {genresSum[e] = plays[i]}
        else{genresSum[e] += plays[i]}
    })
    const genreList = []
    
    for(const key of Object.keys(genresSum)){
        genreList.push([key,genresSum[key]])
    }
    
    genreList.sort((a,b) => b[1] - a[1])
    
    const genreFilter = genreList.map(e => e[0])
    
    const genreMatchPlays = {}
    
    genreFilter.forEach(item => {
        genres.forEach((e,i) => {
            if (e===item) {
                if(!genreMatchPlays[e]) genreMatchPlays[e] = [[i, plays[i]]]
                else genreMatchPlays[e].push([i,plays[i]])
            }
        })
    })
    
    const answer = []
    
    for(const genre of Object.values(genreMatchPlays)){
        genre.sort((a,b) => b[1]-a[1])
        genre.forEach((e,i) => {
            if(i<=1) answer.push(e[0])
        })
    }
    
    return answer
    
}


// 1. 장르별 최종 합을 구한다.
// 2. 장르별 합의 따라 장르를 새로정렬한다.
// 3. 