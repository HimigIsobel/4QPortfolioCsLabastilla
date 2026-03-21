const stars=document.querySelectorAll(".stars i");
let rating=0;

stars.forEach((star, index1)=>{
    star.addEventListener("click",()=>{
            rating=index1+1;

        
        stars.forEach((star, index2)=>{
            index1 >= index2 ? star.classList.add("active"): star.classList.remove("active")
        })
    })

})

      if (typeof(Storage) !== "undefined") {
    console.log("Local storage is supported!");

    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        const title = document.getElementById('title').value;
        const year = document.getElementById('year').value;
        const genre = document.getElementById('genre').value;

        const movie = {
            title: title,
            year: year,
            genre: genre,
            rating: rating
        }

        let movies = JSON.parse(localStorage.getItem('movies')) || [];
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));

        alert('Movie saved!');
        myForm.reset();

        rating = 0;
        stars.forEach(star => star.classList.remove("active"));

            displayMovies();

        
    });
} else {
    console.log("Local storage is not supported in this browser.");
}

function displayMovies() {
    const movieList = document.getElementById('movieList');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieElement = document.createElement('div');

        movieElement.classList.add("movie-item");
        movieElement.innerHTML = `
            ${movie.title} (${movie.year}) - ${movie.genre},
            Rating: <span class="stars">${"⭐".repeat(movie.rating)}</span>
        `;
            movieList.appendChild(movieElement);
        
        
        })
    };

    window.onload = function() {
            displayMovies();
}
