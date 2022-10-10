import { getImage } from "../utils/requests.js"
import { isFavorite } from "../utils/storage.js"
import { toggleFavorite } from "./favorites.js"
import { showDetails }from "./details.js"

export const createEntry = (movie) => {
    const resultTemplate = document.getElementById("resultTemplate")
    const entry = resultTemplate.content.cloneNode(true)
    const root = entry.querySelector("div")
    root.addEventListener("click", () => {
        console.log("click")
        showDetails(movie)
    })
    root.id = movie.id
    const favorite = entry.querySelector("i")
    if(isFavorite(movie)) {
        favorite.classList.add("favorite")
    }
    favorite.addEventListener("click", (e) => {
        e.stopPropagation()
        toggleFavorite(movie)        
        if(isFavorite(movie)) {
            return favorite.classList.add("favorite")
        }
        return favorite.classList.remove("favorite")
    })
    entry.querySelector("img").src = getImage(movie.poster_path)
    entry.querySelector("span").textContent = movie.title
    return entry
}