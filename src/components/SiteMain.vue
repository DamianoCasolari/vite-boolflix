
<script>
import { store } from '../store';
import { countryFlags, isoLangs } from "../data/countryFlags";

import axios from 'axios';

export default {
    data() {


        return {
            store,
            countryFlags,
            isoLangs,
        }
    },
    methods: {
        starVote(movie) {
            return Math.ceil(movie.vote_average / 2)
        },
        starEmpty(movie) {
            return 5 - Math.round(movie.vote_average / 2)
        },

    }

}
</script>



<template>
    <main>
        <ul class="d-flex flex-wrap align-items-center">
            <li class="col col-12 col-md-6 col-lg-3 col-xxl-2" v-for="movie, index in store.listMovies" @mouseover=""
                @mouseleave="">
                <div v-if="movie.title" class="title">{{ movie.title }}</div>
                <div v-if="movie.name" class="title">{{ movie.name }}</div>
                <div v-if="movie.original_title" class="original_title">{{ movie.original_title }}</div>
                <div v-if="movie.original_name" class="original_title">{{ movie.original_name }}</div>
                <div class="Cover_container" v-if="movie.poster_path">
                    <img class="cover_movie" :src="store.image_url + movie.poster_path" alt="Cover movie">
                </div>
                <div class="language_container">
                    <div class="flag" v-if="countryFlags[movie.original_language]">
                        <img class="flags" :src="countryFlags[movie.original_language]" alt="flag_country">
                    </div>
                    <div class="lenguage">{{ isoLangs[movie.original_language].name }}</div>
                </div>
                <div class="vote">{{ "Rating " + (movie.vote_average / 2).toFixed(2) }}</div>
                <div id="index" class="d-flex star_container justify-content-center">
                    <font-awesome-icon class="text-warning" icon="star" v-for="icon in this.starVote(movie)" />
                    <font-awesome-icon icon="star" v-for="icon in this.starEmpty(movie)" />
                </div>

            </li>

        </ul>
    </main>
</template>

<style lang="scss" scoped></style>