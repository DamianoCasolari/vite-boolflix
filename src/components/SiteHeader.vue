<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="container-fluid d-flex justify-content-between">
        <nav>ciao</nav>
        <div class="profile_zone">
            <div class="form-group search_container d-flex">
                <button for="searchInput" @click="store.searchMovie(store.API_URL)">magnifying glass</button>
                <input id="searchInput" class="form-control" type="text" placeholder="search" v-model="store.nameMovie">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
