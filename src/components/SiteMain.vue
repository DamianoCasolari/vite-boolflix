
<script>
import InfoOverlay from './InfoOverlay.vue';
import LoadingIcons from './LoadingIcons.vue';
import { store } from '../store';
import { countryFlags, isoLangs } from "../data/countryFlags";


import axios from 'axios';

export default {
    data() {


        return {
            store,
            countryFlags,
            isoLangs,
            currentIndex: -1,
            clicked: false,
        }
    },
    components: {
        InfoOverlay,
        LoadingIcons
    },
    methods: {
        starVote(movie) {
            return Math.round(movie.vote_average / 2)
        },
        starEmpty(movie) {
            return 5 - Math.round(movie.vote_average / 2)
        },


        first20Words(text) {
            let words = text.split(" ");
            let first20Words = words.slice(0, 20);
            return first20Words.join(" ");

        },
        showOverlay(film, index) {
            this.currentIndex = index;
            console.log(this.currentIndex);
            this.clicked = true;
            if (film.title) {
                this.store.gatMoviesCast(this.store.API_URL, film.id)
            } else if (film.name) {
                this.store.gatTvCast(this.store.API_URL, film.id)
            }

        },

        closeOverlay() {
            store.starList = []
            this.currentIndex = -1
            this.clicked = false

        }


    }
}
</script>


<template>
    <main>

        <!-- RANDOM TRENDIND SLIDER MOVIE   -->

        <div v-if="store.loading == false && store.listMovies.length == 0" class="text-white">ciaooooooooooooooooooo</div>

        <!-- LOADING ICON  -->

        <LoadingIcons v-else-if="store.loading == true && store.listMovies.length == 0" />

        <!-- MOVIES LIST  -->

        <ul class="d-flex flex-wrap align-items-center justify-content-start" v-else>

            <!-- SINGLE COVER MOVIE  -->

            <li class="col col-12 col-md-6 col-lg-3 col-xxl-2 d-flex justify-content-center c_pointer my_card"
                v-for="movie, index in store.listMovies" @click="showOverlay(movie, index)" :key="index">

                <!-- FRONT POSTER  -->

                <div class="card_front Cover_container d-flex justify-content-center">
                    <img v-if="movie.poster_path" class="cover_movie" :src="store.image_url + movie.poster_path"
                        alt="Cover movie">
                    <img v-else class="cover_movie not_available" src="../assets/img/not_available.png" alt="Cover movie">
                </div>


                <!-- BACK POSTER  -->

                <div class="card_back d-flex justify-content-center">
                    <div class="Cover_container position-relative d-flex justify-content-center">
                        <img v-if="movie.poster_path" class="cover_movie darkcover"
                            :src="store.image_url + movie.poster_path" alt="Cover movie">
                        <img v-else class="cover_movie not_available darkcover" src="../assets/img/not_available.png"
                            alt="Cover movie">

                        <div class="info_container position-absolute top-0 start-0 ">
                            <h3 v-if="movie.title" class="title">{{ movie.title }}</h3>
                            <h3 v-if="movie.name" class="title">{{ movie.name }}</h3>
                            <h5 v-if="movie.original_title" class="original_title">{{ movie.original_title }}</h5>
                            <h5 v-if="movie.original_name" class="original_title">{{ movie.original_name }}</h5>
                            <div class="language_container">
                                <span class="flag" v-if="countryFlags[movie.original_language]">
                                    <img class="flags" :src="countryFlags[movie.original_language]" alt="flag_country">
                                </span>
                                <span v-if="isoLangs[movie.original_language]" class="lenguage">{{
                                    isoLangs[movie.original_language].name }}</span>
                                <span v-else class="lenguage">{{ movie.original_language }}</span>
                            </div>
                            <div class="vote">{{ "Rating " + (movie.vote_average / 2).toFixed(2) }}</div>
                            <div id="index" class="star_vote">
                                <font-awesome-icon class="text-warning" icon="star" v-for="icon in this.starVote(movie)" />
                                <font-awesome-icon icon="star" v-for="icon in this.starEmpty(movie)" />
                            </div>
                            <div v-if="movie.overview" class="overview">{{ first20Words(movie.overview) + "..." }}
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </main>

    <!-- OVERLAY INFO -->

    <InfoOverlay v-if="store.listMovies && clicked" :clickedMovie="store.listMovies[currentIndex]"
        @closeOverlay="closeOverlay()" :castList="store.starList" :genresIdList="store.genreIdList"
        :genresTvIdList="store.genreTvIdList" />
</template>

<style lang="scss" scoped></style>