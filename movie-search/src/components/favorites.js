import { getFavorites, isFavorite, markFavorite, removeFavorite } from "../utils/storage.js"
import { createEntry } from "./createEntry.js";

const favoritesContainer = document.getElementById("favoritesList")


const createFavorite = movie =>{
    const newFavorite  = createEntry(movie)
    newFavorite.querySelector("div").id = `favorite-${movie.id}`
    return newFavorite
}


export const init = () => {
    const favorites = getFavorites();
    favorites.forEach(favorite => {
        favoritesContainer.append(
            createFavorite(favorite)
        )
    })
}

export const addFavorite = movie => {
    markFavorite(movie)
    favoritesContainer.append(createFavorite(movie))
}

export const unMarkFavorite = movie => {
    removeFavorite(movie)
    const favoriteToRemove = document.getElementById(`favorite-${movie.id}`)
    favoriteToRemove.classList.add("animate__animated")
    favoriteToRemove.classList.add("animate__fadeOut")
    setTimeout(() => favoriteToRemove.remove(), 800)
}

export const toggleFavorite = movie => {
    if (isFavorite(movie)) {
        return unMarkFavorite(movie)
    }
    return addFavorite(movie)
}
