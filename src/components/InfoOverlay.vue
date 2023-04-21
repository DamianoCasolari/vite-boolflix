<script>

import { countryFlags, isoLangs } from "../data/countryFlags";

export default {
    name: "infoOverlay",
    setup() {


        return {
            countryFlags,
            isoLangs,
            closed: true,

        }

    },
    props: {
        clickedMovie: Object
    },
    methods: {
        starVote(movie) {
            return Math.ceil(movie.vote_average / 2)
        }, starEmpty(movie) {
            return 5 - Math.round(movie.vote_average / 2)
        }
    }

}
</script>

<template>
    <div class="overlay">
        <div class="description">

            <h3 v-if="clickedMovie.title" class="title">{{ clickedMovie.title }}</h3>
            <h3 v-if="clickedMovie.name" class="title">{{ clickedMovie.name }}</h3>
            <h5 v-if="clickedMovie.original_title" class="original_title">{{ clickedMovie.original_title }}</h5>
            <h5 v-if="clickedMovie.original_name" class="original_title">{{ clickedMovie.original_name }}</h5>
            <div class="language_container">
                <span class="flag" v-if="countryFlags[clickedMovie.original_language]">
                    <img class="flags" :src="countryFlags[clickedMovie.original_language]" alt="flag_country">
                </span>
                <span class="lenguage">{{ isoLangs[clickedMovie.original_language].name }}</span>
            </div>
            <div class="vote">{{ "Rating " + (clickedMovie.vote_average / 2).toFixed(2) }}</div>
            <div id="index" class="">
                <font-awesome-icon class="text-warning" icon="star" v-for="icon in this.starVote(clickedMovie)" />
                <font-awesome-icon icon="star" v-for="icon in this.starEmpty(clickedMovie)" />
            </div>
            <div v-if="clickedMovie.overview" class="overview">{{ clickedMovie.overview }}
            </div>

            <div class="x_close">
                &#x2716;
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
// @use "../utility_selector.scss" as *;

.overlay {
    position: fixed;
    top: 100px;
    left: 0;
    height: calc(100vh - 100px);
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.688);
    display: flex;
    justify-content: center;
    align-items: center;


    .description {
        padding: 30px 20px;
        width: 80%;
        border-radius: 20px 5px 5px 20px;
        background-color: $clr_primary;
        color: $clr_light;
        filter: drop-shadow(2px 2px 5px black);
        position: relative;
        max-height: 80%;
        overflow-y: auto;


        .flags {
            height: 25px;
            width: 40px;
            vertical-align: middle;
            margin-right: 15px;
        }

        .x_close {
            position: absolute;
            top: 10px;
            right: 10px;

        }

    }


}
</style>
