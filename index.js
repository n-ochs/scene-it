document.addEventListener('DOMContentLoaded', () => {
    function renderMovies(movieArray) {
        let movieHTML = movieArray.map(currentMovie => {
            return `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h6>
                    <a href="#" class="btn btn-primary">Add!</a>
                </div>
            </div>
            `
        })
        return movieHTML.join('');
    }
    document.querySelector(".movies-container").innerHTML = renderMovies(movieData)
})