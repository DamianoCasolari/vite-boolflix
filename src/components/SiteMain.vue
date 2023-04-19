
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
            return 5 - Math.ceil(movie.vote_average / 2)
        },
    }

}
</script>



<template>
    <ul class="row row-col-1 row-col-md-2 row-col-lg-4 row-col-xl-6  ">
        <li class="col" v-for="movie, index in store.listMovies">
            <div v-if="movie.title" class="title">{{ movie.title }}</div>
            <div v-if="movie.name" class="title">{{ movie.name }}</div>
            <div v-if="movie.original_title" class="original_title">{{ movie.original_title }}</div>
            <div v-if="movie.original_name" class="original_title">{{ movie.original_name }}</div>
            <div class="Cover_container" v-if="movie.poster_path">
                <img :src="store.image_url + movie.poster_path" alt="Cover movie">
            </div>
            <div class="language_container">
                <div class="flag" v-if="countryFlags[movie.original_language]">
                    <img :src="countryFlags[movie.original_language]" alt="flag_country">
                </div>
                <div class="lenguage">{{ isoLangs[movie.original_language].name }}</div>
            </div>
            <div class="vote">{{ movie.vote_average / 2 }}</div>
            <div id="index" class="d-flex star_container">
                <font-awesome-icon class="text-warning" icon="star" v-for="icon in this.starVote(movie)" />
                <font-awesome-icon icon="star" v-for="icon in this.starEmpty(movie)" />
            </div>

        </li>

    </ul>
</template>

<style lang="scss" scoped></style>