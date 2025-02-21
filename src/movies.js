// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movies => movies.director)
    return Array.from(new Set(allDirectors))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))
    return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const scores = moviesArray.reduce((acc, movies) => {
        return acc + (movies.score || 0)
    }, 0)
    const avgScore = scores / moviesArray.length
    return parseFloat(avgScore.toFixed(2))
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0
    const dramaMovies = moviesArray.filter(movies => movies.genre.includes('Drama'))
    const scores = dramaMovies.reduce((acc, movies) => {
        return acc + (movies.score)
    }, 0)
    const avgScore = scores / dramaMovies.length
    return parseFloat(avgScore.toFixed(2)) || 0
}   



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYears = [...moviesArray]
    moviesYears.sort((a, b) => {
        if (a.year === b.year) {
           return a.title.localeCompare(b.title)
        } else {
           return a.year - b.year
        }
    })
    return moviesYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitles = [...moviesArray]
    const titles = moviesTitles.map(movies => movies.title)
    titles.sort((a, b) => a.localeCompare(b))
    if (titles.length > 20) return titles.slice(0, 20)
    return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesDuration = [...moviesArray]
    return moviesDuration.map(movies => {
        const durationElements = movies.duration.split(' ');
        const minutes = durationElements.reduce((acc, el) => {
            if (el.includes('h')) {
               return (acc + (parseInt(el))) * 60
            } else if (el.includes('min')) {
               return acc + (parseInt(el))
            }
        }, 0)
        return {
            ...movies,
            duration: minutes
        } 
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
    const years = moviesArray.filter(movies => movies.year).sort((a, b) => a.year - b.year)
}
