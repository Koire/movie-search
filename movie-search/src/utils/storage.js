
/**
 * Add a movie to your movie list
 * 
 * @param {object} movie An object representing the movie and all the details 
 */
export const markFavorite = movie => {
    // get the movies item, or make an empty array if it doesn't exist
    const movies = getFavorites()
    localStorage.setItem("movies", JSON.stringify([...movies, movie]))
}

/**
 * Remove a movie from your movie list
 * @param {object} movie An object representing the movie and all the details 
 */
export const removeFavorite = movie => {
    const movies = getFavorites()
    localStorage.setItem("movies", JSON.stringify([...movies].filter((it) => it.id !== movie.id)))
}

/**
 * Get your favorites
 * 
 */
export const getFavorites = () => {
    // get the movies item, or make an empty array if it doesn't exist
    let movies = JSON.parse(localStorage.getItem("movies")) || []
    return movies
}

export const isFavorite = movie => {
    let movies = getFavorites()
    return movies.find(it => it.id === movie.id) || false
}