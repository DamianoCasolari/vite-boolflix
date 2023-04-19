import axios from "axios";

export const store = {
    nameMovie: "",
    listMovies: [],
    API_URL: "https://api.themoviedb.org/3/search/movie?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US&page=1&include_adult=false",
    searchMovie(url) {
        axios
            .get(url + `&query=${this.nameMovie}`)
            .then(response => {
                this.listMovies = response.data.results
                console.log(this.listMovies);
            })
            .catch(err => {
                console.error(err.message);
            })
    }
}