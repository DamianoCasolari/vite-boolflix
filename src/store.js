import axios from "axios";

export const store = {
    listMovieTrending: [],
    homeclicked: false,
    nameMovie: "",
    listMovies: [],
    listTvShow: [],
    listCinemaMovies: [],
    API_URL: "https://api.themoviedb.org",
    language_url: "https://flagcdn.com/en/codes.json",
    image_url: "https://image.tmdb.org/t/p/w342",
    trending_url: "https://image.tmdb.org/t/p/original",
    starList: [],
    genreIdList: [],
    genreTvIdList: [],
    menuIndex: 0,
    loading: false,

    // ajax to load all the trending movies from the movie db database  

    getTrendigMovies(image_url) {
        axios.get(image_url + "/3/trending/all/day?api_key=70c8282706a34ee4687ab6063a6b0245&media_type=movie&time_window=week").then((movies) => {
            this.listMovieTrending = movies.data.results
        })
    },
    getTrandingImage(movie) {
        return this.trending_url + movie.backdrop_path
    },



    // ajax to load all the movies from the movie db database connected to the search input 

    searchMovie(url) {
        this.loading = true
        this.homeclicked = false
        axios.all([
            axios.get(url + `/3/search/movie?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US&page=1&include_adult=false&query=${this.nameMovie}`),
            axios.get(url + `/3/search/tv?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US&page=1&include_adult=false&query=${this.nameMovie}`)
        ]).then(response => {
            const movies = response[0].data.results
            const tv = response[1].data.results
            this.listCinemaMovies = [...movies]
            this.listCinemaMovies.forEach((object) => {
                object.typeShow = "film"
                object.visible = true
            })
            this.listTvShow = [...tv]
            this.listTvShow.forEach((object) => {
                object.typeShow = "tv"
                object.visible = true
            })
            this.listMovies = [...movies, ...tv]
            this.loading = false


        })
            .catch(err => {
                console.error(err.message);
            })
    },

    // two ajax to look up the cast of a movie or TV show by id

    gatMoviesCast(url, id_movie) {

        axios.get(url + `/3/movie/${id_movie}/credits?api_key=70c8282706a34ee4687ab6063a6b0245`)
            .then((movies_cast) => {
                this.starList = movies_cast.data.cast
                // console.log(this.starMovieList + "movie LIST");
            }
            )
    },

    gatTvCast(url, id_movie) {
        axios.get(url + `/3/tv/${id_movie}/credits?api_key=70c8282706a34ee4687ab6063a6b0245`)
            .then((tv_cast) => {

                this.starList = tv_cast.data.cast
                // console.log(this.starTvList + "tv LIST");

            }
            )
    },

    // ajax to look up the genre id list 


    getIdList() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US`)
            .then((id_list) => {
                this.homeclicked = false
                this.genreIdList = id_list.data.genres

            }
            )
    },
    getTvIdList() {
        axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=70c8282706a34ee4687ab6063a6b0245&language=en-US`)
            .then((id_list) => {
                this.homeclicked = false
                this.genreTvIdList = id_list.data.genres

            }
            )
    }



}
