document.addEventListener('DOMContentLoaded', () => {
    let movies = JSON.parse(localStorage.getItem('watchlist'));
    function renderMovies(movies) {
        let moviesHTML = movies.map(currentMovie => {
            return `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h6>
                    <button href="#" class="btn btn-primary" onclick ="removeFromWatchList('${currentMovie.imdbID}')">Remove</button>
                </div>
            </div>
            `
        });
        return moviesHTML.join('');
    }
    document.querySelector(".movies-container").innerHTML = renderMovies(movies);
});

function removeFromWatchList(imdbID) {
    let movie = movieData.find(currentMovie => {
        return currentMovie.imdbID == imdbID;
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);;
    watchlist.pop(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    window.location.reload(false);
}