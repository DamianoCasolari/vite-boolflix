
<script>
import infoOverlay from './infoOverlay.vue';
import { store } from '../store';
import { countryFlags, isoLangs } from "../data/countryFlags";

import axios from 'axios';

export default {
    data() {


        return {
            store,
            countryFlags,
            isoLangs,
            currentIndex: 0,
        }
    },
    components: {
        infoOverlay
    },
    methods: {
        starVote(movie) {
            return Math.ceil(movie.vote_average / 2)
        },
        starEmpty(movie) {
            return 5 - Math.round(movie.vote_average / 2)
        },
        first20Words(text) {
            let words = text.split(" ");
            let first20Words = words.slice(0, 20);
            return first20Words.join(" ");

        }

    }

}
</script>


<template>
    <main>
        <ul class="d-flex flex-wrap align-items-center justify-content-start">

            <li class="col col-12 col-md-6 col-lg-3 col-xxl-2 d-flex justify-content-center c_pointer my_card"
                v-for="movie, index in store.listMovies">

                <div class="card_front Cover_container d-flex justify-content-center">
                    <img v-if="movie.poster_path" class="cover_movie" :src="store.image_url + movie.poster_path"
                        alt="Cover movie">
                    <img v-else class="cover_movie not_available" src="../assets/img/not_available.png" alt="Cover movie">
                </div>

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
                                <span class="lenguage">{{ isoLangs[movie.original_language].name }}</span>
                            </div>
                            <div class="vote">{{ "Rating " + (movie.vote_average / 2).toFixed(2) }}</div>
                            <div id="index" class="">
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
    <!-- <infoOverlay v-if="this.store.listMovies" :clickedMovie="this.store.listMovies[this.currentIndex]" /> -->
</template>

<style lang="scss" scoped></style>