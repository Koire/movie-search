import { getImage, getMovieDetails } from "../utils/requests.js"

const clearDetails =  () => {
    const details= document.getElementById("movieDetails")
    details.classList.add("animate__fadeOutDown")
    details.querySelector("#movie-title").textContent =""
    details.querySelector("#movie-image").src = ""
    details.querySelector("#movie-rating").textContent = ""
    details.querySelector("#movie-overview").textContent =""

    setTimeout(() => {
        document.getElementById("blur-cover").classList.add("hide")
        document.getElementById("blur-cover").classList.remove("show")
        details.classList.remove("animate__fadeOutDown")
    }, 800)
     
}

export const showDetails = (movie) => {
    getMovieDetails(movie.id).then(res => {
        const details= document.getElementById("movieDetails")
        details.querySelector("#movie-title").textContent = movie.title
        details.querySelector("#movie-image").src = getImage(movie.backdrop_path)
        details.querySelector("#movie-rating").textContent = movie.vote_average
        details.querySelector("#movie-overview").textContent = movie.overview
        document.getElementById("blur-cover").classList.add("show")
        document.getElementById("blur-cover").classList.remove("hide")
        
    })
}

export const init = () => {
    const blur = document.getElementById("blur-cover")
    const details = document.getElementById("movieDetails")
    details.addEventListener("click", e => e.stopPropagation())
    blur.addEventListener("click", () => {
        clearDetails()
    })
    const closeDetails = document.getElementById("close-details")
    closeDetails.addEventListener("click", () => {
        clearDetails()
    })
}

