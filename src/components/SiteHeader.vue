<script>
// import CountryFlag from 'vue-country-flag'
import { store } from "../store.js";
import { appearWithScroll, clickEffect } from '../assets/js/utilityMethods.js';


export default {
    data() {
        return {
            store,
            appearWithScroll,
            clickEffect
        }
    },
    methods: {
        reload() {
            location.reload()
        }

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
            <div class="classes d-none d-lg-block">

                <a href="#"><span>Home</span></a>
                <a href="#"><span>Serie tv</span></a>
                <a href="#"><span>Film</span></a>
                <a href="#"><span>Originali</span></a>
                <a href="#"><span>Aggiunti di recente</span></a>
                <a href="#"><span>La mia lista</span></a>

            </div>
        </nav>
        <div class="profile_zone d-flex align-items-center">
            <div class="form-group search_container d-flex">
                <button for="searchInput" @click="store.searchMovie(store.API_URL)"><font-awesome-icon icon="search"
                        class="fa_s" @click="clickEffect" /></button>
                <input @keyup.enter="store.searchMovie(store.API_URL)" id="searchInput" class="form-control border-0"
                    type="text" placeholder="search" v-model="store.nameMovie">
            </div>
            <font-awesome-icon icon="bell" size="lg" class=" bell c_pointer" />
            <font-awesome-icon icon="user" size="lg" class=" user c_pointer" />
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
