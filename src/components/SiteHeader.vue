<script>
// import CountryFlag from 'vue-country-flag'
import { store } from "../store.js";
import { appearWithScroll, clickEffect } from '../assets/js/utilityMethods.js';
import GenresMenu from "./GenresMenu.vue";


export default {
    data() {
        return {
            store,
            appearWithScroll,
            clickEffect,
        }
    },
    components: {
        GenresMenu
    },
    methods: {
        reload() {
            location.reload()
        },
        changeInTvList(index) {
            this.store.listMovies.forEach((movie) => {
                movie.visible = true
                if (movie.typeShow !== "tv") {
                    movie.visible = false
                }
            })
        },
        changeInMovieList(index) {
            this.store.listMovies.forEach((movie) => {
                movie.visible = true
                if (movie.typeShow !== "film") {
                    movie.visible = false
                }
            })
        },
    }
}
</script>


<template>
    <header class="header container-fluid d-flex justify-content-between align-items-center">
        <nav class="d-flex align-items-center">
            <div class="logo_container d-flex justify-content-center align-items-center" @click="reload()">
                <img class="bigLogo d-none d-md-inline-block" src="../assets/img/Netflix-Logo_preview_rev_1.png"
                    alt="netflix">
                <img class="smallLogo d-inline-block d-md-none" src="../assets/img/Netflix-Logo-2006.png" alt="netflix">
            </div>

            <GenresMenu @checkTvShow="changeInTvList()" @returnHome="store.homeclicked = true"
                @checkMovieShow="changeInMovieList()" />
            <!-- <GenresMenu /> -->

        </nav>
        <div class="profile_zone d-flex align-items-center">
            <div class="form-group search_container d-flex">
                <button class="search_b" for="searchInput" @click="store.searchMovie(store.API_URL)"><font-awesome-icon
                        icon="search" class="fa_s" @click="clickEffect" /></button>
                <input @keyup.enter="store.searchMovie(store.API_URL)" id="searchInput" class="form-control border-0"
                    type="text" placeholder="search" v-model="store.nameMovie">
            </div>
            <font-awesome-icon icon="bell" size="lg" class=" bell c_pointer" />
            <font-awesome-icon icon="user" size="lg" class=" user c_pointer" />
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
