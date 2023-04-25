
<script>
import InfoOverlay from './InfoOverlay.vue';
import WaitingIcons from './WaitingIcons.vue';
import ShowcaseSlider from './ShowcaseSlider.vue';
import MovieCardFront from './MovieCardFront.vue';
import MovieCardBack from './MovieCardBack.vue';

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
        WaitingIcons,
        MovieCardFront,
        MovieCardBack,
        ShowcaseSlider
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

        <div v-if="store.loading == false && store.listMovies.length == 0 && store.getTrendigMovies.length != 0">
            <ShowcaseSlider />

        </div>

        <!-- LOADING ICON  -->

        <WaitingIcons v-else-if="store.loading == true && store.listMovies.length == 0" />


        <!-- MOVIES LIST  -->

        <ul class="d-flex flex-wrap align-items-center justify-content-start" v-else>

            <!-- SINGLE COVER MOVIE  -->

            <li v-show="movie.visible"
                class="col col-12 col-md-6 col-lg-3 col-xxl-2 justify-content-center c_pointer my_card"
                v-for="movie, index in store.listMovies" @click="showOverlay(movie, index)" :key="index">

                <!-- FRONT POSTER  -->

                <MovieCardFront :store="store" :movie="movie" />


                <!-- BACK POSTER  -->

                <MovieCardBack :movie="movie" :store="store" :countryFlags="countryFlags" :isoLangs="isoLangs"
                    :starVote="starVote" :starEmpty="starEmpty" :first20Words="first20Words" />
            </li>

        </ul>
    </main>

    <!-- OVERLAY INFO -->

    <InfoOverlay v-if="store.listMovies && clicked" :clickedMovie="store.listMovies[currentIndex]"
        @closeOverlay="closeOverlay()" :starVote="starVote" :starEmpty="starEmpty" :castList="store.starList"
        :genresIdList="store.genreIdList" :genresTvIdList="store.genreTvIdList" />
</template>

<style lang="scss" scoped></style>
