const stars = document.querySelectorAll(".stars i");
let rating = 0;

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        rating = index1 + 1;
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    let movies = JSON.parse(localStorage.getItem('movies')) || [];


    const existingIndex = movies.findIndex(m => m.title === title);
if (existingIndex !== -1) {
    const oldRating = movies[existingIndex].rating;
    const newAverage = Math.round((oldRating + rating) / 2); 
    movies[existingIndex].rating = newAverage;
    alert(`Movie rating updated to average: ${newAverage}`);
} else {
    movies.push({ title, year, genre, rating });
    alert('Movie saved!');
}

    localStorage.setItem('movies', JSON.stringify(movies));

    displayMovies();

    myForm.reset();
    rating = 0;
    stars.forEach(star => star.classList.remove("active"));
});

function displayMovies() {
    const movieList = document.getElementById('movieList');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    movieList.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add("movie-item");
        movieElement.innerHTML = `
            ${movie.title} (${movie.year}) - ${movie.genre},
            Rating: <span class="stars">${"⭐".repeat(movie.rating)}</span>
            <button onclick="if (confirm('Are you sure you want to delete this movie?')) deleteMovie(${index})" class="delete-btn">Delete</button>
        `;
        movieList.appendChild(movieElement);
    });
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

window.onload = displayMovies;
//testing