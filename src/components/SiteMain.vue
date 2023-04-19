
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
            <div class="title">{{ movie.title }}</div>
            <div class="original_title">{{ movie.original_title }}</div>
            <div class="lenguage">{{ movie.original_language }}</div>
            <div class="vote">{{ movie.vote_average }}</div>
        </li>

    </ul>
</template>

<style lang="scss" scoped></style>