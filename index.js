document.addEventListener('DOMContentLoaded', () => {
    function renderMovies(movieArray) {
        let movieHTML = movieArray.map(currentMovie => {
            return `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h6>
                    <button href="#" class="btn btn-primary" onclick ="saveToWatchList('${currentMovie.imdbID}')">Add!</button>
                </div>
            </div>
            `
        });
        return movieHTML.join('');
    }
    document.getElementById('search-form').addEventListener('submit', e => {
        e.preventDefault();
        document.querySelector(".movies-container").innerHTML = renderMovies(movieData);
    });
});

function saveToWatchList(imdbID) {
    let movie = movieData.find(currentMovie => {
        return currentMovie.imdbID == imdbID;
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}