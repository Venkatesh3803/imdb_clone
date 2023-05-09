

const globle = {
	currentPage: window.location.pathname,

	search: {
		term: "",
		type: "",
		totalResults: 0,
		totalPages: 0,
	},

	api: {
		API_KEY: "e31671c359169ad6021c28eb5db767a1",
		API_URL: "https://api.themoviedb.org/3"
	}

}

async function fetchMovieData(endpoint) {

	const API_KEY = globle.api.API_KEY;
	const API_URL = globle.api.API_URL;

	const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`)
	const data = await res.json()
	return data;

}


async function displayMoviesDetails() {
	let movieId = window.location.search.split("=")[1]


	const movieDetails = await fetchMovieData(`/movie/${movieId}`)
	console.log(movieDetails)

	const div = document.createElement("div")
	div.classList.add("detailspage_container")

	div.innerHTML = `
	<div class = "background"></div>
	${movieDetails.backdrop_path ? `<img src="https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}"alt="">` : `<img src="../images/showcase-bg.jpg"alt="">`}
	<div class="detailspage_content">
		<div class="detalispage_left">
		<img src="https://image.tmdb.org/t/p/w500${movieDetails.poster_path}"alt="">
		</div>
		<div class="detailspage_right">
			<h1>${movieDetails.title}</h1>
			<p>${movieDetails.overview}</p>
			<h3>Rating: <span><i class="fa fa-star"></i> ${movieDetails.vote_average} /10</span></h3>
			<h3>Release date: <span>${movieDetails.release_date} </span></h3>
			<h3>Run Time: <span>${movieDetails.release_date} Min</span></h3>
			<h3> Languages :-<ul>
			${movieDetails.spoken_languages.map((i) => `<li>${i.name}</li>`).join("")}
			</ul></h3>
			<button> Home Page <i class="fa fa-play"></i> </button>
		</div>
	</div>
	`
	document.getElementById("details_page").appendChild(div)
}


async function displayTvDetails() {
	let tvId = window.location.search.split("=")[1]


	const tvDetails = await fetchMovieData(`/tv/${tvId}`)
	console.log(tvDetails)

	const div = document.createElement("div")
	div.classList.add("detailspage_container")

	div.innerHTML = `
	<div class = "background"></div>
	 ${tvDetails.backdrop_path ? `<img src="https://image.tmdb.org/t/p/w500${tvDetails.backdrop_path}"alt="">` : `<img src="../images/showcase-bg.jpg"alt="">`}
	<div class="detailspage_content">
		<div class="detalispage_left">
		<img src="https://image.tmdb.org/t/p/w500${tvDetails.poster_path}"alt="">
		</div>
		<div class="detailspage_right">
			<h1>${tvDetails.name}</h1>
			<p>${tvDetails.overview}</p>
			<h3>Rating: <span><i class="fa fa-star"></i> ${tvDetails.vote_average} /10</span></h3>
			<h3>Started date: <span>${tvDetails.first_air_date} </span></h3>
			<h3>Total Episodes: <span>${tvDetails.number_of_episodes}</span></h3>
			<h3> Languages :-<ul>
			${tvDetails.spoken_languages.map((i) => `<li>${i.name}</li>`).join("")}
			</ul></h3>
			<button> Home Page <i class="fa fa-play"></i> </button>
		</div>
	</div>

	`
	document.getElementById("details_page").appendChild(div)
}




async function fetchingSimilarMovies() {
	const { results } = await fetchMovieData("/movie/popular")

	results.slice(0, 15).forEach((movie) => {
		let div = document.createElement("div")
		div.classList.add("card");

		div.innerHTML = `
		<a href="movie-details.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
                    <div class="movie_details">
                        <h3>${movie.title}</h3>
                        <p>Rating : ${movie.vote_average}</p>
                        <p>Release Date :${movie.release_date}</p>
                    </div>
                </a>
		`

		document.getElementById("similar_container").appendChild(div)
	})
}


async function fetchingSimilarTv() {
	const { results } = await fetchMovieData("/tv/popular")

	results.slice(0, 15).forEach((tv) => {
		let div = document.createElement("div")
		div.classList.add("card");

		div.innerHTML = `
		<a href="tv-details.html?id=${tv.id}">
                    <img src="https://image.tmdb.org/t/p/w500${tv.poster_path}"alt="">
                    <div class="movie_details">
                        <h3>${tv.name}</h3>
                        <p>Rating : ${tv.vote_average}</p>
                        <p>Release Date :${tv.first_air_date}</p>
                    </div>
                </a>
		`

		document.getElementById("similar_container").appendChild(div)
	})
}


async function displayMovies() {
	const { results } = await fetchMovieData("/movie/popular")

	results.forEach((movie) => {
		let div = document.createElement("div")
		div.classList.add("card");
		// div.classList.add("swiper-slide");

		div.innerHTML = `
		<div class="card_background"></div>
		<a href="movie-details.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
                    <div class="movie_details">
                        <h3>${movie.title}</h3>
                        <p>Rating : ${movie.vote_average}</p>
                        <p>Release Date :${movie.release_date}</p>
                    </div>
                </a>
		`

		document.getElementById("movie_container").appendChild(div)
	})
}






async function displayTvShow() {
	const { results } = await fetchMovieData("/tv/popular")

	results.forEach((tv) => {
		let div = document.createElement("div")
		div.classList.add("card");


		div.innerHTML = `
		<a href="tv-details.html?id=${tv.id}">
                    <img src="https://image.tmdb.org/t/p/w500${tv.poster_path}"alt="">
                    <div class="movie_details">
                        <h3>${tv.name}</h3>
                        <p>Rating : ${tv.vote_average}</p>
                        <p>Release Date :${tv.release_date}</p>
                    </div>
                </a>
		`

		document.getElementById("tv_container").appendChild(div)
	})
}




async function displayWebSeries() {
	const { results } = await fetchMovieData("/movie/upcoming")

	results.forEach((movie) => {
		let div = document.createElement("div")
		div.classList.add("card");


		div.innerHTML = `
		<a href="movie-details.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"alt="">
                    <div class="movie_details">
                        <h3>${movie.title}</h3>
                        <p>Rating : ${movie.vote_average}</p>
                        <p>Release Date :${movie.release_date}</p>
                    </div>
                </a>
		`

		document.getElementById("web_container").appendChild(div)
	})
}

function sliderImplementaion() {
	const swiper = new Swiper('.swiper', {
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteration: false
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar

	});
}

async function heroSlider() {

	const { results } = await fetchMovieData("/movie/top_rated")
	results.slice(0, 5).forEach((movie) => {
		const div = document.createElement("div")
		div.classList.add("swiper-slide");
		div.classList.add("slides");
		div.innerHTML = ` 
		<img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title}" />
		<div class="details">
			<h3> ${movie.title}</h3>
			<P>${movie.overview}</P>
			<div class="rating">
				<h4>rating :</h4>
				<i class="fa fa-star"></i> <span>${movie.vote_average}</span>
			</div>
			<button>Watch</button>
		</div>`
		const sliderDiv = document.getElementById("slider")
		sliderDiv.appendChild(div)
	})

	sliderImplementaion()
}






function init() {
	switch (globle.currentPage) {
		case "/":
		case "/index.html":
			heroSlider()
			displayMovies()
			displayTvShow()
			displayWebSeries()
			break;
		case "/movies.html":
			displayMovies()
			break
		case "/tvshows.html":
			displayTvShow()
			break
		case "/series.html":
			displayWebSeries()
			break
		case "/movie-details.html":
			displayMoviesDetails()
			fetchingSimilarMovies()
			break
		case "/tv-details.html":
			displayTvDetails()
			fetchingSimilarTv()
			break

	}
}

document.addEventListener('DOMContentLoaded', init());



