<script>

import { countryFlags, isoLangs } from "../data/countryFlags";

export default {
    name: "InfoOverlay",
    setup() {


        return {
            countryFlags,
            isoLangs,
            closed: true,

        }

    },
    props: {
        clickedMovie: Object,
        castList: Array,
        genresIdList: Array,
        genresTvIdList: Array


    },
    methods: {
        starVote(movie) {
            return Math.round(movie.vote_average / 2)
        }, starEmpty(movie) {
            return 5 - Math.round(movie.vote_average / 2)
        },
        filter5Actors(array) {
            const popularityArray = array.sort((a, b) => b.popularity - a.popularity)
            const limitedArray = popularityArray.slice(0, 10)
            return limitedArray
        },
        findGenreName(movie, id) {
            if (movie.title) {
                const Object = this.genresIdList.find(genre => genre.id == id)
                return Object.name
            } else if (movie.name) {
                const Object = this.genresTvIdList.find(genre => genre.id == id)
                return Object.name
            }
        }
    }

}
</script>

<template>
    <div class="overlay" @click="$emit('closeOverlay')">
        <div class="description">

            <!-- title/date  -->
            <h3 v-if="clickedMovie.title" class="title h3">{{ clickedMovie.title }}</h3>
            <h3 v-if="clickedMovie.name" class="title h3">{{ clickedMovie.name }}</h3>
            <h5 v-if="clickedMovie.original_title" class="original_title">{{ clickedMovie.original_title }}</h5>
            <h5 v-if="clickedMovie.original_name" class="original_titleh5">{{ clickedMovie.original_name }}</h5>

            <!-- release date -->
            <div v-if="clickedMovie.release_date" class="release_date">{{ clickedMovie.release_date }}</div>
            <div v-if="clickedMovie.first_air_date" class="release_date">{{ clickedMovie.first_air_date }}</div>

            <!-- leanguage -->
            <div class="language_container">
                <span class="flag" v-if="countryFlags[clickedMovie.original_language]">
                    <img class="flags" :src="countryFlags[clickedMovie.original_language]" alt="flag_country">
                </span>
                <span class="lenguage">{{ isoLangs[clickedMovie.original_language].name }}</span>
            </div>

            <!-- ratings  -->
            <div class="vote">{{ "Rating " + (clickedMovie.vote_average / 2).toFixed(2) }}</div>
            <div id="index" class="stars_vote">
                <font-awesome-icon class="text-warning" icon="star" v-for="icon in this.starVote(clickedMovie)" />
                <font-awesome-icon icon="star" v-for="icon in this.starEmpty(clickedMovie)" />
            </div>

            <!-- Movie genres  -->
            <div class="genres d-flex flex-wrap">
                <span class="me-2 fw-bold" v-for="genre in clickedMovie.genre_ids">{{ findGenreName(clickedMovie, genre)
                }}</span>
            </div>

            <!-- description  -->
            <div v-if="clickedMovie.overview" class="overview">{{ clickedMovie.overview }}
            </div>


            <!-- cast of movie  -->
            <div class="credits d-flex justify-content-around flex-wrap" v-if="castList">
                <div class="profile_actor" v-for="actor, index in filter5Actors(castList)" :key="index">
                    <div class="pictures_container">
                        <img class="pictures c_pointer" :src="'https://image.tmdb.org/t/p/w185' + actor.profile_path"
                            :alt="'photo not available'">
                    </div>
                    <div class="actor_name">{{ actor.name }}</div>
                </div>
            </div>


            <!-- close button  -->
            <div class="x_close c_pointer" @click="$emit('closeOverlay')">
                &#x2716;
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
