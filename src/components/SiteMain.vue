
<script>
import { store } from '../store';

export default {
    data() {


        return {
            store
        }
    }
}
</script>



<template>
    <ul>
        <li v-for="movie in store.listMovies">
            <div v-if="movie.title" class="title">{{ movie.title }}</div>
            <div v-if="movie.name" class="title">{{ movie.name }}</div>
            <div v-if="movie.original_title" class="original_title">{{ movie.original_title }}</div>
            <div v-if="movie.original_name" class="original_title">{{ movie.original_name }}</div>
            <div class="lenguage">{{ movie.original_language }}</div>
            <div class="vote">{{ movie.vote_average }}</div>
        </li>

    </ul>
</template>

<style lang="scss" scoped></style>