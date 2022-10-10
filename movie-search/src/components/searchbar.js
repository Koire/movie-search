import { debounce } from "../utils/debounce.js"
import { searchMovies } from "../utils/requests.js"
import { createEntry } from "./createEntry.js"
const resultsContainer = document.getElementById("resultsList")
const searchBar = document.getElementById("movie-search")
const searchIcon = document.getElementById("fa-search-icon")

/**
 * Searches for movies and updates the dom
 * @param {string} searchValue input value to search
 */
const searchAndUpdate = (searchValue = "") => {
    searchMovies(searchValue).then(res => {
        resultsContainer.innerHTML = ""
        if (res.results.length === 0 || searchValue.length === 0) {
            return
        }
        res.results.forEach(movie => {
            resultsContainer.append(
                createEntry(movie)
            )
        })
    })
}

export const init = () => {
    const search = debounce(searchAndUpdate)
    searchIcon.addEventListener("click", () => {
        searchBar.focus()
    })
    searchBar.addEventListener(
        "input",
        async ({target: {value}}) => {
            if (value.length === 0) return
            search(value)
        }
    )
    if(searchBar.value.length > 0) {
        searchAndUpdate(searchBar.value)
    }
}