
<script>
import { store } from '../store';
import { countryFlags, isoLangs } from "../data/countryFlags";

import axios from 'axios';

export default {
    data() {


        return {
            store,
            countryFlags,
            isoLangs

        }
    }
}
</script>



<template>
    <ul class="row row-col-1 row-col-md-2 row-col-lg-4 row-col-xl-6  ">
        <li class="col" v-for="movie in store.listMovies">
            <div v-if="movie.title" class="title">{{ movie.title }}</div>
            <div v-if="movie.name" class="title">{{ movie.name }}</div>
            <div v-if="movie.original_title" class="original_title">{{ movie.original_title }}</div>
            <div v-if="movie.original_name" class="original_title">{{ movie.original_name }}</div>
            <div class="language_container">
                <div class="flag" v-if="countryFlags[movie.original_language]">
                    <img :src="countryFlags[movie.original_language]" alt="flag_country">
                </div>
                <div class="lenguage">{{ isoLangs[movie.original_language].name }}</div>
            </div>
            <div class="vote">{{ movie.vote_average }}</div>
        </li>

    </ul>
</template>

<style lang="scss" scoped></style>