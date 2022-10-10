// This is not a good practice, but, the apikey is public and needed for every request
const apiKey = "d9ed53fa5ffb85b684e7b3eb05f08b10"

const apiURL = new URL("https://api.themoviedb.org/3/search/movie")
apiURL.searchParams.append("api_key", apiKey)

/**
 *  Finds the image from the tmdb
 * @param {string} backdrop 
 * @returns URL with the target of the image
 */
export const getImage = backdrop => {
    return new URL(`https://image.tmdb.org/t/p/w500/${backdrop}`)

}

/**
 *  Returns JSON from an api request
 * @param {URL} url the url of the request 
 * @returns 
 */
const fetchJson = url => {
    return fetch(url).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).catch(err => {
        console.error(err);
    })
}

/**
 *  Searches the database for a movie matching the string provided in search params
 * @param {string} searchParams a query string to search for a movie
 * @returns Promise<json>
 */
export const searchMovies = (searchParams) => {
    const searchURL = new URL(apiURL)
    searchURL.searchParams.append("query", searchParams)
    return fetchJson(searchURL)
}

/**
 * Gets more information from the database regarding a movie with a specific ID
 * @param {number} movieID 
 */
export const getMovieDetails = movieID => {
    if (!Number.isInteger(movieID)) throw new Error("Cannot request details without a valid movie ID")
    const detailURL = new URL(`../movie/${movieID}`, apiURL)
    detailURL.searchParams.append("api_key", apiKey)
    return fetchJson(detailURL)
}