import axios from "axios";

export const store = {
    nameMovie: "",
    listMovies: [],
    API_URL: "https://api.themoviedb.org",

    searchMovie(url) {
        axios.all([
            axios.get(url + `/3/search/movie?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US&page=1&include_adult=false&query=${this.nameMovie}`),
            axios.get(url + `/3/search/tv?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US&page=1&include_adult=false&query=${this.nameMovie}`)
        ]).then(response => {
            const movies = response[0].data.results
            const tv = response[1].data.results
            console.log(movies);
            console.log(tv);
            this.listMovies = [...movies, ...tv]
        })
            .catch(err => {
                console.error(err.message);
            })
    }
}